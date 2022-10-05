import { Stack } from "@chakra-ui/layout"

export default function ContentStack(props) {
  return (
    <Stack
      as="main"
      spacing={10}
      gridColumn={["1 / -1", null, null, "span 3"]}
      justifyContent="flex-start"
      {...props}
    />
  )
}
