import {
  Stack,
  Box,
  HStack,
  SimpleGrid,
  Text,
  Container,
  Divider,
} from "@chakra-ui/react"
import day from "dayjs"
import _sortBy from "lodash/sortBy"

import getPages from "@/utils/api/server/getPages"
import getContent from "@/utils/api/server/getContent"
import { ArrowRightIcon } from "@/components/Icon"
import BBGrid from "@/components/BBGrid"
import { Link } from "@/components/Link"

import UpdatesList from "@/components/UpdatesList"
import SectionHeader from "@/components/SectionHeader"
import PartnersSection from "@/components/PartnersSection"
import GetStarted from "@/components/GetStarted"
import DiveDeeper from "@/components/DiveDeeper"
import SEO from "@/components/SEO"

export default function IndexPage({ factsheets, partners, latestUpdates }) {
  return (
    <>
      <SEO
        title=""
        description="The Carbon Knowledge Hub gives the knowhow and insights to navigate the carbon markets."
      />
      <Container>
        <Stack spacing={12} py={10}>
          <SimpleGrid columns={8} gridGap={10}>
            <Text
              as="h2"
              textStyle="bannerHeading"
              gridColumn={["span 8", null, null, "span 6"]}
            >
              {
                "The Carbon Knowledge Hub gives the knowhow and insights to navigate the carbon markets."
              }
            </Text>
          </SimpleGrid>
          <Overview />
          <LogoBanner />
          <Stack spacing={24}>
            <AboutBanner />
            <UpdatesList updates={latestUpdates} />
            <GetStarted />
            <DiveDeeper factsheets={factsheets} />
            <PartnersSection partners={partners} />
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

function Overview() {
  return (
    <SimpleGrid as="section" columns={8} gridGap={3}>
      <SectionHeader
        title="Start here"
        dividerProps={{ gridColumn: "span 6" }}
      />
      <SimpleGrid
        columns={[1, null, null, 3]}
        gridRowGap={5}
        gridColumnGap={10}
        gridColumn="1 / -1"
      >
        <Box>
          <Link
            href="/factsheets"
            variant="standalone"
            fontSize="lg"
            rightIcon={<ArrowRightIcon size="1.5rem" />}
          >
            {"Carbon trading 101"}
          </Link>
        </Box>
        <Box>
          <Link
            href="/data-tracker"
            variant="standalone"
            fontSize="lg"
            rightIcon={<ArrowRightIcon size="1.5rem" />}
          >
            {"Data tracker"}
          </Link>
        </Box>
        <Box>
          <Link
            href="/b20-recommendations"
            variant="standalone"
            fontSize="lg"
            rightIcon={<ArrowRightIcon size="1.5rem" />}
          >
            {"B20 recommendations"}
          </Link>
        </Box>
      </SimpleGrid>
      <Divider gridColumn="1 / -1" borderBottomColor="gray.200" opacity={1} />
    </SimpleGrid>
  )
}

function LogoBanner() {
  return (
    <Box
      position="relative"
      _before={{
        content: "''",
        position: "absolute",
        top: 0,
        bottom: [4, null, null, null, 0],
        right: 0,
        w: "25%",
        bgGradient: "linear(to-r, rgba(255,255,255,0), rgba(255,255,255,1))",
        display: ["block", null, null, null, "none"],
        zIndex: 1,
      }}
      _after={{
        content: "''",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        h: 4,
        bg: "white",
        display: ["block", null, null, null, "none"],
      }}
    >
      <HStack
        spacing={24}
        justifyContent={["start", null, null, null, "center"]}
        overflowX="scroll"
        scrollSnapType="x mandatory"
        pb={[5, null, null, null, 0]}
        pr={["25%", null, null, null, 0]}
        sx={{
          img: {
            scrollSnapAlign: "start",
            minWidth: ["none", null, null, null, "0"],
            maxHeight: "5rem",
            maxWidth: "10rem",
            objectFit: "contain",
            filter: "saturate(0)",
            transition: "all 0.3s",
            _hover: {
              filter: "saturate(1)",
            },
          },
        }}
      >
        <img src="/logos/bnef.png" />
        <img src="/logos/b20-brasil.png" />
        <img src="/logos/cni.png" />
        <img src="/logos/b20-indonesia.png" />
        <img src="/logos/kadin.png" />
        <img src="/logos/asean.png" />
      </HStack>
    </Box>
  )
}

function AboutBanner() {
  return (
    <SimpleGrid
      columns={8}
      gridGap={10}
      gridTemplateRows="auto 7.625rem auto"
      mx={[-5, null, null, 0]}
    >
      <Box
        gridColumn="1 / -1"
        gridRow="1 / span 2"
        bgImage="url(/images/cover-3-lg.jpg)"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <BBGrid rows={8} columns={10} color="whiteAlpha.500" />
      </Box>
      <Stack
        gridColumn={["1 / -1", null, null, "2 / -2"]}
        bg="white"
        pt={12}
        gridRow="2 / span 2"
        mx={[5, null, null, -10]}
        px={[5, null, null, 10]}
        spacing={10}
        alignItems="center"
      >
        <Text
          fontSize={["xl", "2xl", "3xl", "2rem"]}
          lineHeight={["base", null, "tall"]}
          fontWeight={600}
          textAlign="center"
        >
          {
            "The Carbon Knowledge Hub is a public web platform that provides companies, policymakers and other players with the information required to understand compliance and voluntary carbon markets."
          }
        </Text>
        <Link
          href="/about"
          variant="standalone"
          rightIcon={<ArrowRightIcon size="1.5rem" />}
        >
          {"About Carbon Knowledge Hub"}
        </Link>
      </Stack>
    </SimpleGrid>
  )
}

export async function getStaticProps() {
  const factsheets = await getPages({
    pageType: "factsheets",
    fields: ["frontmatter"],
  })
  const partners = await getContent("partners.txt", "json")

  const media = await getContent("media.txt", "json")

  const stories = await getPages({
    pageType: "stories",
    fields: ["frontmatter"],
  })

  const latestUpdates = _sortBy(
    [
      ...factsheets.map((d) => d.frontmatter),
      ...media,
      ...stories.map((d) => d.frontmatter),
    ],
    (o) => -(parseInt(day(o.date || "").format("YYYYMMDD")) || 0)
  ).slice(0, 12)

  return {
    props: {
      factsheets,
      partners: partners.filter((d) => d.type !== "managing"),
      latestUpdates,
    },
  }
}
