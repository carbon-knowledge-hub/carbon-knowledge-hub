import { useEffect, useState } from "react"
import { Box, SimpleGrid } from "@chakra-ui/layout"
import { csvParse } from "d3-dsv"
import uniqBy from "lodash/uniqBy"

import Image from "@components/Image"

export default function PartnersList({
  type = "all",
  partners = [],
  ...restProps
}) {
  const [partnersLocal, setPartners] = useState(partners)
  const len = partners.length

  useEffect(() => {
    if (typeof window === "undefined" || len) return
    fetch("/partners.csv")
      .then((res) => res.text())
      .then((d) => {
        const filtered =
          type !== "all"
            ? csvParse(d).filter((dd) => dd.partner_type === type)
            : d
        setPartners(uniqBy(filtered, (o) => o.partner_logo))
      })
  }, [type, len])

  return (
    <SimpleGrid columns={[2, 3, null, 4, 5]} gridGap={10} {...restProps}>
      {partnersLocal.map(({ partner_logo }, i) => {
        return (
          <Box key={partner_logo + i}>
            <Image
              src={partner_logo}
              subFolder="partners"
              objectFit="contain"
              type="partnerLogo"
            />
          </Box>
        )
      })}
    </SimpleGrid>
  )
}
