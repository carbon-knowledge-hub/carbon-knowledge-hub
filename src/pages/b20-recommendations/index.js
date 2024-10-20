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

// const customComponents = {
//   ...components,
//   h3: props => {
//     return <h3></h3>
//   }
// }

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
          <PageHeaderBreadcrumbs items={[{ label: "B20 recommendations" }]} />
          <PageHeaderTitle>{title}</PageHeaderTitle>
          <PageHeaderDescription>{description}</PageHeaderDescription>
        </PageHeaderContent>
      </PageHeader>
      <Divider borderColor="gray.300" />
      <Container py={20}>
        <SimpleGrid columns={8} gridGap={10}>
          <Stack spacing={10} gridColumn={["1 / -1", null, "2 / -2", "2 / -3"]}>
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
    </>
  )
}

export async function getStaticProps() {
  const source = await getPage({
    slug: "b20-recommendations",
    pageType: "pages",
  })
  return { props: { source } }
}
