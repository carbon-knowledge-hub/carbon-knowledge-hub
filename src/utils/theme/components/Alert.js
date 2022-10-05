export default {
  "defaultProps": {
    "variant": "subtle",
    "colorScheme": "action",
    "size": "md",
  },
  "parts": ["title", "description", "container", "icon", "spinner"],
  "baseStyle": {
    "container": {
      "px": 4,
      "py": 3,
      maxW: "container.sm",
      alignItems: "flex-start",
    },
    "title": { "fontWeight": "bold", "lineHeight": 6, "marginEnd": 2 },
    "description": { "lineHeight": 6 },
    "icon": { "flexShrink": 0, "marginEnd": 3, "w": 5, "h": 6, mt: 1 },
    "spinner": { "flexShrink": 0, "marginEnd": 3, "w": 5, "h": 5 },
  },
  "variants": {
    "subtle": {
      "container": {
        "bg": "brand.100",
        color: "brand.600",
        "a": { color: "gray.900" },
      },
      "icon": { "color": "brand.500" },
      "spinner": { "color": "brand.500" },
    },
    "left-accent": {
      "container": {
        "paddingStart": 3,
        "borderStartWidth": "4px",
        "borderStartColor": "brand.500",
        "bg": "action",
      },
      "icon": { "color": "brand.500" },
      "spinner": { "color": "brand.500" },
    },
    "top-accent": {
      "container": {
        "pt": 2,
        "borderTopWidth": "0.25rem",
        "borderTopColor": "brand.500",
        "bg": "action",
      },
      "icon": { "color": "brand.500" },
      "spinner": { "color": "brand.500" },
    },
    "solid": { "container": { "bg": "brand.500", "color": "white" } },
  },
  "sizes": {},
}
