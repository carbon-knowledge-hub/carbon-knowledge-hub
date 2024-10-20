import { Heading, Text, Box, Stack, SimpleGrid } from "@chakra-ui/react"
import { useRouter } from "next/router"

import { usePartnersContext } from "@/utils/usePartnersContext"
import { useDictionaryStore } from "@/utils/useDictionaryDrawer"
import KeyMessage from "@/components/KeyMessage"
import { Link } from "@/components/Link"
import LinkItem from "@/components/LinkItem"
import BubbleChart from "@/components/BubbleChart"
import ChartWrapper from "@/components/ChartWrapper"
import OffsetPrices2024Chart from "@/components/Charts/OffsetPrices2024Chart"
import VoluntaryMarketForecastCharts from "@/components/Charts/VoluntaryMarketForecastCharts"
import Image from "@/components/Image"

function CustomLinkComponent(props) {
  const { pathname } = useRouter()
  const isLinkItem = pathname === "/links" && props.href.includes("https://")
  return isLinkItem ? (
    <LinkItem {...props} />
  ) : (
    <Link {...props} variant="inText" />
  )
}

export default {
  h1: (props) => <Heading as="h1" variant="factsheetTitle" pb={6} pt={6} {...props} {...props} />,
  h2: (props) => (
    <Heading as="h2" pt={4} variant="factsheetHeading2" {...props} />
  ),
  h3: (props) => (
    <Heading as="h3" pt={4} variant="factsheetHeading3" {...props} />
  ),
  h4: (props) => (
    <Heading as="h4" pt={4} variant="factsheetHeading4" {...props} />
  ),
  h5: (props) => (
    <Heading as="h5" pt={4} variant="factsheetHeading5" {...props} />
  ),
  h6: (props) => (
    <Heading as="h6" pt={4} variant="factsheetHeading6" {...props} />
  ),
  p: (props) => <Text as="p" variant="bodyLarge" {...props} />,
  Image,
  img: (props) => {
    return null
  },
  a: (props) => {
    if (!props.href)
      return (
        <a
          fontSize="xl"
          color="blue.500"
          textDecoration="underline"
          _hover={{ color: "blue.600" }}
          _focus={{ color: "blue.600" }}
          _active={{ color: "blue.600" }}
          {...props}
        />
      )
    return <CustomLinkComponent {...props} />
  },
  ul: (props) => {
    return (
      <Stack
        as="ul"
        spacing={6}
        w="100%"
        pl={6}
        fontSize={["xl", null, "2xl"]}
        lineHeight="taller"
        letterSpacing= "0.01em"
        gridColumn={["1 / -1", null, "2 / -3"]}
        sx={{
          li: { a: { color: "brand.500", fontWeight: 600 } },
        }}
        {...props}
      />
    )
  },
  ol: (props) => {
    return (
      <Stack
        as="ol"
        spacing={6}
        w="100%"
        maxW="container.sm"
        pl={6}
        fontSize={["xl", null, "2xl"]}
        lineHeight="taller"
        letterSpacing= "0.01em"
        gridColumn={["1 / -1", null, "2 / -3"]}
        sx={{
          li: { a: { color: "brand.500", fontWeight: 600 } },
        }}
        {...props}
      />
    )
  },
  Dictionary: (props) => {
    const onOpen = useDictionaryStore((state) => state.onOpen)
    const terms = useDictionaryStore((state) => state.terms)
    const handleClick = () => {
      const definition = `${props.children}`.trim()
      const relevantTerm = terms.find((s) => s.searchTerms.includes(definition))
      onOpen(relevantTerm?.definition || "", relevantTerm?.description || "")
    }
    return (
      <Text
        tabIndex={0}
        as="span"
        bg="brand.100"
        color="brand.500"
        fontWeight={600}
        px={1}
        cursor="pointer"
        _hover={{ textDecoration: "underline" }}
        _focusVisible={{
          outline: "0.125rem solid",
          outlineColor: "brand.500",
          outlineOffset: "0.125rem",
        }}
        onClick={handleClick}
        {...props}
      />
    )
  },
  KeyMessage: (props) => {
    return (
      <Box gridColumn={["1 / -1", null, "2 / -2", "2 / -3"]}>
        <KeyMessage {...props} />
      </Box>
    )
  },
  BubbleChart: () => {
    return (
      <Box gridColumn="1 / -1">
        <BubbleChart />
      </Box>
    )
  },
  ComplianceMarketForecastChart: () => {
    return (
      <Box gridColumn={["1 / -1", null, "2 / -2"]}>
        <ChartWrapper
          chartType="line"
          src="compliance-market-forecast.txt"
          ratio={2}
          chartPadding={{ bottom: 32 }}
          showLegend
        />
      </Box>
    )
  },
  GlobalValueChart: () => {
    return (
      <Box gridColumn={["1 / -1", null, "2 / -2"]}>
        <ChartWrapper
          chartType="bar"
          src="global-value.txt"
          orientation="horizontal"
          ratio={2}
          chartPadding={{ bottom: 32 }}
          showLegend
        />
      </Box>
    )
  },
  OffsetPrices2024Chart: () => {
    return (
      <Box gridColumn="1 / -1">
        <OffsetPrices2024Chart />
      </Box>
    )
  },
  VoluntaryMarketForecastChart: () => {
    return (
      <Box gridColumn="1 / -1">
        <VoluntaryMarketForecastCharts />
      </Box>
    )
  },
  MetaHeading: (props) => {
    return <Text variant="metaHeading" color="gray.500" mb={-4} {...props} />
  },
  PartnersList: () => {
    return null
  },
  PartnersSection: (props) => {
    const partners = usePartnersContext(props.type || "")
    return (
      <SimpleGrid as="section" columns={[2, 4, null, null, 5]} gridGap={10}>
        {partners.map((partner, i) => {
          const srcArray = partner.logo.split(".")
          const ext = srcArray.slice(-1)[0]
          return (
            <img
              key={`${partner.name} - ${i}`}
              alt={partner.name}
              src={`/images/partners/${srcArray
                .slice(0, -1)
                .join(".")}-md.${ext}`}
            />
          )
        })}
      </SimpleGrid>
    )
  },
}
