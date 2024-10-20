import {
  Stack,
  Container,
  SimpleGrid,
  Box,
  Divider,
  Text,
  RadioGroup,
  Radio,
  HStack,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  useBreakpointValue,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react"
import { useCallback, useState } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

import SiteHeader from "@/components/SiteHeader"
import getPages from "@/utils/api/server/getPages"

import {
  PageHeader,
  PageHeaderGrid,
  PageHeaderContent,
  PageHeaderBreadcrumbs,
  PageHeaderTitle,
  PageHeaderDescription,
} from "@/components/PageHeader"
import FactsheetCard from "@/components/FactsheetCard"
import SEO from "@/components/SEO"

export default function FactsheetsPage({ factsheets }) {
  return (
    <>
      <SEO
        title={"Factsheets"}
        description={"Delve into specific carbon-related topics across the voluntary and compliance markets" || ""}
      />
      <SiteHeader />
      <PageHeader>
        <PageHeaderGrid bg="rgba(255,255,255,1)" color="gray.200" />
        <PageHeaderContent gridColumn="1 / -1">
          <PageHeaderBreadcrumbs items={[{ label: "Factsheets" }]} />
          <PageHeaderTitle>{"Factsheets"}</PageHeaderTitle>
          <PageHeaderDescription>
            {
              "Delve into specific carbon-related topics across the voluntary and compliance markets"
            }
          </PageHeaderDescription>
        </PageHeaderContent>
      </PageHeader>
      <Divider borderColor="gray.300" display={["none", null, null, "block"]} />
      <FactsheetsListing factsheets={factsheets} />
    </>
  )
}

export async function getStaticProps() {
  const factsheets = await getPages({
    pageType: "factsheets",
    fields: ["frontmatter"],
  })
  return { props: { factsheets } }
}

function FactsheetsListing({ factsheets }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const marketTypeValue = searchParams.get("marketType") || ""
  const organizationTypeValue = searchParams.get("organizationType") || ""
  const levelValue = searchParams.get("level") || ""

  const filteredFactsheets = factsheets.filter(({ frontmatter }) => {
    const d = frontmatter
    let show = true
    if (marketTypeValue && !d.marketType?.includes(marketTypeValue)) {
      show = false
    }
    if (
      organizationTypeValue &&
      !d.organizationType?.includes(organizationTypeValue)
    ) {
      show = false
    }
    if (levelValue && d.level !== levelValue) {
      show = false
    }
    return show
  })

  const count = filteredFactsheets.length

  return (
    <>
      <Container display={["none", null, null, "block"]}>
        <SimpleGrid columns={8} gridGap={10} alignItems="center" h={20}>
          <Box gridColumn="span 2">{`Showing ${count} factsheet${
            count === 1 ? "" : "s"
          }`}</Box>
          <HStack spacing={3} gridColumn="span 6" px={6}>
            {marketTypeValue && (
              <Tag
                size="lg"
                fontWeight={600}
                borderRadius={0}
                onClick={() => {
                  const params = new URLSearchParams(searchParams.toString())
                  params.delete("marketType")
                  const queryString = params.toString()
                  const opts = { scroll: false }
                  router.push(
                    pathname + (queryString ? "?" + queryString : ""),
                    opts
                  )
                }}
              >
                <TagLabel>{marketTypeValue}</TagLabel>
                <TagCloseButton />
              </Tag>
            )}
            {organizationTypeValue && (
              <Tag
                size="lg"
                fontWeight={600}
                borderRadius={0}
                onClick={() => {
                  const params = new URLSearchParams(searchParams.toString())
                  params.delete("organizationType")
                  const queryString = params.toString()
                  const opts = { scroll: false }
                  router.push(
                    pathname + (queryString ? "?" + queryString : ""),
                    opts
                  )
                }}
              >
                <TagLabel>{organizationTypeValue}</TagLabel>
                <TagCloseButton />
              </Tag>
            )}
            {levelValue && (
              <Tag
                size="lg"
                fontWeight={600}
                borderRadius={0}
                onClick={() => {
                  const params = new URLSearchParams(searchParams.toString())
                  params.delete("level")
                  const queryString = params.toString()
                  const opts = { scroll: false }
                  router.push(
                    pathname + (queryString ? "?" + queryString : ""),
                    opts
                  )
                }}
              >
                <TagLabel>{levelValue}</TagLabel>
                <TagCloseButton />
              </Tag>
            )}
          </HStack>
        </SimpleGrid>
      </Container>
      <Divider borderColor="gray.300" />
      <Container>
        <SimpleGrid columns={8} gridGap={10}>
          <Filters count={count} />
          <Stack
            spacing={10}
            gridColumn={["1 / -1", null, null, "3 / -1"]}
            pt={[0, null, 10]}
            pb={10}
          >
            <Stack spacing={10}>
              {filteredFactsheets.map((factsheet) => {
                return (
                  <FactsheetCard
                    key={factsheet.frontmatter.slug}
                    href={factsheet.frontmatter.slug}
                    frontmatter={factsheet.frontmatter}
                  />
                )
              })}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  )
}

function Filters({ count }) {
  const isMobile = useBreakpointValue({ base: true, lg: false })

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const marketTypeValue = searchParams.get("marketType") || ""
  const organizationTypeValue = searchParams.get("organizationType") || ""
  const levelValue = searchParams.get("level") || ""

  const createQueryString = useCallback(
    (name, value, prevParams = undefined) => {
      const params = new URLSearchParams(
        typeof prevParams === "string" ? prevParams : searchParams.toString()
      )
      if (!value) params.delete(name)
      else params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const handleConfirm = (filters) => {
    const filterNames = ["marketType", "organizationType", "level"]
    const queryString = filters.reduce((acc, cur, i) => {
      return createQueryString(filterNames[i], cur, i ? acc : "")
    }, "")
    router.push(pathname + (queryString ? "?" + queryString : ""), {
      scroll: false,
    })
  }

  return (
    <Box
      gridColumn={["1 / -1", null, null, "1 / span 2"]}
      borderRight={["none", null, null, "solid 0.0625rem"]}
      mx={[-5, null, null, 0]}
      pl={[5, null, null, 0]}
      pr={5}
      borderBottom={["0.0625rem solid", null, null, "none"]}
      borderColor={["gray.300", null, null, "gray.300"]}
    >
      {isMobile ? (
        <HStack spacing={3} justifyContent="flex-end" py={5}>
          <Box flex={1}>{`Showing ${count} factsheet${
            count === 1 ? "" : "s"
          }`}</Box>
          <FilterDrawer
            onConfirm={handleConfirm}
            values={[marketTypeValue, organizationTypeValue, levelValue]}
          />
        </HStack>
      ) : (
        <Box>
          <Stack py={5} spacing={6}>
            <Text variant="metaHeadingSmall">{"Market type"}</Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              gap={2}
              value={marketTypeValue}
              onChange={(val) => {
                const queryString = createQueryString("marketType", val)
                router.push(pathname + (queryString ? "?" + queryString : ""), {
                  scroll: false,
                })
              }}
            >
              <Radio w="100%" value="">
                {"All"}
              </Radio>
              <Radio w="100%" value="Compliance markets">
                {"Compliance markets"}
              </Radio>
              <Radio w="100%" value="Voluntary markets">
                {"Voluntary markets"}
              </Radio>
            </RadioGroup>
          </Stack>
          <Stack py={5} spacing={6}>
            <Text variant="metaHeadingSmall">{"Organization type"}</Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              gap={2}
              value={organizationTypeValue}
              onChange={(val) => {
                const queryString = createQueryString("organizationType", val)
                router.push(pathname + (queryString ? "?" + queryString : ""), {
                  scroll: false,
                })
              }}
            >
              <Radio w="100%" value="">
                {"All"}
              </Radio>
              <Radio w="100%" value="Low-carbon project developers">
                {"Low-carbon project developers"}
              </Radio>
              <Radio w="100%" value="Corporate credit buyers">
                {"Corporate credit buyers"}
              </Radio>
              <Radio w="100%" value="Policymakers">
                {"Policymakers"}
              </Radio>
              <Radio w="100%" value="Compliance market participants">
                {"Compliance market participants"}
              </Radio>
            </RadioGroup>
          </Stack>
          <Stack py={5} spacing={6}>
            <Text variant="metaHeadingSmall">{"Level"}</Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              gap={2}
              value={levelValue}
              onChange={(val) => {
                const queryString = createQueryString("level", val)
                router.push(pathname + (queryString ? "?" + queryString : ""), {
                  scroll: false,
                })
              }}
            >
              <Radio w="100%" value="">
                {"All"}
              </Radio>
              <Radio w="100%" value="basic">
                {"Basic"}
              </Radio>
              <Radio w="100%" value="intermediate">
                {"Intermediate"}
              </Radio>
            </RadioGroup>
          </Stack>
        </Box>
      )}
    </Box>
  )
}

function FilterDrawer({ onConfirm, values = [] }) {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const count = values.filter((d) => !!d).length
  return (
    <>
      <Button onClick={onOpen}>
        {`Filters`}
        {count ? ` (${count})` : ""}
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} size="md">
        <DrawerOverlay />
        {isOpen && (
          <DrawerFilters
            onConfirm={onConfirm}
            values={values}
            onClose={onClose}
          />
        )}
      </Drawer>
    </>
  )
}

function DrawerFilters({ onConfirm, values, onClose }) {
  const [marketTypeValue, setMarketTypeValue] = useState(values[0] || "")
  const [organizationTypeValue, setOrganizationTypeValue] = useState(
    values[1] || ""
  )
  const [levelValue, setLevelValue] = useState(values[2] || "")

  const handleConfirm = () => {
    onConfirm([marketTypeValue, organizationTypeValue, levelValue])
    onClose()
  }

  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerCloseButton />
      </DrawerHeader>
      <DrawerBody>
        <Stack py={5} spacing={6}>
          <Text variant="metaHeadingSmall">{"Market type"}</Text>
          <RadioGroup
            display="flex"
            flexDirection="column"
            gap={2}
            value={marketTypeValue}
            onChange={(val) => setMarketTypeValue(val)}
          >
            <Radio w="100%" value="">
              {"All"}
            </Radio>
            <Radio w="100%" value="Compliance markets">
              {"Compliance markets"}
            </Radio>
            <Radio w="100%" value="Voluntary markets">
              {"Voluntary markets"}
            </Radio>
          </RadioGroup>
        </Stack>
        <Stack py={5} spacing={6}>
          <Text variant="metaHeadingSmall">{"Organization type"}</Text>
          <RadioGroup
            display="flex"
            flexDirection="column"
            gap={2}
            value={organizationTypeValue}
            onChange={(val) => setOrganizationTypeValue(val)}
          >
            <Radio w="100%" value="">
              {"All"}
            </Radio>
            <Radio w="100%" value="Low-carbon project developers">
              {"Low-carbon project developers"}
            </Radio>
            <Radio w="100%" value="Corporate credit buyers">
              {"Corporate credit buyers"}
            </Radio>
            <Radio w="100%" value="Policymakers">
              {"Policymakers"}
            </Radio>
            <Radio w="100%" value="Compliance market participants">
              {"Compliance market participants"}
            </Radio>
          </RadioGroup>
        </Stack>
        <Stack py={5} spacing={6}>
          <Text variant="metaHeadingSmall">{"Level"}</Text>
          <RadioGroup
            display="flex"
            flexDirection="column"
            gap={2}
            value={levelValue}
            onChange={(val) => setLevelValue(val)}
          >
            <Radio w="100%" value="">
              {"All"}
            </Radio>
            <Radio w="100%" value="basic">
              {"Basic"}
            </Radio>
            <Radio w="100%" value="intermediate">
              {"Intermediate"}
            </Radio>
          </RadioGroup>
        </Stack>
      </DrawerBody>
      <DrawerFooter>
        <Button onClick={handleConfirm} w="100%" colorScheme="brand" size="lg">
          {"Apply filters"}
        </Button>
      </DrawerFooter>
    </DrawerContent>
  )
}
