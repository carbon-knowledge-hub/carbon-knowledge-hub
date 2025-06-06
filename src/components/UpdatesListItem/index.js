import { Stack, HStack, Heading, Text, Divider } from "@chakra-ui/react"

import { Link } from "@/components/Link"
import { ArrowRightIcon } from "@/components/Icon"

export default function UpdateItem({ href, downloadLink, date, type, title }) {
  const isStory = type === "storie"
  const _type = isStory ? "story" : type || ""
  const _href = isStory
    ? downloadLink
      ? `/pdfs/${downloadLink}`
      : "" || "/"
    : href || "/"
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
          {_type}
        </Text>
      </HStack>
      <Heading fontSize="xl">
        <Link href={_href} rightIcon={<ArrowRightIcon size="1.5rem" />}>
          {title || ""}
        </Link>
      </Heading>
    </Stack>
  )
}
