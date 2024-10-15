import { Box, Stack, Divider, SimpleGrid, Container } from "@chakra-ui/react"

import getPages from "@/utils/api/server/getPages"
import SiteHeader from "@/components/SiteHeader"
import {
  PageHeader,
  PageHeaderGrid,
  PageHeaderContent,
  PageHeaderBreadcrumbs,
  PageHeaderTitle,
} from "@/components/PageHeader"
import StoryCard from "@/components/StoryCard"

export default function StoriesPage({ stories }) {
  return (
    <>
      <SiteHeader />
      <PageHeader>
        <PageHeaderGrid bg="rgba(255,255,255,1)" color="gray.200" />
        <PageHeaderContent gridColumn="1 / -1">
          <PageHeaderBreadcrumbs items={[{ label: "Stories" }]} />
          <PageHeaderTitle>{"Stories"}</PageHeaderTitle>
        </PageHeaderContent>
      </PageHeader>
      <Divider borderColor="gray.300" />
      <Container py={10}>
        <SimpleGrid spacing={10} columns={[1, null, 2, null, 3]}>
          {stories.map(({ frontmatter }) => {
            return <StoryCard frontmatter={frontmatter} />
          })}
        </SimpleGrid>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const stories = await getPages({
    pageType: "stories",
    fields: ["frontmatter"],
  })
  return { props: { stories } }
}
