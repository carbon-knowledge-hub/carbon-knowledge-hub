import { Stack, HStack, Heading, Text, Divider } from "@chakra-ui/react"

import { Link } from "@/components/Link"
import { ArrowRightIcon } from "@/components/Icon"

export default function UpdateItem() {
  return (
    <Stack spacing={3}>
      <HStack spacing={2}>
        <Text as="span" color="gray.500" lineHeight="shorter" fontWeight={600}>
          {"21.05.2024"}
        </Text>
        <Divider orientation="vertical" />
        <Text as="span" color="brand.500" lineHeight="shorter" fontWeight={600}>
          {"Factsheet"}
        </Text>
      </HStack>
      <Heading fontSize="xl">
        <Link href="/" rightIcon={<ArrowRightIcon size="1.5rem" />}>
          {"Global market mechanisms (Article 6) "}
        </Link>
      </Heading>
    </Stack>
  )
}
