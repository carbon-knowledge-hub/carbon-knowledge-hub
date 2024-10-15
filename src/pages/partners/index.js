import {
  Text,
  Box,
  Container,
  SimpleGrid,
  Stack,
  Divider,
} from "@chakra-ui/react"
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

export default function DataTrackerPage({ source }) {
  const { frontmatter } = source
  const title = source.frontmatter.title
  const description = source.frontmatter.description
  return (
    <>
      <SiteHeader />
      <PageHeader>
        <PageHeaderGrid bg="rgba(255,255,255,1)" color="gray.200" />
        <PageHeaderContent gridColumn={["1 / -1", null, "2 / -2"]}>
          <PageHeaderBreadcrumbs items={[{ label: "Partners" }]} />
          <PageHeaderTitle>{title}</PageHeaderTitle>
          {/* <PageHeaderDescription>{description}</PageHeaderDescription> */}
        </PageHeaderContent>
      </PageHeader>
      <Divider borderColor="gray.300" />
      <Container py={20}>
        <SimpleGrid columns={8} gridGap={10}>
          <Box gridColumn={["1 / -1", null, "2 / -2", "2 / -3"]}>
            <MDXRemote {...source} components={components} />
          </Box>
          <Box
            gridColumn="7/-1"
            as="aside"
            h={["auto", null, 0]}
            position="sticky"
            top={10}
            display={["none", null, null, "block"]}
          >
          </Box>
        </SimpleGrid>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const source = await getPage({
    slug: "partners",
    pageType: "pages",
  })
  return { props: { source } }
}
