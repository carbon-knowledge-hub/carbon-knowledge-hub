import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Divider,
} from "@chakra-ui/layout"

import BasicCard from "@components/BasicCard"
import { BreadCrumbs, BreadCrumb } from "@components/BreadCrumbs"
import SEO from "@components/SEO"
import { useBasicsStore } from "@utils/store"

export default function BasicsPage() {
  const basics = useBasicsStore((state) => state.basics)
  return (
    <>
      <SEO title="Basics" description="Carbon trading 101 - what is carbon pricing, tax versus market, cap-and-trade scheme versus baseline-and-credit scheme, types of participant, goals and impact, and current trends" />
      <Stack spacing={[10, null, 20]} pb={20}>
        <Stack w="100%" spacing={10} pt={10}>
          <Container>
            <SimpleGrid
              columns={8}
              spacingX={10}
              spacingY={5}
              alignItems="start"
            >
              <SimpleGrid
                columns={7}
                spacingX={10}
                alignItems="center"
                gridColumn={["1 / -1", null, "1 / -1"]}
              >
                <Box gridColumn="span 5" pt={1}>
                  <BreadCrumbs>
                    <BreadCrumb>{"Basics"}</BreadCrumb>
                  </BreadCrumbs>
                </Box>
              </SimpleGrid>
              <Stack spacing={3} gridColumn={["1 / -1"]}>
                <Heading as="h1" w="100%" fontSize="3xl">
                  {"Basics"}
                </Heading>
                <Text variant="lead">
                  {
                    "Take carbon markets 101 and learn the fundamentals behind carbon-pricing systems."
                  }
                </Text>
              </Stack>
            </SimpleGrid>
          </Container>
          <Divider borderColor="gray.200" />
        </Stack>
        <Container>
          <Stack spacing={[10, null, 32]}>
            {basics.map((d, i) => {
              return <BasicCard d={d} i={i} key={d.href} />
            })}
          </Stack>
        </Container>
      </Stack>
    </>
  )
}
