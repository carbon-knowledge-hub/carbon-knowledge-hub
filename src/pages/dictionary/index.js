// import { useEffect } from "react"
import { SimpleGrid, Stack, Divider, Container } from "@chakra-ui/react"
import { MDXRemote } from "next-mdx-remote"

import getPage from "@/utils/api/server/getPage"
// import { useDictionaryStore } from "@/utils/useDictionaryDrawer"
import components from "@/components/MDXComponents"
import {
  PageHeader,
  PageHeaderGrid,
  PageHeaderContent,
  PageHeaderBreadcrumbs,
  PageHeaderTitle,
  PageHeaderDescription,
} from "@/components/PageHeader"
import SEO from "@/components/SEO"

export default function DictionaryPage({ source }) {
  const { frontmatter } = source
  const title = frontmatter.title
  const description = frontmatter.description
  // const setTerms = useDictionaryStore((state) => state.setTerms)

  // useEffect(() => {
  //   if (typeof window === "undefined") return undefined
  //   console.log("FRONTMATTER: ", frontmatter)
  //   setTerms([])
  // }, [setTerms])

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || ""}
      />
      <PageHeader>
        <PageHeaderGrid bg="rgba(255,255,255,1)" color="gray.200" />
        <PageHeaderContent gridColumn={["1 / -1", null, "2 / -2"]}>
          <PageHeaderBreadcrumbs items={[{ label: "Dictionary" }]} />
          <PageHeaderTitle>{title}</PageHeaderTitle>
          <PageHeaderDescription>{description}</PageHeaderDescription>
        </PageHeaderContent>
      </PageHeader>
      <Divider borderColor="gray.300" />
      <Container>
        <SimpleGrid columns={8} gridGap={10}>
          <Stack
            spacing={10}
            py={10}
            gridColumn={["1 / -1", null, "2 / -3"]}
            fontSize={["lg", null, "xl"]}
            lineHeight="tall"
            letterSpacing="-0.01em"
            sx={{
              dl: {},
              dt: { fontWeight: 700 },
              dd: {
                a: {
                  color: "brand.500",
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                  _focusVisible: {
                    textDecoration: "underline",
                    outline: "0.125rem solid",
                    outlineColor: "brand.500",
                  },
                },
              },
            }}
          >
            <MDXRemote
              {...source}
              components={components}
              scope={{ terms: [{ key: 1, label: "THIS IS A LABEL" }] }}
            />
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const source = await getPage({ slug: "dictionary", pageType: "pages" })
  return { props: { source } }
}
