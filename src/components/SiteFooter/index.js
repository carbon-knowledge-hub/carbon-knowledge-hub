import {
  Container,
  Box,
  SimpleGrid,
  Stack,
  HStack,
  Text,
} from "@chakra-ui/layout"
import { Tag } from "@chakra-ui/tag"
import {
  ArrowRightIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  ExternalLinkIcon,
} from "@components/Icon"

import { ButtonLink, Link } from "@components/Link"

import NewsletterSignup from "@components/NewsletterSignup"

export default function SiteFooter() {
  return (
    <Stack bg="brand.900" color="gray.300" py={20} alignItems="center">
      <Container>
        <SimpleGrid columns={[1, null, 4]} gridGap={10}>
          <Stack spacing={5}>
            <HStack spacing={3}>
              <Box textTransform="uppercase" fontFamily="mono" fontSize="sm">
                {"Basics"}
              </Box>
              <Tag
                textTransform="uppercase"
                fontFamily="mono"
                fontSize="xs"
                borderRadius="full"
                borderColor="green.500"
                color="green.500"
                size="sm"
              >
                {"coming soon"}
              </Tag>
            </HStack>
            <Text fontWeight={500}>{"Carbon pricing at a glance"}</Text>
            <Text fontWeight={500}>{"How carbon trading works"}</Text>
          </Stack>
          <Stack spacing={5}>
            <HStack spacing={3}>
              <Box textTransform="uppercase" fontFamily="mono" fontSize="sm">
                {"Factsheets"}
              </Box>
              <Tag
                textTransform="uppercase"
                fontFamily="mono"
                fontSize="xs"
                borderRadius="full"
                borderColor="green.500"
                color="green.500"
                size="sm"
              >
                {"coming soon"}
              </Tag>
            </HStack>
            <Text fontWeight={500}>{"Carbon leakage and import tariffs"}</Text>
            <Text fontWeight={500}>{"Lifecycle of an offset"}</Text>
          </Stack>
          <Stack spacing={5}>
            <Box textTransform="uppercase" fontFamily="mono" fontSize="sm">
              {"Partners"}
            </Box>
            <ButtonLink
              color="white"
              bg="transparent"
              _hover={{ "bg": "transparent", "color": "brand.200" }}
              href="mailto:co2excel@bloomberg.net"
              px="0"
              alignSelf="flex-start"
              rightIcon={<ArrowRightIcon size="1.25rem"/>}
            >
              {"Become a partner"}
            </ButtonLink>
          </Stack>
          <Stack spacing={5}>
            <Box textTransform="uppercase" fontFamily="mono" fontSize="sm">
              {"Contact"}
            </Box>
            <ButtonLink
              color="white"
              bg="transparent"
              _hover={{ "bg": "transparent", "color": "brand.200" }}
              href="mailto:co2excel@bloomberg.net"
              px="0"
              alignSelf="flex-start"
              rightIcon={<ArrowRightIcon size="1.25rem"/>}
            >
              {"Get in touch"}
            </ButtonLink>
          </Stack>
          
        </SimpleGrid>
      </Container>
    </Stack>
  )
}
