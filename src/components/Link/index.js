import {
  Link as ChakraLink,
  LinkBox as ChakraLinkBox,
  LinkOverlay as ChakraLinkOverlay,
} from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import NextLink from "next/link"

export const LinkBox = ChakraLinkBox

export const LinkOverlay = ({ href, ...restProps }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLinkOverlay
        _focusVisible={{
          borderRadius: "sm",
          outline: "0.125rem solid",
          outlineColor: "gray.300",
          outlineOffset: "0.125rem",
        }}
        {...restProps}
      />
    </NextLink>
  )
}

export const Link = ({ href, ...restProps }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...restProps} />
    </NextLink>
  )
}

export const ButtonLink = ({ href, ...restProps }) => {
  return (
    <NextLink href={href} passHref>
      <Button as="a" {...restProps} />
    </NextLink>
  )
}
