import { useRef } from "react"
import {
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  HStack,
} from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
// import { VisuallyHidden } from "@chakra-ui/visually-hidden"
import { CopyIcon } from "@components/Icon"
import PrismCodeBlock from "@components/PrismCodeBlock"
import copyToClipboard from "@utils/copyToClipboard"

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
  pre: (props) => {
    const codeRef = useRef()
    const cssClasses = props?.children?.props?.className || ""
    const langClass = cssClasses
      .split(" ")
      .find((s) => s.trim().split("-")[0] === "language")
    const lang = langClass.split("-")[1]

    const handleCopy = () => {
      copyToClipboard(codeRef)
    }

    return (
      <SimpleGrid
        columns={1}
        borderLeft="0.25rem solid"
        borderColor="brand.500"
        pl="0.125rem"
      >
        <Box gridColumn="1 / -1" gridRow="1">
          <PrismCodeBlock ref={codeRef} {...props} />
        </Box>
        <HStack
          gridColumn="1 / -1"
          gridRow="1"
          position="relative"
          alignSelf="start"
          pointerEvents="none"
        >
          <Text
            bg="brand.500"
            color="white"
            pl={4}
            pr={3}
            py={0.5}
            fontSize="xs"
            lineHeight="shorter"
            fontWeight={600}
            fontFamily="mono"
          >
            {lang}
          </Text>
        </HStack>
        <HStack
          gridColumn="1 / -1"
          gridRow="1"
          position="relative"
          justifyContent="flex-end"
          pointerEvents="none"
          color="white"
          pb={8}
        >
          <Stack
            bgGradient="linear(to-r, rgba(26,37,61,0) 0%, rgba(26,37,61,0.9) 30%, rgba(26,37,61,1) 60%)"
            flex="none"
            h="100%"
            pl={20}
            pr={3}
            justifyContent="flex-end"
          >
            <Button
              size="xs"
              minW="none"
              colorScheme="whiteAlpha"
              pointerEvents="all"
              leftIcon={<CopyIcon size="0.875rem" mr={1} />}
              onClick={handleCopy}
            >
              {"Copy"}
            </Button>
          </Stack>
        </HStack>
      </SimpleGrid>
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
