import { Stack, Container } from "@chakra-ui/layout"

export default function FactsheetsLayout({ metaData, ...restProps }) {
  return (
    <Stack alignItems="center">
      <Container>
        <Stack spacing={6} {...restProps} />
      </Container>
    </Stack>
  )
}
