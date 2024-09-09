import {
  Box,
  Heading,
  SimpleGrid,
  Container,
  Stack,
  HStack,
} from "@chakra-ui/layout"
import { Tag } from "@chakra-ui/tag"
// import day from "dayjs"

import ShareButton from "@components/ShareButton"
import { BreadCrumbs, BreadCrumb } from "@components/BreadCrumbs"

export default function CustomPageHeader({ metaData, children }) {
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
                <BreadCrumb
                  href={`/${metaData?.layout?.toLowerCase()}`}
                  isInverted
                >
                  {metaData?.layout}
                </BreadCrumb>
                <BreadCrumb
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {metaData?.title}
                </BreadCrumb>
              </BreadCrumbs>
            </Box>
            <HStack
              gridColumn="span 2"
              justifyContent={["flex-end", null, "flex-start"]}
            >
              <ShareButton />
            </HStack>
          </SimpleGrid>
          <Stack spacing={3} gridColumn={["1 / -1", null, "2 / -3"]}>
            <Heading as="h1" w="100%" fontSize="3xl">
              {children}
            </Heading>
            {(metaData?.level || metaData?.date) && (
              <HStack spacing={4}>
                {metaData.level && (
                  <Tag variant="level" colorScheme="green">
                    {metaData.level}
                  </Tag>
                )}
                {/* {metaData.date && (
                  <Tag variant="date" color="brand.200">
                    {day(metaData.date).format("DD MMM YYYY")}
                  </Tag>
                )} */}
              </HStack>
            )}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
