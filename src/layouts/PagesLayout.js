import { Container, SimpleGrid } from "@chakra-ui/layout"

import SEO from "@components/SEO"

export default function PagesLayout({ metaData, ...restProps }) {
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
      </SimpleGrid>
    </Container>
  )
}
