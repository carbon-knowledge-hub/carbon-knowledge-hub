import {
  Heading,
  Text,
  Box,
  Container,
  SimpleGrid,
  Stack,
  Divider,
  AspectRatio,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react"

import day from "dayjs"
import getContent from "@/utils/api/server/getContent"
import SiteHeader from "@/components/SiteHeader"
import { LinkBox, LinkOverlay } from "@/components/Link"
import {
  PageHeader,
  PageHeaderGrid,
  PageHeaderContent,
  PageHeaderBreadcrumbs,
  PageHeaderTitle,
  PageHeaderDescription,
} from "@/components/PageHeader"
import SEO from "@/components/SEO"

function SpotifyPreview({ item }) {
  const rootUrl = "https://open.spotify.com/embed/"
  const src = `${rootUrl}${
    item?.url?.split("spotify.com/")[1]
  }?utm_source=generator`
  return (
    <Box minH="22rem">
      <iframe
        style={{ borderRadius: "none" }}
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
          <Heading fontSize="xl">
            <LinkOverlay href={`https://vimeo.com/${item.video_id}`}>
              {item.title}
            </LinkOverlay>
          </Heading>
          <Text
            fontSize="md"
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

export default function MediaPage({
  source = { frontmatter: { title: "Media" } },
  allMedia,
}) {
  const { frontmatter } = source
  const title = frontmatter.title
  const description = frontmatter.description
  console.log(allMedia)
  const videoItems = allMedia.filter((d) => d.mediaCategory === "video-vimeo")
  const audioItems = allMedia.filter((d) => d.mediaCategory === "audio-spotify")
  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || ""}
      />
      <SiteHeader />
      <PageHeader>
        <PageHeaderGrid bg="rgba(255,255,255,1)" color="gray.200" />
        <PageHeaderContent gridColumn={["1 / -1", null, "1 / -1"]}>
          <PageHeaderBreadcrumbs items={[{ label: "Media" }]} />
          <PageHeaderTitle>{title}</PageHeaderTitle>
          <PageHeaderDescription>
            {"Videos and podcasts about carbon markets."}
          </PageHeaderDescription>
        </PageHeaderContent>
      </PageHeader>
      {/* <Divider borderColor="gray.300" /> */}
      <Container py={0}>
        <SimpleGrid columns={8} gridGap={10}>
          <Box gridColumn={["1 / -1"]}>
            <Tabs colorScheme="primary">
              <Box
                bg="white"
                borderBottom="0.0625rem solid"
                borderColor="gray.300"
                position="relative"
              >
                <TabList borderBottom="none">
                  <Tab fontWeight={600} fontSize="xl">
                    {"Videos"}
                  </Tab>
                  <Tab fontWeight={600} fontSize="xl">
                    {"Podcasts"}
                  </Tab>
                </TabList>
              </Box>
              <TabPanels pt={10}>
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
            </Tabs>
          </Box>
          <Box
            gridColumn="7/-1"
            as="aside"
            h={["auto", null, 0]}
            position="sticky"
            top={10}
            display={["none", null, null, "block"]}
          ></Box>
        </SimpleGrid>
        <Divider />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // const source = await getPage({
  //   slug: "partners",
  //   pageType: "pages",
  // })
  const allMedia = await getContent("media.txt", "json")
  return { props: { allMedia } }
}
