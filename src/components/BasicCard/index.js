import {
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  // HStack,
} from "@chakra-ui/layout"
import { Tag } from "@chakra-ui/tag"

import { ButtonLink, Link, LinkOverlay, LinkBox } from "@components/Link"
import Image from "@components/Image"
import { ArrowRightIcon } from "@components/Icon"

function getAreaTemplate(isEven) {
  return [
    `"image image""content content"`,
    null,
    null,
    isEven ? `"content image"` : `"image content"`,
  ]
}

export default function BasicCard({ d, i }) {
  const areaTemplate = getAreaTemplate(i % 2)
  // const basicsTags = d.tags || []
  return (
    <LinkBox
      as={SimpleGrid}
      columns={2}
      gridTemplateAreas={areaTemplate}
      gridGap={[5, null, 10]}
      alignItems="flex-start"
    >
      <Box gridArea="image">
        <Image
          ratio={16 / 9}
          src={`/${d.cover || d.slug + ".png"}`}
          bg="brand.700"
        />
      </Box>
      <Box gridArea="content">
        <Stack spacing={[5, null, 10]}>
          <Tag
            variant="level"
            colorScheme="green"
            fontSize="xs"
            alignSelf="flex-start"
          >
            {d.level}
          </Tag>
          <Stack spacing={3}>
            <Heading as="h2">
              <LinkOverlay href={d.href}>{d.title}</LinkOverlay>
            </Heading>
            <Text color="gray.500" fontSize="lg" lineHeight="tall">
              {d.description}
            </Text>
          </Stack>
          <Link alignSelf="flex-start" href={d.href} variant="card">
            {"Continue reading"}
            <ArrowRightIcon size="1.5rem" />
          </Link>
          {/* <HStack spacing={3}>
            {basicsTags.map((tag) => {
              const key = tag.toLowerCase().split(" ").join("-")
              return (
                <Tag colorScheme="gray" key={key}>
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              )
            })}
          </HStack> */}
        </Stack>
      </Box>
    </LinkBox>
  )
}
