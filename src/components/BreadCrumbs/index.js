import { Box, HStack } from "@chakra-ui/react"

import { ButtonLink } from "@/components/Link"
import { ArrowLeftIcon } from "@/components/Icon"

export function BreadCrumb({ href, children, isInverted, ...restProps }) {
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

export function BreadCrumbs({ children, isInverted }) {
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
