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
            console.log("V", value)
            return (
              <AccordionItem
                key={id}
                borderTopColor="gray.200"
                borderBottomColor="gray.200"
                py={5}
                _first={{ borderTopColor: "transparent" }}
              >
                <Stack spacing={0}>
                <h2>
                  <AccordionButton
                    px={0}
                    _hover={{ "bg": "transparent" }}
                    _focus={{ "bg": "transparent" }}
                    _active={{ "bg": "transparent" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Text variant="metaText">{label}</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <p>
                  <Text color="gray.600">{value}</Text>
                </p>
                </Stack>
                <AccordionPanel px={1}>
                  <RadioGroup
                    value={value}
                    onChange={(v) => updateSelectedFilters(id, v)}
                  >
                    <Stack fontWeight={500} spacing={3}>
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
