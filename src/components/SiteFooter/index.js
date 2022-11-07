import {
  Container,
  Box,
  SimpleGrid,
  Stack,
  HStack,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/layout"

import EmailLink from "@components/EmailLink"
import NewsletterSignup from "@components/NewsletterSignup"
import { ButtonLink, Link } from "@components/Link"
import { ArrowRightIcon } from "@components/Icon"
import BNEFLogo from "@components/Logo/BNEFLogo"
import { useFactsheetStore, useBasicsStore } from "@utils/store"

export default function SiteFooter() {
  const factsheets = useFactsheetStore((state) => state.factsheets)
  const basics = useBasicsStore((state) => state.basics)
  return (
    <>
      <Box bg="brand.700" w="100%" position="relative">
        <Container>
          <SimpleGrid columns={8} gridGap={10}>
            <Stack
              gridColumn={[" 1 / -1", null, "2 / -2", null, " 3 / -3"]}
              spacing={[5, null, 10]}
              py={20}
            >
              <Heading as="h2" fontSize={["xl", null, "2xl"]} color="white">
                {"Stay up to date"}
              </Heading>
              <Text fontSize={["lg", null, "xl"]} color="brand.100">
                {"Sign up to be alerted when the web platform goes live."}
              </Text>
              <NewsletterSignup />
            </Stack>
          </SimpleGrid>
        </Container>
        <Divider borderColor="brand.500" />
        <Stack
          bg="brand.700"
          color="brand.100"
          py={[10, null, 20]}
          alignItems="center"
        >
          <Container>
            <SimpleGrid columns={[1, null, 2, 4]} gridGap={10}>
              <Stack spacing={5}>
                <HStack spacing={3}>
                  <Box
                    textTransform="uppercase"
                    fontFamily="mono"
                    fontSize="sm"
                  >
                    {"Basics"}
                  </Box>
                </HStack>
                {basics.slice(0, 2).map(({ title, href }) => {
                  return (
                    <Link key={href} href={href}>
                      {title}
                    </Link>
                  )
                })}
                <ButtonLink
                  href="/basics"
                  rightIcon={<ArrowRightIcon size="1.25rem" />}
                  alignSelf="flex-start"
                  color="white"
                  bg="transparent"
                  _hover={{ "bg": "transparent", "color": "brand.200" }}
                  _focus={{ "bg": "transparent", "color": "brand.200" }}
                  _active={{ "bg": "transparent", "color": "brand.200" }}
                  px="0"
                >
                  {"All basics"}
                </ButtonLink>
              </Stack>
              <Stack spacing={5}>
                <HStack spacing={3}>
                  <Box
                    textTransform="uppercase"
                    fontFamily="mono"
                    fontSize="sm"
                  >
                    {"Factsheets"}
                  </Box>
                </HStack>
                {factsheets.slice(0, 2).map(({ title, href }) => {
                  return (
                    <Link key={href} href={href}>
                      {title}
                    </Link>
                  )
                })}
                <ButtonLink
                  href="/factsheets"
                  rightIcon={<ArrowRightIcon size="1.25rem" />}
                  alignSelf="flex-start"
                  color="white"
                  bg="transparent"
                  _hover={{ "bg": "transparent", "color": "brand.200" }}
                  _focus={{ "bg": "transparent", "color": "brand.200" }}
                  _active={{ "bg": "transparent", "color": "brand.200" }}
                  px="0"
                >
                  {"All factsheets"}
                </ButtonLink>
              </Stack>
              <Stack spacing={5}>
                <Box textTransform="uppercase" fontFamily="mono" fontSize="sm">
                  {"Partners"}
                </Box>

                <Link href="/stories">{"Stories"}</Link>
                <Link href="/partners">{"Partners"}</Link>
                <EmailLink
                  label="Become a partner"
                  color="white"
                  bg="transparent"
                  _hover={{ "bg": "transparent", "color": "brand.200" }}
                  _focus={{ "bg": "transparent", "color": "brand.200" }}
                  _active={{ "bg": "transparent", "color": "brand.200" }}
                  px="0"
                />
              </Stack>
              <Stack spacing={5}>
                <Box textTransform="uppercase" fontFamily="mono" fontSize="sm">
                  {"More"}
                </Box>
                <Link href="/about">{"About"}</Link>
                <Link href="/faq">{"FAQ"}</Link>
                <EmailLink
                  label="Get in touch"
                  color="white"
                  bg="transparent"
                  _hover={{ "bg": "transparent", "color": "brand.200" }}
                  _focus={{ "bg": "transparent", "color": "brand.200" }}
                  _active={{ "bg": "transparent", "color": "brand.200" }}
                  px="0"
                />
              </Stack>
            </SimpleGrid>
          </Container>
        </Stack>
        <Divider borderColor="brand.500" />
        <Container color="brand.100" fontSize="sm" py={5}>
          <Stack
            justifyContent="space-between"
            alignItems={["flex-start", null, "center"]}
            direction={["column", null, "row"]}
            spacing={5}
          >
            <Stack
              alignItems={["flex-start", null, "center"]}
              direction={["column", null, "row"]}
            >
              <Box>{"© 2022 Bloomberg Finance L.P. All rights reserved."}</Box>
              <HStack divider={<Divider h={4} />}>
                <Link href="https://about.bnef.com/bnef-privacy-policy/">
                  {"Privacy"}
                </Link>
                <Link href="https://about.bnef.com/terms-service/">
                  {"Terms"}
                </Link>
                <Link href="https://about.bnef.com/disclaimer/">
                  {"Disclaimer"}
                </Link>
              </HStack>
            </Stack>
            <Box flex="none">
              <BNEFLogo />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
