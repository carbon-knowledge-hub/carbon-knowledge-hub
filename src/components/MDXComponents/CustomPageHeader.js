import { Box, Heading, SimpleGrid, Container } from "@chakra-ui/layout"
import { Tag } from "@chakra-ui/tag"

import ShareButton from "@components/ShareButton"
import { BreadCrumbs, BreadCrumb } from "@components/BreadCrumbs"

export default function CustomPageHeader({ metaData, children }) {
  // console.log("Custom header metaData: ", metaData)
  return (
    <Box
      className="site-header"
      bg="brand.800"
      color="white"
      gridColumn={["1 / -1", null, "1 / -1"]}
      mx={[-4, -5, null, -10]}
      py={10}
    >
      <Container>
        <SimpleGrid columns={8} spacingX={10} spacingY={5} alignItems="start">
          <SimpleGrid
            columns={7}
            spacingX={10}
            alignItems="center"
            gridColumn={["1 / -1", null, "2 / -1"]}
          >
            <Box gridColumn="span 5">
              <BreadCrumbs isInverted>
                <BreadCrumb href={`/${metaData?.layout}`} isInverted>
                  {metaData?.layout}
                </BreadCrumb>
                <BreadCrumb>{metaData?.title}</BreadCrumb>
              </BreadCrumbs>
            </Box>
            <Box gridColumn="span 2">
              <ShareButton />
            </Box>
          </SimpleGrid>
          <Heading
            as="h1"
            w="100%"
            fontSize="3xl"
            gridColumn={["1 / -1", null, "2 / -3"]}
          >
            {children}
            <Box display="inline-block" ml={3}>
              <Tag variant="level" colorScheme="green">
                {metaData?.level}
              </Tag>
            </Box>
          </Heading>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
