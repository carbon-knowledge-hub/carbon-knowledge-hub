import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  SimpleGrid,
  HStack,
  AspectRatio,
} from "@chakra-ui/layout"
import { Tag } from "@chakra-ui/tag"

import { ButtonLink } from "@components/Link"
import { ArrowRightIcon } from "@components/Icon"
import SiteHeader from "@components/SiteHeader"
import NewsletterSignup from "@components/NewsletterSignup"
import FAQSection from "@components/FAQSection"
import SiteFooter from "@components/SiteFooter"
import EmailLink from "@components/EmailLink"

export default function IndexPage() {
  return (
    <>
      <SiteHeader />

      <Stack alignItems="center" spacing={20} mb={20}>
        <Container>
          <SimpleGrid
            columns={8}
            gridGap={10}
            alignItems="center"
            mx={[-5, null, -10]}
          >
            <Box
              gridColumn={["span 8", null, "span 4"]}
              order={[2, null, 1]}
              pt={[5, null, 12]}
              pb={20}
              mx={[5, null, 10]}
            >
              <Stack spacing={8}>
                <Stack spacing={3}>
                  <Text
                    color="red.500"
                    lineHeight="shorter"
                    fontSize="sm"
                    fontWeight={600}
                    fontFamily="mono"
                    textTransform="uppercase"
                  >
                    {"A B20 Indonesia Legacy Program"}
                  </Text>
                  <Heading fontSize="2xl">
                    {"Carbon Centre of Excellence"}
                  </Heading>
                </Stack>
                <Text
                  color="gray.600"
                  fontSize={["lg", null, "xl"]}
                  lineHeight="tall"
                >
                  {
                    "Coming soon – new web platform to help companiesand governments navigate the carbon markets. BloombergNEF and B20 Indonesia are looking for companies to become Carbon Centre of Excellence partners by sharing their experiences of carbon trading."
                  }
                </Text>
                <HStack spacing={3}>
                  {/* <ButtonLink
                    size="lg"
                    href="mailto:co2excel@bloomberg.net"
                    colorScheme="brand"
                    rightIcon={<ArrowRightIcon size="1.25rem" />}
                  >
                    {"Get involved"}
                  </ButtonLink> */}
                  <EmailLink label="Get involved" colorScheme="brand" size="lg" />
                  <ButtonLink size="lg" colorScheme="gray" href="/">
                    {"Read more"}
                  </ButtonLink>
                </HStack>
              </Stack>
            </Box>
            <Box
              bg="gray.50"
              gridColumn={["span 8", null, "span 4"]}
              position="relative"
              order={[1, null, 2]}
            >
              <AspectRatio ratio={1}>
                <img src="banner.png" />
              </AspectRatio>
              <Text
                position="absolute"
                bottom="1rem"
                right="1rem"
                color="gray.100"
                fontWeight={500}
                fontSize="sm"
              >
                {"Photo by Aron Visuals on Unsplash"}
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
        <Container>
          <SimpleGrid
            bg="brand.900"
            mx={[-5, null, -10]}
            columns={8}
            gridGap={10}
          >
            <Stack
              gridColumn={[" 1 / -1", null, "2 / -2", " 3 / -3"]}
              spacing={[5, null, 10]}
              py={20}
              mx={[5, null, 10]}
            >
              <Heading as="h2" fontSize={["xl", null, "2xl"]} color="white">
                {"Stay up to date"}
              </Heading>
              <Text fontSize={["lg", null, "xl"]} color="gray.400">
                {"Sign up to be alerted when the web platform goes live."}
              </Text>
              <NewsletterSignup />
            </Stack>
          </SimpleGrid>
        </Container>
        <Container>
          <Stack spacing={10}>
            <HStack spacing={3} alignItems="center">
              <Heading as="h2" fontSize={["xl", null, "2xl"]}>
                {"Get started"}
              </Heading>
              <Tag
                textTransform="uppercase"
                fontFamily="mono"
                fontSize="sm"
                borderRadius="full"
                borderColor="green.500"
                color="green.500"
                size="sm"
              >
                {"coming soon"}
              </Tag>
            </HStack>

            <SimpleGrid columns={[1, null, 3]} gridGap={10}>
              <Stack spacing={5}>
                <AspectRatio ratio={16 / 9} bg="gray.100">
                  <img src="carbon-pricing.png" />
                </AspectRatio>
                <Stack spacing={3}>
                  <Heading as="h3" fontSize={["lg", null, "xl"]}>
                    {"Carbon pricing at a glance"}
                  </Heading>
                  <Text color="gray.600">
                    {
                      "Take carbon 101 – taxes vs markets, cap-and-trade vs baseline-and-credit"
                    }
                  </Text>
                </Stack>
              </Stack>
              <Stack spacing={5}>
                <AspectRatio ratio={16 / 9} bg="gray.100">
                  <img src="carbon-trading.png" />
                </AspectRatio>
                <Stack spacing={3}>
                  <Heading as="h3" fontSize={["lg", null, "xl"]}>
                    {"How carbon trading works"}
                  </Heading>
                  <Text color="gray.600">
                    {
                      "Learn how prices are formed in a carbon market, compliance vs voluntary programs, role of offsets"
                    }
                  </Text>
                </Stack>
              </Stack>
              <Stack spacing={5}>
                <AspectRatio ratio={16 / 9} bg="gray.100">
                  <img src="partners.png" />
                </AspectRatio>
                <Stack spacing={3}>
                  <Heading as="h3" fontSize={["lg", null, "xl"]}>
                    {"Who’s involved?"}
                  </Heading>
                  <Text color="gray.600">
                    {
                      "Understand the main carbon trading participants and their roles"
                    }
                  </Text>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Container>
        <Container>
          <SimpleGrid
            columns={8}
            gridGap={10}
            py={[10, null, 20]}
            bg="gray.100"
            borderRadius="md"
            alignItems="center"
            mx={[-10, null, 0]}
          >
            <Box
              gridColumn={["span 8", null, "1 / span 3"]}
              order={[2, null, 1]}
              mx={[10, null, 20]}
            >
              <SimpleGrid
                columns={2}
                gridGap={10}
                alignItems="center"
              >
                <Box>
                  <img src="/kadin-logo.png" />
                </Box>
                <Box>
                  <img src="/bnef-logo.svg" style={{ "width": "100%" }} />
                </Box>
              </SimpleGrid>
            </Box>
            <Box
              gridColumn={["span 8", null, "5 / span 3"]}
              order={[1, null, 2]}
              mx={[10, null, 0]}
            >
              <Stack spacing={5}>
                <Heading as="h3" fontSize={["xl", null, "2xl"]}>
                  {"About the Carbon Center of Excellence"}
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
        <FAQSection />
      </Stack>
      <SiteFooter />
    </>
  )
}
