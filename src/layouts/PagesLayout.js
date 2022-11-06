import { Container, SimpleGrid } from "@chakra-ui/layout"

export default function PagesLayout({ metaData, ...restProps }) {
  return (
    <Container>
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
