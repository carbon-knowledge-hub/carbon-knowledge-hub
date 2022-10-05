import { ChakraProvider } from "@chakra-ui/provider"
import { MDXProvider } from "@mdx-js/react"

import components from "@components/MDXComponents"
import theme from "@utils/theme"

export default function AppWrapper({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  )
}
