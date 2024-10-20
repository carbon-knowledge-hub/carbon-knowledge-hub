import { Container, Divider, SimpleGrid, Stack } from "@chakra-ui/react"
import { MDXRemote } from "next-mdx-remote"

import getPage from "@/utils/api/server/getPage"
import components from "@/components/MDXComponents"
import SiteHeader from "@/components/SiteHeader"
import {
  PageHeader,
  PageHeaderGrid,
  PageHeaderContent,
  PageHeaderBreadcrumbs,
  PageHeaderTitle,
  PageHeaderDescription,
} from "@/components/PageHeader"
import SEO from "@/components/SEO"

export default function LinksPage({ source }) {
  const { frontmatter } = source
  const title = frontmatter.title
  const description = frontmatter.description
  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || ""}
      />
      <SiteHeader />
      <PageHeader>
        <PageHeaderGrid bg="rgba(255,255,255,1)" color="gray.200" />
        <PageHeaderContent gridColumn={["1 / -1", null, "2 / -2"]}>
          <PageHeaderBreadcrumbs items={[{ label: "Links" }]} />
          <PageHeaderTitle>{title}</PageHeaderTitle>
          <PageHeaderDescription>{description}</PageHeaderDescription>
        </PageHeaderContent>
      </PageHeader>
      <Divider borderColor="gray.300" />
      <Container py={10}>
        <SimpleGrid columns="8">
          <Stack
            spacing={10}
            py={10}
            gridColumn={["1 / -1", null, "2 / -3"]}
            fontSize={["lg", null, "xl"]}
          >
            <MDXRemote {...source} components={components} />
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const source = await getPage({ slug: "links", pageType: "pages" })
  return { props: { source } }
}
