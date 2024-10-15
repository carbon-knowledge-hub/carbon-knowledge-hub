import { useEffect } from "react"
import localFont from "next/font/local"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import componentStyles from "@/styles/components"
import textStyles from "@/styles/textStyles"
import colors from "@/styles/colors"
import DictionaryDrawer from "@/components/DictionaryDrawer"
// import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"

const avenirSans = localFont({
  display: "swap",
  src: [
    {
      path: "./fonts/bb-avenir-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/bb-avenir-demi.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/bb-avenir-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bb-avenir",
  fallback: ["system-ui", "sans-serif"],
})

const theme = extendTheme({
  fonts: {
    body: avenirSans.style.fontFamily,
    heading: avenirSans.style.fontFamily,
  },
  lineHeights: {
    taller: "calc(1em + 0.75rem)",
    tall: "calc(1em + 0.625rem)",
    base: "calc(1em + 0.5rem)",
    short: "calc(1em + 0.375rem)",
    shorter: "calc(1em + 0.25rem)",
  },
  fontSizes: {
    // lg: "1.25rem",
  },
  sizes: {
    container: {
      xl: "94.5rem",
    },
  },
  components: componentStyles,
  textStyles,
  colors: {
    ...colors,
    brand: colors.blue,
  },
})

export default function App({ Component, pageProps, factsheets }) {
  useEffect(() => {
    if (typeof window === "undefined") return undefined
    let timer = undefined
    const handleScroll = () => {
      clearTimeout(timer)
      if (!document.body.classList.contains("disable-hover")) {
        // document.body.classList.add("disable-hover")
        document.body.style.pointerEvents = "none"
      }
      timer = setTimeout(() => {
        // document.body.classList.remove("disable-hover")
        document.body.style.pointerEvents = "all"
      }, 300)
    }
    window.addEventListener("scroll", handleScroll, false)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <DictionaryDrawer />
      <SiteFooter factsheets={factsheets} />
    </ChakraProvider>
  )
}
