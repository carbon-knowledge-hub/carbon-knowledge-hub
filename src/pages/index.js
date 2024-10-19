import {
  Stack,
  Box,
  HStack,
  SimpleGrid,
  Text,
  Heading,
  Container,
  Divider,
} from "@chakra-ui/react"

import getPages from "@/utils/api/server/getPages"
import getContent from "@/utils/api/server/getContent"
import { ArrowRightIcon } from "@/components/Icon"
import BBGrid from "@/components/BBGrid"
import { Link, LinkBox, LinkOverlay } from "@/components/Link"

import UpdatesList from "@/components/UpdatesList"
import SectionHeader from "@/components/SectionHeader"
import FactsheetCard from "@/components/FactsheetCard"
import SiteHeader from "@/components/SiteHeader"
import PartnersSection from "@/components/PartnersSection"

export default function IndexPage({ factsheets, partners }) {
  return (
    <>
      <SiteHeader />
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
            <UpdatesList />
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
    <HStack
      spacing={24}
      justifyContent="center"
      sx={{
        img: {
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
      <img src="/logos/b20-indonesia.png" />
      <img src="/logos/kadin.png" />
      <img src="/logos/asean.png" />
    </HStack>
  )
}

function AboutBanner() {
  return (
    <SimpleGrid columns={8} gridGap={10} gridTemplateRows="auto 7.625rem auto">
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
        gridColumn="2 / -2"
        bg="white"
        pt={12}
        gridRow="2 / span 2"
        mx={-10}
        px={10}
        spacing={10}
        alignItems="center"
      >
        <Text
          fontSize="2rem"
          lineHeight="tall"
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
          fontSize="lg"
          rightIcon={<ArrowRightIcon size="1.5rem" />}
        >
          {"About Carbon Knowledge Hub"}
        </Link>
      </Stack>
    </SimpleGrid>
  )
}

function GetStarted() {
  return (
    <SimpleGrid as="section" columns={8} gridGap={10}>
      <SectionHeader
        title="Get started"
        description="Take carbon markets 101 and learn the fundamentals behind carbon-pricing systems."
      />
      <GetStartedItem
        title="Carbon pricing at a glance"
        imgSrc="/images/carbon-pricing-at-a-glance.svg"
        href="/factsheets/carbon-pricing-at-a-glance"
      />
      <GetStartedItem
        title="How carbon trading works"
        imgSrc="/images/carbon-pricing.svg"
        href="/factsheets/how-co2-trading-works"
      />
      <GetStartedItem
        title="Goals and impact of carbon pricing"
        imgSrc="/images/goals-and-impact.svg"
        href="/factsheets/goals-and-impact"
      />
      <GetStartedItem
        title="Participants and their role in carbon trading"
        imgSrc="/images/participants.svg"
        href="/factsheets/participants"
      />
      <GetStartedItem
        title="Participants and their role in carbon trading"
        imgSrc="/images/participants.svg"
      />

      <GetStartedItem
        title="Current state of carbon trading"
        imgSrc="/images/current-status.svg"
        href="/factsheets/current-status"
      />
    </SimpleGrid>
  )
}

function GetStartedItem({
  title = "Carbon pricing at a glance",
  description = "Carbon pricing can be an effective policy tool to make polluters pay for their greenhouse-gas emissions. Out of the 60 or so programs around the world, the most common are taxes and emission-trading programs. Broadly speaking, the former guarantees the carbon price and the latter delivers a guaranteed reduction in emissions.",
  linkText = "Continue reading",
  tags = [{ key: 1, label: "Basic" }],
  href = "/",
  imgSrc = "/images/carbon-pricing-at-a-glance.svg",
}) {
  return (
    <LinkBox
      gridColumn="1 / -1"
      as="article"
      position="relative"
      bg="brand.1000"
      color="white"
      display="grid"
      gridTemplateColumns={["1fr", null, null, "1fr 1fr"]}
      gridColumnGap={10}
      gridRowGap={5}
      pt={[5, null, null, 10]}
      pb={10}
      sx={{
        "&:nth-child(even)": {
          gridTemplateAreas: ["'img' 'content'", null, null, "'img content'"],
          "--content-padding-left": ["1.25rem", null, null, 0],
          "--content-padding-right": ["1.25rem", null, null, "2.5rem"],
          "--gradient-start": "rgba(0,0,0,0)",
          "--gradient-end": "var(--chakra-colors-brand-1000)",
          "--gradient-direction": "right",
        },
        "&:nth-child(odd)": {
          gridTemplateAreas: ["'img' 'content'", null, null, "'content img'"],
          "--content-padding-left": ["1.25rem", null, null, "2.5rem"],
          "--content-padding-right": ["1.25rem", null, null, 0],
          "--gradient-start": "rgba(0,0,0,0)",
          "--gradient-end": "var(--chakra-colors-brand-1000)",
          "--gradient-direction": "left",
        },
      }}
    >
      <Box
        gridColumn="1 / -1"
        gridRow="1 / span 1"
        position="relative"
        alignSelf="center"
      >
        <BBGrid
          rows={8}
          columns={14}
          color="brand.900"
          position="relative"
          zIndex={0}
          _before={{
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to var(--gradient-direction), var(--gradient-start) 0%, var(--gradient-end) 75%)",
            zIndex: 1,
            opacity: [0, null, null, 1],
          }}
          _after={{
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to bottom, var(--gradient-end) 0%, var(--gradient-start) 20%, var(--gradient-start) 80%, var(--gradient-end) 100%)",
            zIndex: 1,
          }}
        />
      </Box>
      <img
        src={imgSrc}
        style={{
          gridArea: "img",
          alignSelf: "center",
          position: "relative",
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <Stack
        gridArea="content"
        spacing={6}
        pr="var(--content-padding-right)"
        pl="var(--content-padding-left)"
        justifyContent="center"
        zIndex={1}
      >
        {tags.map((tag) => {
          return (
            <Text
              key={tag.key}
              as="span"
              color={tag.label === "basic" ? "secondary.800" : "tertiary.800"}
              // bg="brand.900"
              bg={tag.label === "basic" ? "secondary.200" : "tertiary.200"}
              alignSelf="flex-start"
              px={3}
              py={1}
              fontSize="0.875rem"
              lineHeight="shorter"
              textTransform="uppercase"
              fontWeight={600}
              letterSpacing="0.02em"
              borderRadius="full"
            >
              {tag.label}
            </Text>
          )
        })}
        <Heading variant="storyTitle">
          <LinkOverlay href={href}>{title}</LinkOverlay>
        </Heading>
        <Text variant="body" color="whiteAlpha.700">
          {description}
        </Text>
        <LinkOverlay href={href} display="flex" alignItems="center">
          <Text fontSize="lg" color="brand.500" fontWeight={600}>
            {linkText}
          </Text>
          <ArrowRightIcon size="1.5rem" ml={3} color="brand.500" />
        </LinkOverlay>
      </Stack>
    </LinkBox>
  )
}

function DiveDeeper({ factsheets }) {
  return (
    <Box bg="gray.100" mx={-10}>
      <SimpleGrid as="section" columns={8} gridGap={10} px={10} py={20}>
        <SectionHeader
          title="Dive deeper"
          description="Delve into specific carbon-related topics across the voluntary and compliance markets."
          href="/factsheets"
          hrefLabel="See all factsheets"
          gridColumn="span 8"
        />
        <SimpleGrid columns={[1, null, 2]} gridColumn="span 8" gridGap={10}>
          {factsheets.slice(0, 2).map((factsheet) => {
            return (
              <FactsheetCard
                key={factsheet.frontmatter.slug}
                href={factsheet.frontmatter.slug}
                frontmatter={factsheet.frontmatter}
              />
            )
          })}
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  )
}



export async function getStaticProps() {
  const factsheets = await getPages({
    fields: ["frontmatter"],
  })
  const partners = await getContent("partners.txt", "json")
  return {
    props: {
      factsheets,
      partners: partners.filter((d) => d.type !== "managing"),
    },
  }
}
