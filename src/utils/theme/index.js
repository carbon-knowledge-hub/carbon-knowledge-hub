import * as foundations from "./foundations"
import * as components from "./components"

export default {
  direction: "ltr",
  config: {
    cssVarPrefix: "ch",
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        fontFamily: "body",
        bg: "white",
        color: "gray.900",
      },
    },
  },
  ...foundations,
  components: { ...components },
}
