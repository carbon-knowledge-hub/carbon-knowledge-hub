import {
  Container,
  Box,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  List,
  ListItem,
} from "@chakra-ui/layout"
import {
  ChevronRightIcon,
  EnvelopeIcon,
  ExternalLinkIcon,
} from "@components/Icon"

import { ButtonLink, Link } from "@components/Link"

import NewsletterSignup from "@components/NewsletterSignup"

export default function SiteFooter() {
  return (
    <Stack bg="gray.1000" color="gray.300" py={20} alignItems="center">
      <Container>
        <SimpleGrid columns={[1, null, 2, null, 4]} gridGap={10}>
          <Stack spacing={5}>
            <Heading as="h2">{"Newsletter"}</Heading>
            <Text>
              {
                "Sign up to the React Simple Maps newsletter and be the first one to know when we publish new stuff."
              }
            </Text>
            <NewsletterSignup />
          </Stack>
          <Stack spacing={5}>
            <Heading as="h2">{"Contact us"}</Heading>
            <Text lineHeight="short">
              {
                "React Simple Maps was created by z creative labs. We turn ideas into digital products and specialise in dataviz and data-driven design. Are you looking for someone to create custom mapcharts and data visualisations?"
              }
            </Text>
            <Box display="inline-flex">
              <ButtonLink
                href="mailto:hello@zcreativelabs.com"
                colorScheme="gray"
                color="white"
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
                _focus={{ bg: "gray.700" }}
                _active={{ bg: "gray.600" }}
                leftIcon={<EnvelopeIcon />}
              >
                {"Get in touch"}
              </ButtonLink>
            </Box>
          </Stack>
          <Stack spacing={5}>
            <Heading as="h2">{"React Simple Maps"}</Heading>
            <List spacing={3}>
              <ListItem>
                <Link href="/" display="inline-flex" alignItems="center">
                  {"Home"}
                  <ChevronRightIcon
                    ml={0.5}
                    strokeWidth={2.5}
                    size={5}
                    mb={-0.5}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/docs/getting-started/"
                  display="inline-flex"
                  alignItems="center"
                >
                  {"Documentation"}
                  <ChevronRightIcon
                    ml={0.5}
                    strokeWidth={2.5}
                    size={5}
                    mb={-0.5}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/examples"
                  display="inline-flex"
                  alignItems="center"
                >
                  {"Examples"}
                  <ChevronRightIcon
                    ml={0.5}
                    strokeWidth={2.5}
                    size={5}
                    mb={-0.5}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://github.com/zcreativelabs/react-simple-maps"
                  display="inline-flex"
                  alignItems="center"
                >
                  {"Github"}
                  <ExternalLinkIcon ml={2} strokeWidth={2.5} size={5} />
                </Link>
              </ListItem>
            </List>
          </Stack>
          <Stack spacing={5}>
            <Heading as="h2">{"More products"}</Heading>
            <List spacing={3}>
              <ListItem>
                <Link
                  href="https://geography.games/"
                  display="inline-flex"
                  alignItems="center"
                >
                  {"Geography Games"}
                  <ExternalLinkIcon ml={2} strokeWidth={2.5} size={5} />
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href="https://haikei.app/"
                  display="inline-flex"
                  alignItems="center"
                >
                  {"Haikei.app"}
                  <ExternalLinkIcon ml={2} strokeWidth={2.5} size={5} />
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href="https://www.blobmaker.app/"
                  display="inline-flex"
                  alignItems="center"
                >
                  {"Blobmaker"}
                  <ExternalLinkIcon ml={2} strokeWidth={2.5} size={5} />
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href="https://getwaves.io/"
                  display="inline-flex"
                  alignItems="center"
                >
                  {"Get Waves"}
                  <ExternalLinkIcon ml={2} strokeWidth={2.5} size={5} />
                </Link>
              </ListItem>
            </List>
          </Stack>
        </SimpleGrid>
      </Container>
    </Stack>
  )
}
