export default {
  "defaultProps": { "size": "md", "colorScheme": "action" },
  "parts": ["control", "icon", "container", "label"],
  "baseStyle": {
    "icon": {
      "transitionProperty": "transform",
      "transitionDuration": "normal",
    },
    "container": { "_disabled": { "cursor": "not-allowed" } },
    "control": {
      "w": "100%",
      "transitionProperty": "box-shadow",
      "transitionDuration": "normal",
      "border": "2px solid",
      "borderRadius": "sm",
      "borderColor": "inherit",
      "color": "white",
      "_checked": {
        "bg": "brand.500",
        "borderColor": "brand.500",
        "color": "white",
        "_hover": { "bg": "brand.600", "borderColor": "brand.600" },
        "_disabled": {
          "borderColor": "gray.200",
          "bg": "gray.200",
          "color": "gray.500",
        },
      },
      "_indeterminate": {
        "bg": "brand.500",
        "borderColor": "brand.500",
        "color": "white",
      },
      "_disabled": { "bg": "gray.100", "borderColor": "gray.100" },
      "_focusVisible": { "boxShadow": "outline" },
      "_invalid": { "borderColor": "red.500" },
    },
    "label": { "userSelect": "none", "_disabled": { "opacity": 0.4 } },
  },
  "variants": {},
  "sizes": {
    "sm": {
      "control": { "h": 3, "w": 3 },
      "label": { "fontSize": "sm" },
      "icon": { "fontSize": "0.45rem" },
    },
    "md": {
      "control": { "w": 4, "h": 4 },
      "label": { "fontSize": "md" },
      "icon": { "fontSize": "0.625rem" },
    },
    "lg": {
      "control": { "w": 5, "h": 5 },
      "label": { "fontSize": "lg" },
      "icon": { "fontSize": "0.625rem" },
    },
  },
}
