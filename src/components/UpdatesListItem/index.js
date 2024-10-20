import { Stack, HStack, Heading, Text, Divider } from "@chakra-ui/react"

import { Link } from "@/components/Link"
import { ArrowRightIcon } from "@/components/Icon"

export default function UpdateItem({ href, date, type, title }) {
  return (
    <Stack spacing={3}>
      <HStack spacing={2}>
        <Text as="span" color="gray.500" lineHeight="shorter" fontWeight={600}>
          {date || ""}
        </Text>
        <Divider orientation="vertical" />
        <Text
          as="span"
          color="brand.500"
          lineHeight="shorter"
          fontWeight={600}
          textTransform="capitalize"
        >
          {type || ""}
        </Text>
      </HStack>
      <Heading fontSize="xl">
        <Link href={href || "/"} rightIcon={<ArrowRightIcon size="1.5rem" />}>
          {title || ""}
        </Link>
      </Heading>
    </Stack>
  )
}
