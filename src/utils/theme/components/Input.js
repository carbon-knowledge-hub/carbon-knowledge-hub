export default {
  "defaultProps": {
    "size": "md",
    "variant": "outline",
    "colorScheme": "action",
  },
  "parts": ["addon", "field", "element"],
  "baseStyle": {
    "field": {
      "width": "100%",
      "minWidth": 0,
      "outline": 0,
      "position": "relative",
      "appearance": "none",
      "transitionProperty": "common",
      "transitionDuration": "normal",
    },
  },
  "variants": {
    "outline": {
      "field": {
        "border": "0.125rem solid",
        "borderColor": "inherit",
        "bg": "inherit",
        "color": "inherit",
        "_placeholder": { "color": "gray.600" },
        "_hover": { "borderColor": "gray.300" },
        "_readOnly": { "boxShadow": "none !important", "userSelect": "all" },
        "_disabled": { "opacity": 0.4, "cursor": "not-allowed" },
        "_invalid": { "boxShadow": "0 0 0 1px undefined" },
        "_focusVisible": {
          "zIndex": 1,
          "outline": "0.125rem solid",
          "outlineOffset": "0.125rem",
          "outlineColor": "gray.500",
        },
      },
      "addon": {
        "border": "0.0625rem solid",
        "borderColor": "inherit",
        "bg": "gray.100",
      },
    },
    "filled": {
      "field": {
        "border": "0.125rem solid",
        "borderColor": "transparent",
        "bg": "gray.800",
        "color": "white",
        "_hover": { "bg": "gray.900" },
        "_readOnly": { "boxShadow": "none !important", "userSelect": "all" },
        "_disabled": { "opacity": 0.4, "cursor": "not-allowed" },
        "_invalid": {},
        "_placeholder": { "color": "gray.500" },
        "_focusVisible": {
          "bg": "gray.800",
          "outline": "0.125rem solid",
          "outlineOffset": "0.125rem",
          "outlineColor": "gray.300",
        },
      },
      "addon": {
        "border": "0.125rem solid",
        "borderColor": "transparent",
        "bg": "gray.100",
      },
    },
    "unstyled": {
      "field": { "bg": "transparent", "px": 0, "height": "auto" },
      "addon": { "bg": "transparent", "px": 0, "height": "auto" },
    },
  },
  "sizes": {
    "lg": {
      "field": { "fontSize": "lg", "px": 3, "h": 12, "borderRadius": "md" },
      "addon": { "fontSize": "lg", "px": 3, "h": 12, "borderRadius": "md" },
    },
    "md": {
      "field": { "fontSize": "md", "px": 3, "h": 10, "borderRadius": "md" },
      "addon": { "fontSize": "md", "px": 3, "h": 10, "borderRadius": "md" },
    },
    "sm": {
      "field": { "fontSize": "sm", "px": 2, "h": 8, "borderRadius": "sm" },
      "addon": { "fontSize": "sm", "px": 2, "h": 8, "borderRadius": "sm" },
    },
    "xs": {
      "field": { "fontSize": "xs", "px": 1, "h": 6, "borderRadius": "sm" },
      "addon": { "fontSize": "xs", "px": 1, "h": 6, "borderRadius": "sm" },
    },
  },
}
