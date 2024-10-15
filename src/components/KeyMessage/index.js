import { Text, Stack, HStack } from "@chakra-ui/react"
import { ListIcon } from "@/components/Icon"

export default function KeyMessage({ children }) {
  return (
    <Stack
      bg="primary.50"
      color="primary.700"
      px={8}
      pt={8}
      pb={2}
      spacing={5}
      maxW="64rem"
      borderWidth="0.125rem"
      borderColor="primary.300"
    >
      <HStack spacing={3} alignItems="center">
        <ListIcon />
        <Text variant="metaHeading">{"Key message"}</Text>
      </HStack>
      {children}
    </Stack>
  )
}