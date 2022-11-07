import { Box, Center, Heading, Text, Stack } from "@chakra-ui/layout"
import { createContext, useContext } from "react"
import { useRouter } from "next/router"

import { Link } from "@components/Link"
import PagesLayout from "@layouts/PagesLayout"
import BasicsLayout from "@layouts/BasicsLayout"
import FactsheetsLayout from "@layouts/FactsheetsLayout"
import KeyMessage from "@components/KeyMessage"
import Image from "@components/Image"
import CustomPageHeader from "@components/MDXComponents/CustomPageHeader"
import DefaultPageHeader from "@components/MDXComponents/DefaultPageHeader"
import LinkItem from "@components/LinkItem"
import FAQSection from "@components/FAQSection"
import PartnersList from "@components/PartnersList"
import {
  Questions,
  Question,
  QuestionWrapper,
  Answer,
} from "@components/Question"

const MetaDataContext = createContext({})

const useMetaData = () => {
  return useContext(MetaDataContext)
}

function CustomLinkComponent(props) {
  const { pathname } = useRouter()
  const isLinkItem = pathname === "/links" && props.href.includes("https://")
  return isLinkItem ? (
    <LinkItem {...props} />
  ) : (
    <Link {...props} variant="inText" />
  )
}

const components = {
  h1: (props) => {
    const metaData = useMetaData()
    switch (metaData?.layout) {
      case "factsheets":
        return <CustomPageHeader metaData={metaData} {...props} />
      case "basics":
        return <CustomPageHeader metaData={metaData} {...props} />
      default:
        return <DefaultPageHeader metaData={metaData} {...props} />
    }
  },
  h2: (props) => {
    const { children, ...restProps } = props
    const content = children.map
      ? children.map((d) => d?.props?.children || d).join("")
      : children || ""
    const slug = content.split(" ").join("-").split(".").join("").toLowerCase()
    return (
      <Heading
        as="h2"
        w="100%"
        maxW="container.sm"
        fontSize="2xl"
        pt="1rem"
        position="relative"
        gridColumn={["1 / -1", null, "2 / -3"]}
        {...restProps}
      >
        <Center
          as="a"
          id={slug}
          href={`#${slug}`}
          position="absolute"
          top="1rem"
          right="100%"
          w={["1rem", null, "2.375rem"]}
          h={["2.375rem", null, "2.375rem"]}
          fontSize={["md", null, "2xl"]}
          color="gray.500"
          opacity={0}
          _hover={{ opacity: 1 }}
          _focusVisible={{ opacity: 1 }}
          aria-label={`${content} anchor`}
        >
          {"#"}
        </Center>
        {children}
      </Heading>
    )
  },
  h3: (props) => {
    return (
      <Heading
        as="h3"
        w="100%"
        maxW="container.sm"
        fontSize="xl"
        pt="1rem"
        gridColumn={["1 / -1", null, "2 / -3"]}
        {...props}
      />
    )
  },
  h3: (props) => {
    return (
      <Heading
        as="h3"
        w="100%"
        maxW="container.sm"
        fontSize="xl"
        pt="1rem"
        gridColumn={["1 / -1", null, "2 / -3"]}
        {...props}
      />
    )
  },
  a: (props) => {
    if (!props.href) return <a {...props} />
    return <CustomLinkComponent {...props} />
  },
  p: (props) => {
    return (
      <Text
        as="p"
        w="100%"
        fontSize={["md", null, "lg"]}
        lineHeight="tall"
        maxW="container.sm"
        gridColumn={["1 / -1", null, "2 / -3"]}
        sx={{
          ".dictionary-word": {
            color: "brand.700",
            bg: "brand.100",
            fontWeight: "600",
            p: "0.125rem",
            borderRadius: "0.125rem",
          },
        }}
        {...props}
      />
    )
  },
  ul: (props) => {
    return (
      <Stack
        as="ul"
        spacing={2}
        w="100%"
        maxW="container.sm"
        pl={6}
        fontSize={["md", null, "lg"]}
        lineHeight="tall"
        gridColumn={["1 / -1", null, "2 / -3"]}
        sx={{
          li: { a: { color: "brand.500" } },
        }}
        {...props}
      />
    )
  },
  ol: (props) => {
    return (
      <Stack
        as="ol"
        spacing={5}
        w="100%"
        maxW="container.sm"
        pl={6}
        fontSize="lg"
        lineHeight="tall"
        gridColumn={["1 / -1", null, "2 / -3"]}
        {...props}
      />
    )
  },
  blockquote: (props) => {
    return (
      <Box
        as="blockquote"
        fontWeight={700}
        borderLeft="0.5rem solid"
        borderColor="brand.500"
        pl={5}
        py={2}
        w="100%"
        maxW="container.sm"
        gridColumn={["1 / -1", null, "2 / -3"]}
        sx={{
          "> p": { fontFamily: "heading", fontSize: "xl", lineHeight: "base" },
        }}
        {...props}
      />
    )
  },
  dl: (props) => {
    return <Box as="dl" gridColumn={["1 / -1", null, "2 / -3"]} {...props} />
  },
  dt: (props) => {
    return (
      <Text
        as="dt"
        display="inline"
        fontSize={["md", null, "lg"]}
        fontWeight={600}
        sx={{ "a": { color: "red.500" } }}
        {...props}
      />
    )
  },
  dd: (props) => {
    const { children, ...restProps } = props
    return (
      <Text
        as="dd"
        display="inline"
        fontSize={["md", null, "lg"]}
        color="gray.700"
        {...restProps}
      >
        {" — "}
        {children}
      </Text>
    )
  },
  wrapper: (props) => {
    const { metaData, ...restProps } = props
    const { layout } = metaData
    switch (layout) {
      case "factsheets":
        return (
          <MetaDataContext.Provider value={metaData}>
            <FactsheetsLayout metaData={metaData} {...restProps} />
          </MetaDataContext.Provider>
        )
      case "basics":
        return (
          <MetaDataContext.Provider value={metaData}>
            <BasicsLayout metaData={metaData} {...restProps} />
          </MetaDataContext.Provider>
        )
      default:
        return (
          <MetaDataContext.Provider value={metaData}>
            <PagesLayout metaData={metaData} {...restProps} />
          </MetaDataContext.Provider>
        )
    }
  },
  KeyMessage: (props) => (
    <Box gridColumn={["1 / -1", null, "2 / -3"]}>
      <KeyMessage {...props} />
    </Box>
  ),
  Image: (props) => (
    <Box gridColumn={["1 / -1", null, "2 / -3"]}>
      <Image {...props} />
    </Box>
  ),
  FAQSection: (props) => (
    <Box gridColumn={["1 / -1", null, "2 / -3"]}>
      <FAQSection {...props} />
    </Box>
  ),
  Questions: (props) => (
    <Box gridColumn={["1 / -1", null, "2 / -3"]}>
      <Questions {...props} />
    </Box>
  ),
  QuestionWrapper: (props) => <QuestionWrapper {...props} />,
  Question: (props) => <Question {...props} />,
  Answer: (props) => <Answer {...props} />,
  PartnersList: (props) => (
    <Box gridColumn={["1 / -1", null, "2 / -3"]}>
      <PartnersList {...props} />
    </Box>
  ),
}

export default components
