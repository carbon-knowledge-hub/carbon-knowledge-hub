import { forwardRef } from "react"
import {
  Link as ChakraLink,
  LinkBox as ChakraLinkBox,
  LinkOverlay as ChakraLinkOverlay,
  Button,
} from "@chakra-ui/react"
import NextLink from "next/link"

export const LinkBox = ChakraLinkBox
export const LinkOverlay = forwardRef((props, ref) => (
  <ChakraLinkOverlay ref={ref} as={NextLink} scroll={true} {...props} />
))

export const Link = forwardRef(
  ({ children, leftIcon = null, rightIcon = null, ...restProps }, ref) => {
    return (
      <ChakraLink ref={ref} as={NextLink} scroll={true} {...restProps}>
        {leftIcon}
        {children}
        {rightIcon}
      </ChakraLink>
    )
  }
)

export const ButtonLink = forwardRef((props, ref) => {
  return (
    <Button
      ref={ref}
      as={NextLink}
      scroll={true}
      borderRadius="none"
      {...props}
    />
  )
})
