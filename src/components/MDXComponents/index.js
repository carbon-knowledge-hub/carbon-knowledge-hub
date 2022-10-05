import { Box, Heading, Text, Stack } from "@chakra-ui/layout"

import { Link } from "@components/Link"
import PagesLayout from "@layouts/PagesLayout"
import BasicsLayout from "@layouts/BasicsLayout"
import FactsheetsLayout from "@layouts/FactsheetsLayout"

const components = {
  h1: (props) => {
    return (
      <Heading
        as="h1"
        w="100%"
        maxW="container.sm"
        fontSize="3xl"
        sx={{
          "code": {
            display: "inline-block",
            bg: "brand.100",
            px: "0.25rem",
            fontSize: "0.875em",
          },
        }}
        {...props}
      />
    )
  },
  h2: (props) => {
    return (
      <Heading
        as="h2"
        w="100%"
        maxW="container.sm"
        fontSize="2xl"
        pt="1rem"
        sx={{
          "code": {
            display: "inline-block",
            bg: "brand.100",
            px: "0.25rem",
            fontSize: "0.875em",
          },
        }}
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
        sx={{
          "code": {
            display: "inline-block",
            bg: "brand.100",
            px: "0.25rem",
            fontSize: "0.875em",
          },
        }}
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
        sx={{
          "code": {
            display: "inline-block",
            bg: "brand.100",
            px: "0.25rem",
            fontSize: "0.875em",
          },
        }}
        {...props}
      />
    )
  },
  a: (props) => {
    return <Link {...props} variant="inText" />
  },
  p: (props) => {
    return (
      <Text
        as="p"
        w="100%"
        fontSize="lg"
        lineHeight="tall"
        maxW="container.sm"
        sx={{
          "code": {
            display: "inline-block",
            bg: "brand.100",
            px: "0.25rem",
            fontSize: "0.875em",
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
        fontSize="lg"
        lineHeight="tall"
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
        sx={{
          "> p": { fontFamily: "heading", fontSize: "xl", lineHeight: "base" },
        }}
        {...props}
      />
    )
  },
  wrapper: (props) => {
    const { metaData, ...restProps } = props
    switch (metaData.layout) {
      case "factsheets":
        return <FactsheetsLayout metaData={metaData} {...restProps} />
      case "basics":
        return <BasicsLayout metaData={metaData} {...restProps} />
      default:
        return <PagesLayout metaData={metaData} {...restProps} />
    }
  },
}

export default components
