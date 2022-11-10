export default {
  "defaultProps": { "size": "md", "variant": "line", "colorScheme": "brand" },
  "parts": ["root", "tab", "tablist", "tabpanel", "tabpanels", "indicator"],
  "baseStyle": {
    "root": { "display": "block" },
    "tab": {
      "transitionProperty": "common",
      "transitionDuration": "normal",
      "_focusVisible": { "zIndex": 1, "boxShadow": "outline" },
      "_disabled": { "cursor": "not-allowed", "opacity": 0.4 },
    },
    "tablist": { "justifyContent": "flex-start", "flexDirection": "row" },
    "tabpanel": { "p": 4 },
  },
  "variants": {
    "line": {
      "tablist": {
        "borderBottom": "0.125rem solid",
        "borderColor": "transparent",
      },
      "tab": {
        "borderBottom": "0.125rem solid",
        "borderColor": "transparent",
        "marginBottom": "-0.125rem",
        "fontWeight": 500,
        "color": "gray.500",
        "_selected": { "color": "brand.600", "borderColor": "currentColor" },
        "_active": { "bg": "gray.200" },
        "_disabled": { "_active": { "bg": "none" } },
      },
    },
    "unstyled": {},
  },
  "sizes": {
    "sm": { "tab": { "py": 3, "px": 4, "fontSize": "sm" } },
    "md": { "tab": { "fontSize": "md", "py": 4, "px": 5 } },
    "lg": { "tab": { "fontSize": "lg", "py": 5, "px": 5 } },
  },
}
