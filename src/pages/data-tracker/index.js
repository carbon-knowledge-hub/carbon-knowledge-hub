import { Box, Container, SimpleGrid, HStack, Text } from "@chakra-ui/react"
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
  PageHeaderMetadata,
} from "@/components/PageHeader"

export default function DataTrackerPage({ source }) {
  const { frontmatter } = source
  const title = source.frontmatter.title
  const description = source.frontmatter.description
  return (
    <>
      <SiteHeader bg="brand.1000" color="white" />
      <PageHeader bg="brand.1000" color="white">
        <PageHeaderGrid bg="brand.1000" color="brand.900" />
        <PageHeaderContent gridColumn={["1 / -1", null, "2 / -2", null, "2 / -3"]}>
          <PageHeaderBreadcrumbs
            isInverted
            items={[{ label: "Data tracker" }]}
          />
          <PageHeaderTitle>{title}</PageHeaderTitle>
          <PageHeaderDescription>
            {description}
          </PageHeaderDescription>
          <PageHeaderMetadata>
            {/* <HStack spacing={3}>
              <Text
                fontSize="0.875rem"
                fontWeight={600}
                lineHeight="shorter"
                textTransform="uppercase"
              >
                {"Updated on 09 Oct 2024"}
              </Text>
            </HStack> */}
          </PageHeaderMetadata>
        </PageHeaderContent>
      </PageHeader>
      <Container py={10}>
        <SimpleGrid
          columns={8}
          gridGap={0}
          pb={20}
          sx={{
            "h1, h2, h3, h4, h5, h6, p": {
              gridColumn: ["1 / -1", null, "2 / -2", null, "2 / -3"]
            },
            // "> div": {
            //   gridColumn: "1 / -1",
            // },
          }}
        >
          <MDXRemote {...source} components={components} />
        </SimpleGrid>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const source = await getPage({ slug: "data-tracker", pageType: "pages" })
  return { props: { source } }
}
