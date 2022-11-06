export default {
  "defaultProps": {
    "size": "md",
    "variant": "outline",
    "colorScheme": "gray",
  },
  "parts": ["container", "label", "closeButton"],
  "baseStyle": {
    "container": {
      "fontWeight": "500",
      "lineHeight": "shorter",
      "outline": 0,
      "borderRadius": "sm",
      "_focusVisible": { "boxShadow": "outline" },
    },
    "label": { "lineHeight": "short", "overflow": "visible" },
    "closeButton": {
      "fontSize": "18px",
      "w": 5,
      "h": 5,
      "transitionProperty": "common",
      "transitionDuration": "normal",
      "borderRadius": "full",
      "marginStart": "0.375rem",
      "marginEnd": "-1",
      "opacity": 0.5,
      "_disabled": { "opacity": 0.4 },
      "_focusVisible": { "boxShadow": "outline", "bg": "rgba(0, 0, 0, 0.14)" },
      "_hover": { "opacity": 0.8 },
      "_active": { "opacity": 1 },
    },
  },
  "variants": {
    "subtle": ({ colorScheme }) => ({
      "container": {
        "bg": `${colorScheme}.100`,
        "color": `${colorScheme}.800`,
      },
    }),
    "solid": ({ colorScheme }) => ({
      "container": { "bg": `${colorScheme}.500`, "color": "white" },
    }),
    "outline": ({ colorScheme }) => ({
      "container": {
        border: "0.0625rem solid",
        borderColor: `${colorScheme}.200`,
      },
    }),
    "level": ({ colorScheme = "gray", fontSize="sm" }) => ({
      "container": {
        borderRadius: "full",
        fontFamily: "mono",
        fontSize: fontSize,
        lineHeight: "short",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.0625rem",
        color: `${colorScheme}.500`,
        border: "0.0625rem solid",
        borderColor: `${colorScheme}.500`,
        verticalAlign: "middle",
      },
    }),
  },
  "sizes": {
    "sm": {
      "container": {
        "minH": 6,
        "minW": 6,
        "fontSize": "sm",
        "px": 2,
      },
      "closeButton": { "marginEnd": "-2px", "marginStart": "0.35rem" },
    },
    "md": {
      "container": {
        "minH": 8,
        "minW": 8,
        "fontSize": "md",
        "px": 3,
      },
    },
    "lg": {
      "container": { "minH": 10, "minW": 10, "fontSize": "md", "px": 4 },
    },
  },
}
