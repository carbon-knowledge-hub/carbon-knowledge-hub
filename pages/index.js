import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  SimpleGrid,
  HStack,
} from "@chakra-ui/layout"

import { ButtonLink } from "@components/Link"
import { SearchIcon } from "@components/Icon"
import SiteHeader from "@components/SiteHeader"

export default function IndexPage() {
  return (
    <>
      <SiteHeader />

      <Stack alignItems="center">
        <Container>
          <SimpleGrid columns={8} gridGap={10}>
            <Box gridColumn="span 3" pt={12} pb={20}>
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
                    {"A B20 Indonesia Legacy Programme"}
                  </Text>
                  <Heading fontSize="2xl">
                    {
                      "Carbon Centre of Excellence: Enabling the growth of carbon trading"
                    }
                  </Heading>
                </Stack>
                <HStack
                  boxShadow="md"
                  borderRadius="md"
                  px={3}
                  py={3}
                  borderTop="1px solid"
                  borderColor="gray.50"
                  color="gray.500"
                  spacing={3}
                >
                  <Box>
                    <SearchIcon strokeWidth={2} />
                  </Box>
                  <Box fontWeight={500}>
                    {"Search for a carbon-related topic"}
                  </Box>
                </HStack>
                <Text color="gray.600" fontSize="lg" lineHeight="tall">
                  {
                    "The Carbon Center of Excellence is the result of a collaboration between the Indonesian Chamber of Commerce and Industry (KADIN) and BNEF and it aims to enable the growth of carbon trading."
                  }
                </Text>
                <HStack spacing={3}>
                  <ButtonLink size="md" colorScheme="gray" href="/basics">
                    {"Get started"}
                  </ButtonLink>
                  <ButtonLink size="md" colorScheme="gray" href="/factsheets">
                    {"Dive deeper"}
                  </ButtonLink>
                </HStack>
              </Stack>
            </Box>
            <Box bg="gray.50" gridColumn="span 5" />
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  )
}
