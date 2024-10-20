import {
  SimpleGrid,
  Stack,
  HStack,
  Text,
  Heading,
  Divider,
  Box,
} from "@chakra-ui/react"

import { Link } from "@/components/Link"
import { ArrowRightIcon } from "@/components/Icon"

export default function SectionHeader({
  title = "",
  description = "",
  href = "",
  hrefLabel = "Read more",
  dividerProps = {},
}) {
  return (
    <SimpleGrid
      as="header"
      columns={8}
      gridColumnGap={10}
      gridRowGap={5}
      gridColumn="1 / -1"
    >
      <HStack gridColumn="1 / -1" spacing={10} alignItems="flex-start">
        <Stack spacing={3} flex={1}>
          {title && (
            <Heading as="h1" variant="sectionHeading">
              {title}
            </Heading>
          )}
          {description && (
            <Text textStyle="sectionSubheading">{description}</Text>
          )}
        </Stack>
        {href && (
          <Link
            href={href}
            flex="none"
            variant="standalone"
            rightIcon={<ArrowRightIcon size="1.5rem" />}
          >
            {hrefLabel}
          </Link>
        )}
      </HStack>
      <Divider gridColumn="1 / -1" {...dividerProps} />
    </SimpleGrid>
  )
}
