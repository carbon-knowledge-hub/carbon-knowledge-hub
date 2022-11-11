import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Stack,
  AspectRatio,
} from "@chakra-ui/layout"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs"
import { readFile } from "fs/promises"
import { join } from "path"
import { csvParse } from "d3-dsv"
import day from "dayjs"

import { BreadCrumbs, BreadCrumb } from "@components/BreadCrumbs"
import SEO from "@components/SEO"
import { LinkBox, LinkOverlay } from "@components/Link"

function SpotifyPreview({ item }) {
  const rootUrl = "https://open.spotify.com/embed/"
  const src = `${rootUrl}${
    item?.url?.split("spotify.com/")[1]
  }?utm_source=generator`
  return (
    <Box minH="22rem">
      <iframe
        style={{ borderRadius: "0.75rem" }}
        src={src}
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay;clipboard-write;encrypted-media;fullscreen;picture-in-picture"
        loading="lazy"
      />
    </Box>
  )
}

function VimeoPreview({ item }) {
  const uploadDate = day(item.upload_date)
  return (
    <LinkBox
      sx={{
        img: { transition: "all 0.5s ease" },
      }}
      _hover={{ img: { transform: "scale(1.05)" } }}
    >
      <Stack spacing={3}>
        <AspectRatio ratio={16 / 9}>
          <Box bg="gray.100">
            <img
              src={item.thumbnail_url_with_play_button}
              width={item.thumbnail_width}
              height={item.thumbnail_height}
              style={{ minWidth: "100%", minHeight: "100%" }}
            />
          </Box>
        </AspectRatio>
        <Stack spacing={2}>
          <Heading fontSize="md">
            <LinkOverlay href={`https://vimeo.com/${item.video_id}`}>
              {item.title}
            </LinkOverlay>
          </Heading>
          <Text
            fontSize="sm"
            lineHeight="shorter"
            fontWeight={600}
            color="gray.500"
          >
            {`${item.author_name} | ${uploadDate.format("DD MMM YYYY")}`}
          </Text>
        </Stack>
      </Stack>
    </LinkBox>
  )
}

export default function MediaPage({ items }) {
  const videoItems = items.filter((d) => d.mediaCategory === "video-vimeo")
  const audioItems = items.filter((d) => d.mediaCategory === "audio-spotify")
  return (
    <>
      <SEO
        title="Media"
        description="Videos and podcasts about carbon markets."
      />
      <Stack spacing={0}>
        <Box w="100%" py={10} position="relative">
          <Container>
            <SimpleGrid
              columns={8}
              spacingX={10}
              spacingY={5}
              alignItems="start"
            >
              <SimpleGrid
                columns={7}
                spacingX={10}
                alignItems="center"
                gridColumn={["1 / -1", null, "1 / -1"]}
              >
                <Box gridColumn="span 5" pt={1}>
                  <BreadCrumbs>
                    <BreadCrumb>{"Media"}</BreadCrumb>
                  </BreadCrumbs>
                </Box>
              </SimpleGrid>
              <Stack spacing={3} gridColumn={["1 / -1"]}>
                <Heading as="h1" w="100%" fontSize="3xl">
                  {"Media"}
                </Heading>
                <Text variant="lead">
                  {"Videos and podcasts about carbon markets."}
                </Text>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
        <Box bg="gray.50" w="100%" pb={20}>
          <Tabs>
            <Box
              bg="white"
              borderBottom="0.0625rem solid"
              borderColor="gray.100"
              position="relative"
            >
              <Container mx="auto">
                <TabList>
                  <Tab fontWeight={600}>{"Videos"}</Tab>
                  <Tab fontWeight={600}>{"Podcasts"}</Tab>
                </TabList>
              </Container>
            </Box>
            <Container mx="auto" pt={12}>
              <TabPanels>
                <TabPanel p={0}>
                  <SimpleGrid columns={[1, null, 2, 3, 4]} gridGap={10}>
                    {videoItems.map((item, i) => {
                      return <VimeoPreview key={i} item={item} />
                    })}
                  </SimpleGrid>
                </TabPanel>
                <TabPanel p={0}>
                  <SimpleGrid columns={[1, null, 2, 3, 4]} gridGap={10}>
                    {audioItems.map((item, i) => {
                      return <SpotifyPreview key={i} item={item} />
                    })}
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Container>
          </Tabs>
        </Box>
      </Stack>
    </>
  )
}

export async function getStaticProps(ctx) {
  const mediaRaw = await readFile(
    join(process.cwd(), "/public/media.csv"),
    "utf8"
  )
  const mediaItems = csvParse(mediaRaw)

  const vimeoItems = await Promise.all(
    mediaItems
      .filter((d) => d.url.includes("vimeo.com/"))
      .map(async (item) => {
        const u = encodeURI(item.url)
        return fetch(`https://vimeo.com/api/oembed.json?url=${u}`).then(
          (res) => res.json()
        )
      })
  )

  const spotifyItems = await Promise.all(
    mediaItems
      .filter((d) => d.url.includes("spotify.com/"))
      .map((d) => ({ ...d, mediaCategory: "audio-spotify" }))
  )

  const items = [
    ...vimeoItems.map((d) => ({ ...d, mediaCategory: "video-vimeo" })),
    ...spotifyItems,
  ]

  return {
    props: { items },
  }
}
