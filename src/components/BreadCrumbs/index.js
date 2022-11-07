import { Box, HStack } from "@chakra-ui/layout"

import { ArrowLeftIcon } from "@components/Icon"
import { ButtonLink } from "@components/Link"

export function BreadCrumb({ href, children, isInverted }) {
  return href ? (
    <ButtonLink
      href={href}
      size="sm"
      variant="ghost"
      colorScheme={isInverted ? "whiteAlpha" : "gray"}
      px={2}
      textTransform="capitalize"
    >
      {children}
    </ButtonLink>
  ) : (
    <Box px={2} color="currentcolor">
      {children}
    </Box>
  )
}

export function BreadCrumbs({ children, isInverted }) {
  return (
    <HStack
      spacing={2}
      fontWeight={600}
      color={isInverted ? "brand.200" : "gray.500"}
      fontSize="sm"
      ml={-2}
      divider={
        <Box border={0} p={0}>
          {"/"}
        </Box>
      }
    >
      <ButtonLink
        href="/"
        size="sm"
        variant="ghost"
        colorScheme={isInverted ? "whiteAlpha" : "gray"}
        leftIcon={<ArrowLeftIcon size={5} />}
        px={2}
        textTransform="capitalize"
      >
        {"Home"}
      </ButtonLink>
      {children}
    </HStack>
  )
}
