import { Divider, SimpleGrid, Container } from "@chakra-ui/react"

import { Link } from "@/components/Link"
import getPages from "@/utils/api/server/getPages"
import getContent from "@/utils/api/server/getContent"
import {
  PageHeader,
  PageHeaderGrid,
  PageHeaderContent,
  PageHeaderBreadcrumbs,
  PageHeaderTitle,
  // PageHeaderDescription,
} from "@/components/PageHeader"
import StoryCard from "@/components/StoryCard"
import SEO from "@/components/SEO"

export default function StoriesPage({ stories, partners }) {
  return (
    <>
      <SEO title="Stories" />
      <PageHeader>
        <PageHeaderGrid bg="rgba(255,255,255,1)" color="gray.200" />
        <PageHeaderContent gridColumn="1 / -1">
          <PageHeaderBreadcrumbs items={[{ label: "Stories" }]} />
          <PageHeaderTitle>{"Stories"}</PageHeaderTitle>
          {/* <PageHeaderDescription>{"Stories"}</PageHeaderDescription> */}
        </PageHeaderContent>
      </PageHeader>
      <Divider borderColor="gray.300" />
      <Container>
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
      </Container>
      <Container pb={20}>
        <SimpleGrid spacing={10} columns={[1, null, 2, null, 3]}>
          {stories.map(({ frontmatter }, i) => {
            return <StoryCard key={i} frontmatter={frontmatter} />
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
  const storiesWithLogos = stories.map((d) => {
    const relevantPartner = partners.find(
      (s) => s.name === d.frontmatter.partner
    )
    const logo = relevantPartner?.logo || ""
    const logoBase = logo.split(".").slice(0, -1).join(".")
    const logoExtension = logo.split(".").slice(-1)[0]
    d.frontmatter.partnerLogo = logo ? `${logoBase}-sm.${logoExtension}` : ""
    return { frontmatter: d.frontmatter }
  })
  return {
    props: {
      stories: storiesWithLogos,
      partners: partners.filter((d) => d.type !== "managing"),
    },
  }
}
