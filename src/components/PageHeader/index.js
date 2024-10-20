import {
  Stack,
  Box,
  SimpleGrid,
  Text,
  Heading,
  Container,
  HStack,
} from "@chakra-ui/react"

import BBGrid from "@/components/BBGrid"
import { ButtonLink } from "@/components/Link"
import { ArrowLeftIcon } from "@/components/Icon"
// import { BreadCrumbs, BreadCrumb } from "@/components/Breadcrumbs"

function BreadCrumb({ href, children, isInverted, ...restProps }) {
  return href ? (
    <ButtonLink
      href={href}
      size="md"
      variant="ghost"
      colorScheme={isInverted ? "whiteAlpha" : "gray"}
      px={2}
      textTransform="capitalize"
      flex="none"
      {...restProps}
    >
      {children}
    </ButtonLink>
  ) : (
    <Box px={2} color="currentcolor" {...restProps}>
      {children}
    </Box>
  )
}

function BreadCrumbs({ children, isInverted }) {
  return (
    <HStack
      spacing={2}
      fontWeight={600}
      color={isInverted ? "brand.100" : "gray.500"}
      fontSize="md"
      ml={-2}
      divider={
        <Box border={0} p={0}>
          {"/"}
        </Box>
      }
    >
      <ButtonLink
        href="/"
        size="md"
        variant="ghost"
        colorScheme={isInverted ? "whiteAlpha" : "gray"}
        leftIcon={<ArrowLeftIcon size={5} />}
        px={2}
        textTransform="capitalize"
        flex="none"
      >
        {"Home"}
      </ButtonLink>
      {children}
    </HStack>
  )
}

export function PageHeader({ bg = "white", color = "inherit", ...props }) {
  return (
    <Box bg={bg} color={color}>
      <Container position="relative" overflow="hidden" {...props} />
    </Box>
  )
}

export function PageHeaderGrid({
  bg = "brand.1000",
  color = "whiteAlpha.200",
}) {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      _before={{
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: `linear(to-b, ${bg}, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, ${bg})`,
        zIndex: 1,
      }}
      _after={{
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: `linear(to-r, ${bg}, rgba(255,255,255,0) 90%, ${bg})`,
        zIndex: 1,
      }}
    >
      <Box
        position="absolute"
        top="50%"
        left={0}
        right={0}
        transform="translateY(-50%)"
      >
        <BBGrid
          color={color}
          position="relative"
          rows={8}
          _before={{
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgGradient: `linear(to-b, ${bg}, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, ${bg})`,
            zIndex: 1,
          }}
          _after={{
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgGradient: `linear(to-r, ${bg}, rgba(255,255,255,0) 90%, ${bg})`,
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  )
}

export function PageHeaderContent(props) {
  return (
    <SimpleGrid columns={8} gridGap={10} position="relative" zIndex={1}>
      <Stack
        position="relative"
        spacing={5}
        py={10}
        gridColumn="2 / -2"
        {...props}
      />
    </SimpleGrid>
  )
}

export function PageHeaderBreadcrumbs({ isInverted, items = [] }) {
  return (
    <Box>
      <BreadCrumbs isInverted={isInverted}>
        {items.map((item, i) => {
          return (
            <BreadCrumb
              key={item.key || item.href || item.label || i}
              isInverted={isInverted}
              href={item.href}
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {item.label || ""}
            </BreadCrumb>
          )
        })}
      </BreadCrumbs>
    </Box>
  )
}

export function PageHeaderTitle(props) {
  return <Heading variant="pageTitle" {...props} />
}

export function PageHeaderDescription(props) {
  return <Text variant="pageDescription" maxW="45rem" {...props} />
}

export function PageHeaderMetadata(props) {
  return <Box {...props} />
}
