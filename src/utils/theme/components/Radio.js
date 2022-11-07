export default {
  "defaultProps": { "size": "md", "colorScheme": "brand" },
  "parts": ["container", "control", "label"],
  "baseStyle": {
    "label": { "userSelect": "none", "_disabled": { "opacity": 0.4 } },
    "container": { "_disabled": { "cursor": "not-allowed" } },
    "control": {
      "w": "100%",
      "transitionProperty": "box-shadow",
      "transitionDuration": "normal",
      "border": "2px solid",
      "borderRadius": "full",
      "borderColor": "inherit",
      "color": "gray.300",
      "_checked": {
        "bg": "brand.500",
        "borderColor": "brand.500",
        "color": "gray.300",
        "_hover": { "bg": "brand.600", "borderColor": "brand.600" },
        "_disabled": {
          "borderColor": "gray.200",
          "bg": "gray.200",
          "color": "gray.500",
        },
        "_before": {
          "content": '""',
          "display": "inline-block",
          "pos": "relative",
          "w": "50%",
          "h": "50%",
          "borderRadius": "50%",
          "bg": "white",
        },
      },
      "_indeterminate": {
        "bg": "brand.500",
        "borderColor": "brand.500",
        "color": "gray.300",
      },
      "_disabled": { "bg": "gray.100", "borderColor": "gray.100" },
      "_focusVisible": { "boxShadow": "outline" },
      "_invalid": { "borderColor": "red.500" },
    },
  },
  "variants": {},
  "sizes": {
    "md": { "control": { "w": 4, "h": 4 }, "label": { "fontSize": "md" } },
    "lg": { "control": { "w": 5, "h": 5 }, "label": { "fontSize": "lg" } },
    "sm": {
      "control": { "width": 3, "height": 3 },
      "label": { "fontSize": "sm" },
    },
  },
}
