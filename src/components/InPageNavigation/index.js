import { Stack, Box, Text } from "@chakra-ui/layout"

const createSlug = (t) =>
  t.split(" ").join("-").split(".").join("").toLowerCase()

export default function InPageNavigation({ metaData }) {
  const anchors = metaData.anchors || []

  const items = anchors.filter((d) => d.level === "h2")

  return (
    <Stack
      spacing={3}
      position={["relative", null, "sticky"]}
      top={[0, null, 5]}
    >

      <Text variant="metaText">{"On this page:"}</Text>
      {items.map((d) => {
        const slug = createSlug(d.value)
        return (
          <Box key={d.value} fontWeight={700}>
            <a href={`#${slug}`}>{d.value}</a>
          </Box>
        )
      })}
    </Stack>
  )
}
