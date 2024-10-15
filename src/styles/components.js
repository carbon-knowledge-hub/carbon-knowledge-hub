// import { theme } from "@chakra-ui/react"
// import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"

import textStyles from "./textStyles"

// console.groupCollapsed("Theme")
// console.log(theme)
// console.groupEnd()

// const featuredItemHelpers = createMultiStyleConfigHelpers([
//   "featuredItem",
//   "featuredItemGrid",
//   "featuredItemImage",
//   "featuredItemContent",
// ])

// const FeaturedItem = featuredItemHelpers.defineMultiStyleConfig({
//   baseStyle: {
//     featuredItem: { border: "1px solid #000" },
//   },
//   sizes: {},
//   variants: {
//     ltr: {
//       featuredItem: { border: "1px solid #06F" },
//     },
//     rtl: {
//       featuredItem: { border: "1px solid #F05" },
//     },
//   },
//   defaultProps: { variant: "ltr" },
// })

export default {
  Heading: {
    variants: textStyles,
  },
  Text: {
    variants: textStyles,
  },
  Container: {
    baseStyle: { px: [5, null, null, 10], maxW: "container.xl" },
  },
  Divider: {
    baseStyle: { opacity: 1, borderColor: "gray.200" },
  },
  Button: {
    baseStyle: { borderRadius: "sm" },
  },
  Link: {
    baseStyle: {
      display: "inline-flex",
      gap: 3,
      justifyContent: "space-between",
      letterSpacing: "-0.01em",
      svg: { flex: "none" },
    },
    variants: {
      standalone: {
        color: "primary.500",
        fontWeight: 600,
        fontSize: "xl",
        gap: 3,
      },
      // navLink: {
      //   fontWeight: 600,
      //   fontSize: "md",
      //   _hover: { color: "brand.500", bg: "whiteAlpha.100" },
      //   _focus: { color: "brand.600", bg: "whiteAlpha.100" },
      //   _focusVisible: {
      //     outline: "0.125rem solid",
      //     outlineColor: "currentcolor",
      //     outlineOffset: "0.125rem",
      //   },
      // },
      footerLink: {
        color: "white",
        fontWeight: 700,
        fontSize: "2xl",
        gap: 3,
      },
      inText: {
        color: "primary.500",
        fontWeight: 600,
        _hover: { textDecoration: "underline" },
        _focus: { textDecoration: "underline" },
        _focusVisible: {
          outline: "0.125rem solid",
          outlineColor: "currentcolor",
          outlineOffset: "0.125rem",
        },
      },
    },
  },
  // FeaturedItem,
}
