import {
  Text,
  Stack,
  HStack,
  Box,
  Heading,
  Tag,
  TagLabel,
} from "@chakra-ui/react"

import day from "dayjs"
import { LinkBox, LinkOverlay } from "@/components/Link"
// import { DownloadIcon } from "@/components/Icon"

export default function FactsheetCard({
  href,
  children,
  frontmatter,
  ...restProps
}) {
  // console.log("Frontmatter", frontmatter)
  return (
    <LinkBox
      href={href}
      borderColor="gray.300"
      borderWidth="0.0625rem"
      px={6}
      py={10}
      bg="white"
      {...restProps}
    >
      <Stack spacing={6} w="100%" h="100%" justifyContent="space-between">
        <HStack justifyContent="space-between">
          <Text variant="metaHeadingSmall">
            {day(frontmatter?.date).format("DD MMM YYYY")}
          </Text>
          {frontmatter?.level && (
            <Tag
              colorScheme={
                frontmatter.level === "basic" ? "tertiary" : "secondary"
              }
              fontSize="0.875rem"
              lineHeight="shorter"
              textTransform="uppercase"
              fontWeight={600}
              letterSpacing="0.02em"
              borderRadius="full"
            >
              {frontmatter.level}
            </Tag>
          )}
        </HStack>
        <Stack spacing={3}>
          <Heading as="h2" variant="storyTitle">
            <LinkOverlay href={frontmatter?.slug || "/"}>
              {frontmatter?.title}
            </LinkOverlay>
          </Heading>
          <Text variant="body">{frontmatter?.description}</Text>
        </Stack>
        <HStack>
          {frontmatter?.marketType?.map((tag) => {
            return (
              <Box key={tag}>
                <Tag
                  colorScheme="gray"
                  size="lg"
                  borderRadius="none"
                  fontWeight={600}
                >
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              </Box>
            )
          })}
        </HStack>
      </Stack>
    </LinkBox>
  )
}
