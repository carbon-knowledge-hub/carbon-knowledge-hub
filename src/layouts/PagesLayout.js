import { Stack, Container } from "@chakra-ui/layout"

export default function PagesLayout({ metaData, ...restProps }) {
  return (
    <Stack alignItems="center">
      <Container>
        <Stack spacing={6} {...restProps} />
      </Container>
    </Stack>
  )
}