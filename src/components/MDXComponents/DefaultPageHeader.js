import { Box, Heading, SimpleGrid, Container } from "@chakra-ui/layout"

import { BreadCrumbs, BreadCrumb } from "@components/BreadCrumbs"

export default function DefaultPageHeader({ metaData, children }) {
  return (
    <Box
      className="site-header"
      borderBottom="0.0625rem solid"
      borderColor="gray.100"
      gridColumn={["1 / -1", null, "1 / -1"]}
      mx={[-4, -5, null, -10]}
      py={10}
    >
      <Container>
        <SimpleGrid columns={8} spacingX={10} spacingY={5} alignItems="start">
          <SimpleGrid
            columns={7}
            spacingX={10}
            alignItems="center"
            gridColumn={["1 / -1", null, "2 / -1"]}
            minH={10}
          >
            <Box gridColumn="span 5">
              <BreadCrumbs>
                <BreadCrumb>{metaData?.title}</BreadCrumb>
              </BreadCrumbs>
            </Box>
          </SimpleGrid>
          <Heading
            as="h1"
            w="100%"
            fontSize="3xl"
            gridColumn={["1 / -1", null, "2 / -3"]}
          >
            {children}
          </Heading>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
