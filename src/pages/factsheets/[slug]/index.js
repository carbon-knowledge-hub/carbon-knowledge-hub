import { useEffect } from "react"
import { Container, SimpleGrid, Stack, Text, HStack } from "@chakra-ui/react"
import { MDXRemote } from "next-mdx-remote"
import { micromark } from "micromark"

import getPages from "@/utils/api/server/getPages"
import getPage from "@/utils/api/server/getPage"
import { useDictionaryStore } from "@/utils/useDictionaryDrawer"
import components from "@/components/MDXComponents"
import day from "dayjs"
import {
  PageHeader,
  PageHeaderGrid,
  PageHeaderContent,
  PageHeaderBreadcrumbs,
  PageHeaderTitle,
  PageHeaderMetadata,
} from "@/components/PageHeader"
import SEO from "@/components/SEO"

function FactsheetPage({ source, dictionary }) {
  const { frontmatter } = source
  const setTerms = useDictionaryStore((state) => state.setTerms)
  const title = frontmatter.title
  const date = frontmatter.date
  const level = frontmatter.level

  useEffect(() => {
    if (typeof window === "undefined") return undefined
    setTerms(dictionary)
  }, [setTerms])

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || ""}
      />
      <PageHeader bg="brand.1000" color="white">
        <PageHeaderGrid bg="brand.1000" color="brand.900" />
        <PageHeaderContent gridColumn={["1 / -1", null, "2 / -2"]}>
          <PageHeaderBreadcrumbs
            isInverted
            items={[
              { label: "Factsheets", href: "/factsheets" },
              { label: title },
            ]}
          />
          <PageHeaderTitle>{title}</PageHeaderTitle>
          <PageHeaderMetadata>
            <HStack spacing={3}>
              {level && (
                <Text
                  color={
                    level === "intermediate" ? "secondary.800" : "tertiary.800"
                  }
                  bg={
                    level === "intermediate" ? "secondary.200" : "tertiary.200"
                  }
                  variant="tag"
                >
                  {level}
                </Text>
              )}
              {date && (
                <Text fontWeight={600} fontSize="0.875rem">
                  {"|"}
                </Text>
              )}

              {date && (
                <Text
                  fontSize="0.875rem"
                  fontWeight={600}
                  lineHeight="shorter"
                  textTransform="uppercase"
                >
                  {day(date).format("DD MMM YYYY")}
                </Text>
              )}
            </HStack>
          </PageHeaderMetadata>
        </PageHeaderContent>
      </PageHeader>

      <Stack spacing={20} pt={10} pb={[10, null, 20]}>
        <Container>
          <SimpleGrid columns={8} gridGap={10}>
            <Stack
              spacing={10}
              gridColumn={["1 / -1", null, "2 / -2", "2 / -3"]}
            >
              <MDXRemote {...source} components={components} />
            </Stack>
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  )
}

FactsheetPage.displayName = "FactsheetPage"

export default FactsheetPage

export async function getStaticPaths(ctx) {
  const factsheets = await getPages({
    pageType: "factsheets",
    fields: ["frontmatter"],
  })
  return {
    paths: factsheets.map((factsheet) => {
      return { params: { slug: factsheet.frontmatter.slug.split("/").pop() } }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const source = await getPage({ slug, pageType: "factsheets" })
  const dictionary = await getPage({
    slug: "dictionary",
    pageType: "pages",
    fields: ["frontmatter"],
  })

  const terms = (dictionary?.frontmatter?.terms || []).map((d) => {
    return { ...d, description: micromark(d.description) }
  })

  return { props: { source, dictionary: terms } }
}
