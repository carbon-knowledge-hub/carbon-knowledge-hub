import { Box, Heading, Text, Stack, Wrap, WrapItem } from "@chakra-ui/layout"
import { Tag, TagLabel } from "@chakra-ui/tag"
import day from "dayjs"

import { useFactsheetStore } from "@utils/store"
import { LinkBox, LinkOverlay } from "@components/Link"

export default function FactsheetListing() {
  const factsheets = useFactsheetStore((state) => state.factsheets)
  const count = factsheets?.filter((d) => d.isVisible).length

  return (
    <Box gridColumn={["1 / -1", null, "span 6"]}>
      <Stack spacing={10}>
        {!count && <Text color="gray.500">{"No factsheets to show"}</Text>}
        {factsheets.map(
          ({
            title,
            isVisible,
            description,
            href,
            level,
            tags = [],
            marketType,
            organizationType,
            date,
          }) => {
            if (!isVisible) return null
            return (
              <LinkBox
                key={href}
                px={[5, null, 10]}
                py={[20, null, 14]}
                bg="white"
                boxShadow="md"
                borderRadius="md"
                position="relative"
                transition="box-shadow 0.25s"
                _hover={{
                  boxShadow: "lg",
                }}
                _active={{
                  boxShadow: "sm",
                }}
              >
                {/* {date && (
                  <Tag
                    position="absolute"
                    top={4}
                    left={[5, null, 10]}
                    variant="date"
                    colorScheme="gray"
                    fontSize="xs"
                  >
                    {day(date).format("DD MMM YYYY")}
                  </Tag>
                )} */}
                {level && (
                  <Tag
                    position="absolute"
                    top={4}
                    right={4}
                    variant="level"
                    colorScheme="green"
                    fontSize="xs"
                  >
                    {level}
                  </Tag>
                )}

                <Stack spacing={[5, null, 10]}>
                  <Stack spacing={3}>
                    <Heading as="h2">
                      <LinkOverlay href={href}>{title}</LinkOverlay>
                    </Heading>
                    {description && (
                      <Text
                        color="gray.500"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {description}
                      </Text>
                    )}
                  </Stack>
                  <Wrap spacing={2}>
                    {marketType.map((tag) => {
                      return (
                        <WrapItem key={tag}>
                          <Tag colorScheme="gray" size="sm">
                            <TagLabel>{tag}</TagLabel>
                          </Tag>
                        </WrapItem>
                      )
                    })}
                    {organizationType.map((tag) => {
                      return (
                        <WrapItem key={tag}>
                          <Tag colorScheme="gray" size="sm">
                            <TagLabel>{tag}</TagLabel>
                          </Tag>
                        </WrapItem>
                      )
                    })}
                    {tags.map((tag) => {
                      return (
                        <WrapItem key={tag}>
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
        )}
      </Stack>
    </Box>
  )
}
