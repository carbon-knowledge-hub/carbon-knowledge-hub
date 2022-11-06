import { Box, Text, Stack } from "@chakra-ui/layout"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion"
import { RadioGroup, Radio } from "@chakra-ui/radio"

import { useFactsheetStore } from "@utils/store"

export default function FactsheetFilters({
  allowMultiple = true,
  defaultIndex = [0],
  ...restProps
}) {
  const filters = useFactsheetStore((state) => state.filters)
  const updateSelectedFilters = useFactsheetStore(
    (state) => state.updateSelectedFilters
  )

  return (
    <Box gridColumn={["1 / -1", null, "span 2"]} {...restProps}>
      <Box
        pb={10}
        position={["relative", null, "sticky"]}
        top={[null, null, 24]}
      >
        <Accordion allowMultiple={allowMultiple} defaultIndex={defaultIndex}>
          {filters.map(({ id, label, options, value }) => {
            return (
              <AccordionItem
                key={id}
                borderTopColor="gray.200"
                borderBottomColor="gray.200"
                _first={{ borderTopColor: "transparent" }}
              >
                <h2>
                  <AccordionButton px={0}>
                    <Box flex="1" textAlign="left">
                      <Text variant="metaText">{label}</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px={1}>
                  <RadioGroup
                    value={value}
                    onChange={(v) => updateSelectedFilters(id, v)}
                  >
                    <Stack>
                      {options.map((opt) => {
                        return (
                          <Radio key={opt} value={opt}>
                            {opt[0].toUpperCase()}
                            {opt.slice(1)}
                          </Radio>
                        )
                      })}
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </Box>
    </Box>
  )
}
