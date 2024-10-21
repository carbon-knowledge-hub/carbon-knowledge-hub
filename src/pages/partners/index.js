import { Box, Stack, Container, SimpleGrid, Divider } from "@chakra-ui/react"
import { MDXRemote } from "next-mdx-remote"

import getPage from "@/utils/api/server/getPage"
import getContent from "@/utils/api/server/getContent"
import components from "@/components/MDXComponents"
import {
  PageHeader,
  PageHeaderGrid,
  PageHeaderContent,
  PageHeaderBreadcrumbs,
  PageHeaderTitle,
  PageHeaderDescription,
} from "@/components/PageHeader"

import { PartnersProvider } from "@/utils/usePartnersContext"
import SEO from "@/components/SEO"

export default function DataTrackerPage({ source, partners }) {
  const { frontmatter } = source
  const title = frontmatter.title
  const description = frontmatter.description
  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || ""}
      />
      <PageHeader>
        <PageHeaderGrid bg="rgba(255,255,255,1)" color="gray.200" />
        <PageHeaderContent gridColumn={["1 / -1", null, "2 / -2"]}>
          <PageHeaderBreadcrumbs items={[{ label: "Partners" }]} />
          <PageHeaderTitle>{title}</PageHeaderTitle>
          <PageHeaderDescription>{description || ""}</PageHeaderDescription>
        </PageHeaderContent>
      </PageHeader>
      <Divider borderColor="gray.300" />
      <PartnersProvider value={{ partners }}>
        <Container py={20}>
          <SimpleGrid columns={8} gridGap={10}>
            <Stack
              spacing={10}
              gridColumn={["1 / -1", null, "2 / -2", "2 / -3"]}
            >
              <MDXRemote {...source} components={components} />
            </Stack>
            <Box
              gridColumn="7/-1"
              as="aside"
              h={["auto", null, 0]}
              position="sticky"
              top={10}
              display={["none", null, null, "block"]}
            ></Box>
          </SimpleGrid>
        </Container>
      </PartnersProvider>
    </>
  )
}

export async function getStaticProps() {
  const source = await getPage({
    slug: "partners",
    pageType: "pages",
  })
  const partners = await getContent("partners.txt", "json")
  return { props: { source, partners } }
}
