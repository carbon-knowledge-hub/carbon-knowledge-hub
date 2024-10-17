import { Divider, SimpleGrid, Container } from "@chakra-ui/react"

import { Link } from "@/components/Link"
import getPages from "@/utils/api/server/getPages"
import getContent from "@/utils/api/server/getContent"
import SiteHeader from "@/components/SiteHeader"
import {
  PageHeader,
  PageHeaderGrid,
  PageHeaderContent,
  PageHeaderBreadcrumbs,
  PageHeaderTitle,
} from "@/components/PageHeader"
import StoryCard from "@/components/StoryCard"

export default function StoriesPage({ stories, partners }) {
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
        <SimpleGrid
          as="section"
          columns={[2, 4, 6, 8]}
          gridGap={10}
          px={10}
          py={20}
        >
          {partners.map((partner, i) => {
            const srcArray = partner.logo.split(".")
            const ext = srcArray.slice(-1)[0]
            return (
              <Link href="/partners" key={i}>
                <img
                  alt={partner.name}
                  src={`/images/partners/${srcArray
                    .slice(0, -1)
                    .join(".")}-md.${ext}`}
                />
              </Link>
            )
          })}
        </SimpleGrid>
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
  const partners = await getContent("partners.txt", "json")
  return {
    props: { stories, partners: partners.filter((d) => d.type !== "managing") },
  }
}
