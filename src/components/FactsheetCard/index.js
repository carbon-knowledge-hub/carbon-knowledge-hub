import { Heading, Text, Stack, Wrap, WrapItem } from "@chakra-ui/layout"
import { Tag, TagLabel } from "@chakra-ui/tag"
import day from "dayjs"

import { LinkOverlay, LinkBox } from "@components/Link"
export default function FactsheetCard({ d }) {
  return (
    <LinkBox
      href={d.href}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      py={[20, null, 14]}
      px={[5, null, 10]}
      position="relative"
      transition="box-shadow 0.25s"
      _hover={{
        boxShadow: "lg",
      }}
      _active={{
        boxShadow: "sm",
      }}
    >
      {d.date && (
        <Tag
          position="absolute"
          top={4}
          left={[5, null, 10]}
          variant="date"
          colorScheme="gray"
          fontSize="xs"
        >
          {day(d.date).format("DD MMM YYYY")}
        </Tag>
      )}
      {d.level && (
        <Tag
          position="absolute"
          top={4}
          right={4}
          variant="level"
          colorScheme="green"
          fontSize="xs"
        >
          {d.level}
        </Tag>
      )}
      <Stack spacing={10}>
        <Stack spacing={5}>
          <Heading as="h2">
            <LinkOverlay href={d.href}>{d.title}</LinkOverlay>
          </Heading>
          <Text color="gray.500" fontSize="lg" lineHeight="tall">
            {d.description}
          </Text>
        </Stack>
        <Wrap spacing={2}>
          {d.marketType.map((tag) => {
            const key = tag.toLowerCase().split(" ").join("-")
            return (
              <WrapItem key={key}>
                <Tag colorScheme="gray" size="sm">
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              </WrapItem>
            )
          })}
          {d.organizationType.map((tag) => {
            const key = tag.toLowerCase().split(" ").join("-")
            return (
              <WrapItem key={key}>
                <Tag colorScheme="gray" size="sm">
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              </WrapItem>
            )
          })}
        </Wrap>
      </Stack>
    </LinkBox>
  )
}
