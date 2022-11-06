import { Box, HStack } from "@chakra-ui/layout"
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/tag"

import { useFactsheetStore } from "@utils/store"

export default function FactsheetSelectedFilters() {
  const filters = useFactsheetStore((state) => state.filters)
  const updateSelectedFilters = useFactsheetStore(
    (state) => state.updateSelectedFilters
  )
  const filteredFilters = filters.filter(d => d.value !== "all")
  if (!filteredFilters.length) return null
  return (
    <Box gridColumn={["span 8", null, "span 6"]}>
      <HStack spacing={3}>
        {filteredFilters.map(({ id, value }) => {
          return (
            <Tag colorScheme="gray" key={id}>
              <TagLabel>
                {value[0].toUpperCase()}
                {value.slice(1)}
              </TagLabel>
              <TagCloseButton
                onClick={() => updateSelectedFilters(id, "all")}
              />
            </Tag>
          )
        })}
      </HStack>
    </Box>
  )
}
