import {
  Stack,
  Container,
  SimpleGrid,
  Box,
  Divider,
  Text,
  RadioGroup,
  Radio,
} from "@chakra-ui/react"
import { useCallback } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

import SiteHeader from "@/components/SiteHeader"
import getPages from "@/utils/api/server/getPages"

// import { PageHeader } from "@/components/PageHeader"
import {
  PageHeader,
  PageHeaderGrid,
  PageHeaderContent,
  PageHeaderBreadcrumbs,
  PageHeaderTitle,
  PageHeaderDescription,
} from "@/components/PageHeader"
import FactsheetCard from "@/components/FactsheetCard"

export default function FactsheetsPage({ factsheets }) {
  return (
    <>
      <SiteHeader />
      <PageHeader>
        <PageHeaderGrid bg="rgba(255,255,255,1)" color="gray.200" />
        <PageHeaderContent gridColumn="1 / -1">
          <PageHeaderBreadcrumbs items={[{ label: "Factsheets" }]} />
          <PageHeaderTitle>{"Factsheets"}</PageHeaderTitle>
          <PageHeaderDescription>
            {
              "Pages that concisely explain important issues and themes relating to carbon trading"
            }
          </PageHeaderDescription>
        </PageHeaderContent>
      </PageHeader>
      <Divider borderColor="gray.300" />
      <FactsheetsListing factsheets={factsheets} />
    </>
  )
}

export async function getStaticProps() {
  const factsheets = await getPages({
    pageType: "factsheets",
    fields: ["frontmatter"],
  })
  return { props: { factsheets } }
}

function FactsheetsListing({ factsheets }) {
  const searchParams = useSearchParams()

  const marketTypeValue = searchParams.get("marketType") || ""
  const organizationTypeValue = searchParams.get("organizationType") || ""
  const levelValue = searchParams.get("level") || ""

  const filteredFactsheets = factsheets.filter(({ frontmatter }) => {
    const d = frontmatter
    let show = true
    if (marketTypeValue && !d.marketType?.includes(marketTypeValue)) {
      show = false
    }
    if (
      organizationTypeValue &&
      !d.organizationType?.includes(organizationTypeValue)
    ) {
      show = false
    }
    if (levelValue && d.level !== levelValue) {
      show = false
    }
    return show
  })

  const count = filteredFactsheets.length

  return (
    <>
      <Container py={10}>{`Showing ${count} factsheet${
        count === 1 ? "" : "s"
      }`}</Container>
      <Divider borderColor="gray.300" />
      <Container>
        <SimpleGrid columns={8} gridGap={10}>
          <Filters />
          <Stack spacing={10} gridColumn="3 / -1" py={10}>
            <Stack spacing={10}>
              {filteredFactsheets.map((factsheet) => {
                return (
                  <FactsheetCard
                    key={factsheet.frontmatter.slug}
                    href={factsheet.frontmatter.slug}
                    frontmatter={factsheet.frontmatter}
                  />
                )
              })}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  )

  // return (
  //   <Stack spacing={10}>
  //     {filteredFactsheets.map((factsheet) => {
  //       return (
  //         <FactsheetCard
  //           key={factsheet.frontmatter.slug}
  //           href={factsheet.frontmatter.slug}
  //           frontmatter={factsheet.frontmatter}
  //         />
  //       )
  //     })}
  //   </Stack>
  // )
}

function Filters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const marketTypeValue = searchParams.get("marketType") || ""
  const organizationTypeValue = searchParams.get("organizationType") || ""
  const levelValue = searchParams.get("level") || ""

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString())
      if (!value) params.delete(name)
      else params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  return (
    <Box
      gridColumn="1 / span 2"
      borderRight="solid 0.0625rem"
      borderColor="gray.300"
      pr={5}
    >
      <Stack py={5}>
        <Text variant="metaHeadingSmall">{"Market type"}</Text>
        <RadioGroup
          value={marketTypeValue}
          onChange={(val) => {
            const queryString = createQueryString("marketType", val)
            router.push(pathname + (queryString ? "?" + queryString : ""), {
              scroll: false,
            })
          }}
        >
          <Radio w="100%" value="">
            {"All"}
          </Radio>
          <Radio w="100%" value="Compliance markets">
            {"Compliance markets"}
          </Radio>
          <Radio w="100%" value="Voluntary markets">
            {"Voluntary markets"}
          </Radio>
        </RadioGroup>
      </Stack>
      <Stack py={5}>
        <Text variant="metaHeadingSmall">{"Organization type"}</Text>
        <RadioGroup
          value={organizationTypeValue}
          onChange={(val) => {
            const queryString = createQueryString("organizationType", val)
            router.push(pathname + (queryString ? "?" + queryString : ""), {
              scroll: false,
            })
          }}
        >
          <Radio w="100%" value="">
            {"All"}
          </Radio>
          <Radio w="100%" value="Low-carbon project developers">
            {"Low-carbon project developers"}
          </Radio>
          <Radio w="100%" value="Corporate credit buyers">
            {"Corporate credit buyers"}
          </Radio>
          <Radio w="100%" value="Policy makers">
            {"Policy makers"}
          </Radio>
          <Radio w="100%" value="Compliance market participants">
            {"Compliance market participants"}
          </Radio>
        </RadioGroup>
      </Stack>
      <Stack py={5}>
        <Text variant="metaHeadingSmall">{"Level"}</Text>
        <RadioGroup
          value={levelValue}
          onChange={(val) => {
            const queryString = createQueryString("level", val)
            router.push(pathname + (queryString ? "?" + queryString : ""), {
              scroll: false,
            })
          }}
        >
          <Radio w="100%" value="">
            {"All"}
          </Radio>
          <Radio w="100%" value="basic">
            {"Basic"}
          </Radio>
          <Radio w="100%" value="intermediate">
            {"Intermediate"}
          </Radio>
        </RadioGroup>
      </Stack>
    </Box>
  )
}
