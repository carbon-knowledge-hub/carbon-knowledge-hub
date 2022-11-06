import { Text, Stack, HStack } from "@chakra-ui/layout"
import { LightbulbIcon } from "@components/Icon"

export default function KeyMessage({ children }) {
  return (
    <Stack
      bg="brand.50"
      color="brand.700"
      p={8}
      spacing={5}
      maxW="48rem"
      borderRadius="md"
      borderWidth="0.125rem"
      borderColor="brand.700"
    >
      <HStack spacing={3} alignItems="center">
        <LightbulbIcon />
        <Text variant="metaText">{"Key message"}</Text>
      </HStack>
      {children}
    </Stack>
  )
}
