import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Container,
  Divider,
} from "@chakra-ui/layout"
import { csvParse } from "d3-dsv"
import { readFile } from "fs/promises"
import { join } from "path"
import uniqBy from "lodash/uniqBy"

import { DownloadIcon } from "@components/Icon"
import { ButtonLink } from "@components/Link"
import Image from "@components/Image"
import PartnersList from "@components/PartnersList"
import SEO from "@components/SEO"
import { PageHeader, PageTitle } from "@components/PageHeader"

const StoryCard = ({
  partner_name,
  // partner_type,
  partner_logo,
  story_title,
  story_description,
  story_url,
}) => {
  const isLocalPdf =
    !story_url.includes("https://") && story_url.includes(".pdf")
  return (
    <Box
      pt={6}
      pb={12}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      position="relative"
      transition="box-shadow 0.25s"
      _hover={{
        boxShadow: "lg",
      }}
      _active={{
        boxShadow: "sm",
      }}
    >
      <Stack w="100%" h="100%" spacing={10}>
        <Box alignSelf="flex-end" px={5} maxW="12rem">
          <Image
            src={partner_logo}
            ratio={0}
            subFolder="partners"
            type="partnerLogo"
          />
        </Box>
        <Stack spacing={10} px={5}>
          <Text variant="metaText" color="red.500">
            {partner_name}
          </Text>
          <Stack spacing={5}>
            <Heading>{story_title}</Heading>
            <Text>{story_description}</Text>
          </Stack>
          <ButtonLink
            href={isLocalPdf ? `/pdf/stories/${story_url}` : story_url}
            alignSelf="flex-start"
            leftIcon={<DownloadIcon size="1.25rem" />}
            variant="subtle"
            colorScheme="brand"
            target="_blank"
          >
            {"Download as pdf"}
          </ButtonLink>
        </Stack>
        {/* <Divider borderColor="gray.300" /> */}
        {/* <Stack px={5}>
          <Text variant="metaText" fontSize="xs" color="gray.500">
            {"Related factsheets"}
          </Text>
        </Stack> */}
      </Stack>
    </Box>
  )
}

function CustomComponent() {
  return <Box>{"This"}</Box>
}

CustomComponent.displayName = "Custom component"

export default function StoriesPage({ stories }) {
  const uniqPartners = uniqBy(stories, (o) => o.partner_logo)
  return (
    <>
      <SEO
        title="Stories"
        description="Interviews, thought pieces, articles and reports by other companies and organizations already involved in carbon markets."
      />
      <Stack spacing={[5, null, 10]}>
        <PageHeader bc={[{ label: "Stories" }]}>
          <PageTitle>{"Stories"}</PageTitle>
          {/* <PageDescription>{"Something goes here."}</PageDescription> */}
          <PartnersList
            partners={uniqPartners}
            columns={[2, 3, 4, null, 5]}
            spacingY={10}
            spacingX={[10, null, 12, null, 20]}
            pt={10}
          />
        </PageHeader>

        <Box w="100%" bg="gray.50">
          <Divider borderColor="gray.100" />
          <Container py={10}>
            <SimpleGrid columns={8}>
              <Stack spacing={6} gridColumn={["1 / -1", null, "2 / -2"]}>
                <Text fontWeight={600} color="gray.600">{`${stories.length} ${
                  stories.length === 1 ? "story" : "stories"
                }`}</Text>
                <SimpleGrid columns={[1, null, 2]} gridGap={10}>
                  {stories.map((story) => {
                    const key = story.story_title
                      .toLowerCase()
                      .split(" ")
                      .join("-")
                    return <StoryCard key={key} {...story} />
                  })}
                </SimpleGrid>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
      </Stack>
    </>
  )
}

export async function getStaticProps(ctx) {
  const storiesRaw = await readFile(
    join(process.cwd(), "/public/partners.csv"),
    "utf8"
  )
  const stories = csvParse(storiesRaw).filter(
    (d) => d.story_title && d.story_url
  )
  return {
    props: { stories },
  }
}
