import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react"

import SectionHeader from "@/components/SectionHeader"
import FactsheetCard from "@/components/FactsheetCard"

export default function DiveDeeper({ factsheets }) {
  return (
    <Box bg="gray.100" mx={-10}>
      <SimpleGrid as="section" columns={8} gridGap={10} px={10} py={20}>
        <SectionHeader
          title="Dive deeper"
          description="Delve into specific carbon-related topics across the voluntary and compliance markets."
          href="/factsheets"
          hrefLabel="See all factsheets"
          gridColumn="span 8"
        />
        <SimpleGrid columns={[1, null, 2]} gridColumn="span 8" gridGap={10}>
          {factsheets.slice(0, 2).map((factsheet) => {
            return (
              <FactsheetCard
                key={factsheet.frontmatter.slug}
                href={factsheet.frontmatter.slug}
                frontmatter={factsheet.frontmatter}
              />
            )
          })}
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  )
}