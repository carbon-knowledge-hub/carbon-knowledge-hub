import { useEffect } from "react"
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  HStack,
  Tag,
} from "@chakra-ui/react"
import { MDXRemote } from "next-mdx-remote"
import { micromark } from "micromark"

import getPages from "@/utils/api/server/getPages"
import getPage from "@/utils/api/server/getPage"
import { useDictionaryStore } from "@/utils/useDictionaryDrawer"
import components from "@/components/MDXComponents"
import SiteHeader from "@/components/SiteHeader"
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

export default function FactsheetPage({ source, dictionary }) {
  const { frontmatter } = source
  const setTerms = useDictionaryStore((state) => state.setTerms)
  const title = frontmatter.title
  const description = frontmatter.description
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
      <SiteHeader bg="brand.1000" color="white" />
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
                  color={level === "intermediate" ? "secondary.800" : "tertiary.800"}
                  bg={level === "intermediate" ? "secondary.200" : "tertiary.200"}
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

      <Stack spacing={20} pb={[10, null, 20]}>
        <Container bg="primary.900" position="relative" overflow="hidden">
          {/* <SimpleGrid columns={8}>
            <Box gridColumn={["1 / -1", null, "2 / -2"]} color="white" py={20}>
              <Stack spacing={5}>
                <BreadCrumbs isInverted>
                  <BreadCrumb href="/factsheets" isInverted>{"Factsheets"}</BreadCrumb>
                  <BreadCrumb isInverted>{title}</BreadCrumb>
                </BreadCrumbs>
                <Heading as="h1" variant="factsheetTitle">
                  {title}
                </Heading>
                <HStack spacing={3}>
                  {level && (
                    <Tag
                      colorScheme="secondary"
                      fontSize="0.875rem"
                      lineHeight="shorter"
                      textTransform="uppercase"
                      fontWeight={600}
                      letterSpacing="0.02em"
                      variant="outline"
                      borderRadius="full"
                    >
                      {level}
                    </Tag>
                  )}

                  <Text fontWeight={600} fontSize="0.875rem">
                    {"|"}
                  </Text>
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
              </Stack>
            </Box>
          </SimpleGrid> */}
        </Container>
        <Container>
          <SimpleGrid columns={8} gridGap={10}>
            <Stack
              spacing={10}
              gridColumn={["1 / -1", null, "2 / -2", "2 / -3"]}
            >
              <MDXRemote {...source} components={components} />
            </Stack>
            {/* <Box
              gridColumn="7/-1"
              as="aside"
              h={["auto", null, 0]}
              position="sticky"
              top={10}
              display={["none", null, null, "block"]}
            >
              <Stack>
                <Text variant="metaHeading">{"On this page"}</Text>
              </Stack>
            </Box> */}
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  )
}

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
