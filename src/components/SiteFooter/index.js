import {
  Container,
  Box,
  SimpleGrid,
  Stack,
  HStack,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react"

import { Link } from "@/components/Link"
import NewsletterSignup from "@/components/NewsletterSignup"

const extendedNavigationItems = [
  { label: "Factsheets", href: "/factsheets" },
  { label: "Data tracker", href: "/data-tracker" },
  { label: "Stories", href: "/stories" },
  { label: "Dictionary", href: "/dictionary" },
  { label: "Media", href: "/media" },
  { label: "Links", href: "/links" },
  { label: "B20 recommendations", href: "/b20-recommendations" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
].map((d, i) => ({ ...d, key: i + 1 }))

export default function SiteFooter() {
  return (
    <>
      <Box bg="brand.1000" w="100%" position="relative">
        <Container borderY="0.0625rem solid" borderColor="whiteAlpha.200">
          <SimpleGrid columns={8} gridGap={10}>
            <Stack
              gridColumn={[" 1 / -1", null, "2 / -2", null, " 3 / -3"]}
              spacing={10}
              py={20}
            >
              <Stack spacing={3}>
                <Heading as="h2" variant="sectionHeading" color="white">
                  {"Stay up to date"}
                </Heading>
                <Text variant="sectionSubheading" color="brand.100">
                  {"Sign up to be alerted when there are new Carbon Knowledge Hub releases."}
                </Text>
              </Stack>
              <NewsletterSignup />
            </Stack>
          </SimpleGrid>
        </Container>
        <Stack
          bg="brand.1000"
          color="brand.100"
          py={10}
          alignItems="center"
          borderY="0.0625rem solid"
          borderColor="whiteAlpha.200"
        >
          <Container>
            <SimpleGrid columns={[1, null, 2, null, 4]} gridGap={[6, null, 10]}>
              {extendedNavigationItems.map(({ label, href }) => {
                return (
                  <Link key={href} href={href} variant="footerLink">
                    {label}
                  </Link>
                )
              })}
            </SimpleGrid>
          </Container>
        </Stack>
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
              <Box>{"© 2024 Bloomberg Finance L.P. All rights reserved."}</Box>
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
            {/* <Box flex="none">
              <BNEFLogo />
            </Box> */}
          </Stack>
        </Container>
      </Box>
    </>
  )
}
