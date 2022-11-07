import { Container, Box, SimpleGrid } from "@chakra-ui/layout"

import InPageNavigation from "@components/InPageNavigation"
import SEO from "@components/SEO"

export default function FactsheetsLayout({ metaData, ...restProps }) {
  return (
    <Container>
      <SEO title={metaData.title} description={metaData.description} />
      <SimpleGrid
        columns={8}
        gridGap={10}
        alignItems="start"
        gridAutoFlow="row"
        pb={20}
      >
        {restProps.children}
        <Box
          as="aside"
          bg="gray.100"
          gridColumn={["1 / -1", null, "-3 / -1"]}
          gridRow={[null, null, "2"]}
          h={["auto", null, 0]}
          position="sticky"
          top={10}
        >
          <InPageNavigation metaData={metaData} />
        </Box>
      </SimpleGrid>
    </Container>
  )
}
