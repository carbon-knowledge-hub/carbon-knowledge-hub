import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Stack,
} from "@chakra-ui/layout"

import FactsheetFilters from "@components/FactsheetFilters"
import FactsheetSelectedFilters from "@components/FactsheetFilters/FactsheetSelectedFilters"
import FactsheetListing from "@components/FactsheetListing"
import FactsheetsCount from "@components/FactsheetListing/FactsheetsCount"
import { BreadCrumbs, BreadCrumb } from "@components/BreadCrumbs"
import SEO from "@components/SEO"

export default function FactsheetsPage() {
  return (
    <>
      <SEO title="Factsheets" description="Concise explanations of topics key to the voluntary and compliance carbon markets such as import tariffs, Article 6, offset quality, contracting methods and public acceptance." />
      <Stack spacing={0}>
        <Box w="100%" py={10}>
          <Container>
            <SimpleGrid
              columns={8}
              spacingX={10}
              spacingY={5}
              alignItems="start"
            >
              <SimpleGrid
                columns={7}
                spacingX={10}
                alignItems="center"
                gridColumn={["1 / -1", null, "1 / -1"]}
              >
                <Box gridColumn="span 5">
                  <BreadCrumbs>
                    <BreadCrumb>{"Factsheets"}</BreadCrumb>
                  </BreadCrumbs>
                </Box>
              </SimpleGrid>
              <Stack spacing={3} gridColumn={["1 / -1"]}>
                <Heading as="h1" w="100%" fontSize="3xl">
                  {"Factsheets"}
                </Heading>
                <Text variant="lead">
                  {
                    "Delve into specific carbon-related topics across the voluntary and compliance markets."
                  }
                </Text>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
        <Box
          bg="white"
          w="100%"
          borderY="0.0625rem solid"
          borderColor="gray.100"
          py={6}
          position="sticky"
          top={0}
          zIndex="overlay"
          boxShadow="sm"
        >
          <Container mx="auto">
            <SimpleGrid columns={8} gridGap={[3, null, 10]} gridColumn="1 / -1">
              <FactsheetsCount />
              <FactsheetSelectedFilters />
            </SimpleGrid>
          </Container>
        </Box>
        <Box bg="gray.50" w="100%" pt={12} pb={20}>
          <Container mx="auto">
            <SimpleGrid columns={8} gridGap={10}>
              <FactsheetFilters display={["none", null, "block"]} />
              <FactsheetListing />
            </SimpleGrid>
          </Container>
        </Box>
      </Stack>
    </>
  )
}
