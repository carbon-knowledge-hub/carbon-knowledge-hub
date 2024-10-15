import { Text, Stack, HStack, Box, Heading } from "@chakra-ui/react"

import day from "dayjs"
import { ButtonLink } from "@/components/Link"
import { DownloadIcon } from "@/components/Icon"

export default function StoryCard({ children, frontmatter, ...restProps }) {
  return (
    <Box
      key={frontmatter.slug}
      href={frontmatter.slug}
      {...restProps}
      borderColor="gray.300"
      borderWidth="0.0625rem"
      p={6}
    >
      <Stack spacing={6} w="100%" h="100%" justifyContent="space-between">
        <Stack spacing={10}>
          <Box alignSelf="flex-end" w="12rem" h="auto">
            <img src={`images/partners/${frontmatter.partnerLogo}`}/>
          </Box>
          <Stack spacing={6}>
            <HStack spacing={3}>
              {frontmatter.partner && (
                <Text variant="metaHeadingSmall">{frontmatter.partner}</Text>
              )}

              <Text fontWeight={400} color="gray.600" variant="metaHeadingSmall">
                {"|"}
              </Text>
              {frontmatter.date && (
                <Text variant="metaHeadingSmall" fontWeight={400} color="gray.600">
                  {day(frontmatter.date).format("DD MMM YYYY")}
                </Text>
              )}
            </HStack>
            <Stack spacing={3}>
            <Heading variant="storyTitle">{frontmatter.title}</Heading>
            <Text variant="bodySmall">{frontmatter.description}</Text>
            </Stack>
          </Stack>
        </Stack>
        <ButtonLink
          href={`pdfs/${frontmatter.pdf}`}
          leftIcon={<DownloadIcon size="1.25rem" />}
          variant="ghost"
          colorScheme="primary"
          alignSelf="flex-start"
        >
          {"Download as pdf"}
        </ButtonLink>
      </Stack>
    </Box>
  )
}
