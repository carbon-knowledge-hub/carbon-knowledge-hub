import {
  Container,
  Box,
  SimpleGrid,
  Stack,
  HStack,
  Text,
} from "@chakra-ui/layout"
import { Tag } from "@chakra-ui/tag"

import EmailLink from "@components/EmailLink"

export default function SiteFooter() {
  return (
    <Stack bg="brand.900" color="gray.300" py={[10, null, 20]} alignItems="center">
      <Container>
        <SimpleGrid columns={[1, null, 2, 4]} gridGap={10}>
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
              {"Contact"}
            </Box>
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
  )
}
