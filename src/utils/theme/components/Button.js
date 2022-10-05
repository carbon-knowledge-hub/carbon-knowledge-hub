function getColorVariant(variant = "solid", colorScheme = "brand") {
  const isGray = colorScheme === "gray"
  const isTransparent = ["blackAlpha", "whiteAlpha"].includes(colorScheme)
  const bgShadeMapping = {
    ghost: [50, 100],
    solid: isGray
      ? [50, 100, 200]
      : isTransparent
      ? [200, 300, 400]
      : [500, 600, 700],
    outline: [50, 100],
  }
  const colorMapping = {
    ghost: isGray
      ? `gray.800`
      : isTransparent
      ? "currentcolor"
      : `${colorScheme}.500`,
    solid: isGray ? `gray.800` : isTransparent ? "currentcolor" : `white`,
    outline: isGray
      ? `gray.800`
      : isTransparent
      ? "currentcolor"
      : `${colorScheme}.500`,
  }
  const outlineMapping = {
    ghost: `${colorScheme}.200`,
    solid: `${colorScheme}.300`,
    outline: isGray ? `${colorScheme}.200` : `${colorScheme}.300`,
  }
  return {
    bg: bgShadeMapping[variant].map((shade) => `${colorScheme}.${shade}`),
    color: colorMapping[variant],
    outline: outlineMapping[variant],
    border: isGray ? `${colorScheme}.300` : `${colorScheme}.500`,
  }
}

export default {
  "defaultProps": { "variant": "solid", "size": "md", "colorScheme": "brand" },
  "baseStyle": {
    "lineHeight": "1.2",
    "borderRadius": "sm",
    "fontWeight": "semibold",
    "transitionProperty": "common",
    "transitionDuration": "normal",
    "_disabled": {
      "opacity": 0.4,
      "cursor": "not-allowed",
      "boxShadow": "none",
    },
    "_hover": { "_disabled": { "bg": "initial" } },
  },
  "variants": {
    "ghost": ({ colorScheme }) => {
      const colorConfig = getColorVariant("ghost", colorScheme)
      return {
        "color": colorConfig.color,
        "bg": "transparent",
        "_hover": { "bg": colorConfig.bg[0] },
        _focusVisible: {
          outline: "0.125rem solid",
          outlineColor: colorConfig.outline,
          outlineOffset: "0.125rem",
        },
        "_active": { "bg": colorConfig.bg[1] },
      }
    },
    "outline": ({ colorScheme }) => {
      const colorConfig = getColorVariant("outline", colorScheme)
      return {
        "border": "0.125rem solid",
        "borderColor": colorConfig.border,
        ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
          "marginEnd": "-1px",
        },
        "color": colorConfig.color,
        "bg": "transparent",
        "_hover": { "bg": colorConfig.bg[0] },
        _focusVisible: {
          outline: "0.125rem solid",
          outlineColor: colorConfig.outline,
          outlineOffset: "0.125rem",
        },
        "_active": { "bg": colorConfig.bg[1] },
      }
    },
    "solid": ({ colorScheme }) => {
      const colorConfig = getColorVariant("solid", colorScheme)
      return {
        "bg": colorConfig.bg[0],
        "color": colorConfig.color,
        "_hover": {
          "bg": colorConfig.bg[1],
          "_disabled": { "bg": colorConfig.bg[0] },
        },
        _focusVisible: {
          outline: "0.125rem solid",
          outlineColor: colorConfig.outline,
          outlineOffset: "0.125rem",
        },
        "_active": { "bg": colorConfig.bg[2] },
      }
    },
    "link": {
      "padding": 0,
      "height": "auto",
      "lineHeight": "normal",
      "verticalAlign": "baseline",
      "color": "action.500",
      "_hover": {
        "textDecoration": "underline",
        "_disabled": { "textDecoration": "none" },
      },
      "_active": { "color": "action.700" },
    },
    "unstyled": {
      "bg": "none",
      "color": "inherit",
      "display": "inline",
      "lineHeight": "inherit",
      "m": 0,
      "p": 0,
    },
  },
  "sizes": {
    "lg": { "h": 12, "minW": 12, "fontSize": "lg", "px": 6 },
    "md": { "h": 10, "minW": 10, "fontSize": "md", "px": 4 },
    "sm": { "h": 8, "minW": 8, "fontSize": "sm", "px": 3 },
    "xs": { "h": 6, "minW": 6, "fontSize": "xs", "px": 2 },
  },
}
