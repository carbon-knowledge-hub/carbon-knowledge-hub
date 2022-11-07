import { useEffect, useState } from "react"
import { Box, Text, HStack } from "@chakra-ui/layout"
import { useBreakpointValue } from "@chakra-ui/media-query"

import { useFactsheetStore } from "@utils/store"
import MobileFilter from "@components/MobileFilter"

export default function FactsheetsCount() {
  const factsheets = useFactsheetStore((state) => state.factsheets)
  const isMobile = useBreakpointValue({ base: true, md: false })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (isLoaded) return
    setIsLoaded(true)
  }, [isLoaded])

  return (
    <Box gridColumn={["span 8", null, "span 2"]} minH={["none", null, 8]}>
      <HStack spacing={3}>
        <Text color="gray.500" flex="1">
          {`${factsheets.filter((d) => d.isVisible).length} factsheet${
            factsheets.length != 1 ? "s" : ""
          }`}
        </Text>
        {isMobile && isLoaded && <MobileFilter />}
      </HStack>
    </Box>
  )
}
