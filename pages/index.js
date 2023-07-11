import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  SimpleGrid,
  HStack,
  Divider,
  Center,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout"
import uniqBy from "lodash/uniqBy"

import { ButtonLink, Link } from "@components/Link"
import EmailLink from "@components/EmailLink"
import { ArrowRightIcon } from "@components/Icon"
import BasicCard from "@components/BasicCard"
import FactsheetCard from "@components/FactsheetCard"
import Image from "@components/Image"
import { useFactsheetStore, useBasicsStore } from "@utils/store"
import { csvParse } from "d3-dsv"
import { readFile } from "fs/promises"
import { join } from "path"
import SEO from "@components/SEO"

export default function IndexPage({ stories }) {
  const factsheets = useFactsheetStore((state) => state.factsheets)
  const basics = useBasicsStore((state) => state.basics)

  const managingPartners = [
    { src: "B20-logo.png", name: "B20 Indonesia 2022" },
    { src: "ASEAN-BAC-logo.png", name: "ASEAN BAC" },
    {
      src: "kadin-logo.png",
      name: "Indonesian Chamber of Commerce and Industry",
    },
    { src: "bnef-logo.png", name: "BloombergNEF" },
  ]

  return (
    <>
      <SEO />
      <Stack alignItems="center" spacing={[14, null, 28]} mb={[14, null, 28]}>
        <SimpleGrid
          columns={[1, null, null, 2]}
          gridGap={[5, null, 10]}
          alignItems="center"
        >
          <Box
            order={[2, null, null, 1]}
            pt={[0, null, null, 16]}
            pb={[0, null, null, 20]}
            pl={[4, 5, null, 10]}
            pr={[4, 5, null, 0]}
          >
            <Stack spacing={10}>
              <Stack spacing={5}>
                <Text variant="metaText" color="red.500">
                  {"B20 Indonesia Legacy Program: Carbon Centre of Excellence "}
                </Text>
                <Box
                  fontSize={["xl", null, null, null, "2xl"]}
                  fontWeight={500}
                  lineHeight="tall"
                >
                  <Heading
                    as="h1"
                    display="inline"
                    fontSize="inherit"
                    fontWeight="inherit"
                    lineHeight="inherit"
                  >
                    {"The Carbon Knowledge Hub"}
                  </Heading>
                  <Text
                    display="inline"
                    fontSize="inherit"
                    fontWeight="inherit"
                    lineHeight="inherit"
                  >
                    {
                      " gives the knowhow and insights to navigate the carbon markets. It is a collaboration between the Indonesian Chamber of Commerce and Industry (KADIN) and BloombergNEF, and part of the Carbon Centre of Excellence – one of Indonesia’s B20 Legacy Programs."
                    }
                  </Text>
                </Box>
              </Stack>

              <Stack spacing={5}>
                <Text as="h3" variant="metaText" color="gray.600">
                  {"Start here"}
                </Text>
                <Stack spacing={0}>
                  <Divider borderColor="gray.200" />
                  <Box>
                    <Link href="/basics" variant="banner">
                      {"Carbon trading 101"}
                      <ArrowRightIcon size="1.5rem" />
                    </Link>
                  </Box>
                  <Divider borderColor="gray.200" />
                  <Box>
                    <Link href="/factsheets" variant="banner">
                      {"The nitty gritty of carbon trading"}
                      <ArrowRightIcon size="1.5rem" />
                    </Link>
                  </Box>

                  <Divider borderColor="gray.200" />
                </Stack>
              </Stack>
            </Stack>
          </Box>
          <Box
            bg="gray.100"
            h="100%"
            position="relative"
            order={[1, null, null, 2]}
          >
            <Image src="banner.png" ratio={[4 / 3, null, 0]} minH="100%" />
            <Text
              position="absolute"
              bottom={4}
              right={4}
              color="gray.100"
              fontWeight={500}
              fontSize="sm"
            >
              {"Photo by Aron Visuals on Unsplash"}
            </Text>
          </Box>
        </SimpleGrid>

        <Container>
          <Stack spacing={[10, null, 28]} alignItems="center">
            <Heading as="h2" fontSize={["xl", null, "2xl"]}>
              {"Managing partners"}
            </Heading>
            <Wrap
              spacingX="7.5rem"
              spacingY="2.5rem"
              sx={{ ul: { justifyContent: "center" } }}
            >
              {managingPartners.map(({ name, src }) => {
                return (
                  <WrapItem key={name}>
                    <Image
                      src={src}
                      width="auto"
                      height="7.25rem"
                      maxW="20rem"
                      objectFit="contain"
                      alt={name}
                    />
                  </WrapItem>
                )
              })}
            </Wrap>
          </Stack>
        </Container>

        <Container>
          <Stack spacing={[10, null, 28]}>
            <Stack spacing={5}>
              <Heading as="h2" fontSize={["xl", null, "2xl"]}>
                {"Get started"}
              </Heading>
              <Text variant="lead">
                {
                  "Take carbon markets 101 and learn the fundamentals behind carbon-pricing systems."
                }
              </Text>
            </Stack>
            {basics.slice(0, 3).map((d, i) => {
              return <BasicCard d={d} i={i} key={d.slug} />
            })}
          </Stack>
        </Container>
        <Box bg="gray.50" w="100%" py={[10, null, 20]}>
          <Container>
            <Stack spacing={[10, null, 20]}>
              <HStack justifyContent="space-between" alignItems="center">
                <Heading as="h2" fontSize={["xl", null, "2xl"]}>
                  {"Dive deeper"}
                </Heading>
                {/* <ButtonLink
                  href="/factsheets"
                  variant="ghost"
                  color="gray.500"
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  _active={{ bg: "none" }}
                  px={0}
                  rightIcon={<ArrowRightIcon size="1.25rem" />}
                >
                  {"All factsheets"}
                </ButtonLink> */}
                <Link
                  alignSelf="flex-start"
                  href="/factsheets"
                  variant="section"
                  fontSize="sm"
                >
                  {"All factsheets"}
                  <ArrowRightIcon size="1.25rem" />
                </Link>
              </HStack>
              <SimpleGrid columns={[1, null, 2]} gridGap={[5, null, 10]}>
                {factsheets.slice(0, 2).map((d) => {
                  return <FactsheetCard d={d} key={d.slug} />
                })}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>
        <Container>
          <Stack spacing={10} textAlign="center">
            <SimpleGrid columns={8} gridGap={10}>
              <Stack
                spacing={5}
                gridColumn={["1 / -1", null, "2 / -2", "3 / -3"]}
              >
                <Heading as="h2" fontSize={["xl", null, "2xl"]}>
                  {"Carbon Centre of Excellence Partners"}
                </Heading>
                <Text variant="lead">
                  {
                    "Partners to the Carbon Centre of Excellence support the development of carbon markets worldwide, as a mechanism to drive decarbonization."
                  }
                </Text>
              </Stack>
            </SimpleGrid>
            <SimpleGrid
              columns={[2, null, 4]}
              gridGap={10}
              pt={10}
              gridColumn={["1 / -1", null, "2 / -2"]}
            >
              {stories.map(({ partner_logo }, i) => {
                return (
                  <Center key={partner_logo + i}>
                    <Image
                      src={partner_logo}
                      subFolder="partners"
                      width="auto"
                      height="4rem"
                      objectFit="contain"
                    />
                  </Center>
                )
              })}
            </SimpleGrid>
            <ButtonLink
              href="/partners"
              alignSelf="center"
              size="lg"
              colorScheme="brand"
              variant="subtle"
              rightIcon={<ArrowRightIcon />}
            >
              {"Read more"}
            </ButtonLink>
          </Stack>
        </Container>
        <Container>
          <SimpleGrid
            columns={8}
            gridGap={[10, null, 20]}
            py={[10, null, 20]}
            borderRadius="md"
            alignItems="center"
            bg="gray.50"
            px={[5, null, 10]}
          >
            <Box
              gridColumn={["span 8", null, "1 / span 4"]}
              order={[2, null, 1]}
            >
              <SimpleGrid columns={2} gridGap={10} alignItems="center">
                <Box>
                  <img src="/kadin-logo.png" />
                </Box>
                <Box>
                  <img src="/bnef-logo.svg" style={{ "width": "100%" }} />
                </Box>
              </SimpleGrid>
            </Box>
            <Box gridColumn={["span 8", null, "5 / -1"]} order={[1, null, 2]}>
              <Stack spacing={10}>
                <Heading as="h3" fontSize={["xl", null, "2xl"]}>
                  {"About the Carbon Centre of Excellence"}
                </Heading>
                <Text fontSize={["lg", null, "lg"]} color="gray.600">
                  {
                    "The Carbon Centre of Excellence is a collaboration between BloombergNEF and the Indonesia Chamber of Commerce and Industry (KADIN) on behalf of the B20 Indonesia."
                  }
                </Text>
                <EmailLink label="Get involved" size="lg" />
              </Stack>
            </Box>
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  )
}

export async function getStaticProps(ctx) {
  const storiesRaw = await readFile(
    join(process.cwd(), "/public/partners.csv"),
    "utf8"
  )
  const stories = csvParse(storiesRaw)
  return {
    props: { stories: uniqBy(stories, (o) => o.partner_logo) },
  }
}
