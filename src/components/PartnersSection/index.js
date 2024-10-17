import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react"

import { Link } from "@/components/Link"
import SectionHeader from "@/components/SectionHeader"

export default function PartnersSection({ partners }) {
  return (
    <Box mx={-10}>
      <SimpleGrid
        as="section"
        columns={[2, 4, 6, 8]}
        gridGap={10}
        px={10}
        py={20}
      >
        <SectionHeader
          title="Carbon Centre of Excellence Partners"
          description="Partners to the Carbon Centre of Excellence support the development of carbon markets worldwide, as a mechanism to drive decarbonization."
          href="/partners"
          hrefLabel="Read more"
          gridColumn="span 8"
        />
        {partners.map((partner, i) => {
          const srcArray = partner.logo.split(".")
          const ext = srcArray.slice(-1)[0]
          return (
            <Link href="/partners" key={i}>
              <img
                alt={partner.name}
                src={`/images/partners/${srcArray
                  .slice(0, -1)
                  .join(".")}-md.${ext}`}
              />
            </Link>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export async function getStaticProps() {

  const partners = await getContent("partners.txt", "json")
  return {
    props: {
      factsheets,
      partners: partners.filter((d) => d.type !== "managing"),
    },
  }
}
