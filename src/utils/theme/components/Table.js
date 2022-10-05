export default {
  "defaultProps": {
    "variant": "simple",
    "size": "md",
    "colorScheme": "action",
  },
  "parts": ["table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption"],
  "baseStyle": {
    "table": {
      "fontVariantNumeric": "lining-nums tabular-nums",
      "borderCollapse": "collapse",
      "width": "full",
    },
    "th": {
      "fontFamily": "heading",
      "fontWeight": "bold",
      "textTransform": "uppercase",
      "letterSpacing": "wider",
      "textAlign": "start",
    },
    "td": { "textAlign": "start" },
    "caption": {
      "mt": 4,
      "fontFamily": "heading",
      "textAlign": "center",
      "fontWeight": "medium",
    },
  },
  "variants": {
    "simple": {
      "th": {
        "color": "gray.600",
        "borderBottom": "1px",
        "borderColor": "gray.100",
        "&[data-is-numeric=true]": { "textAlign": "end" },
      },
      "td": {
        "borderBottom": "1px",
        "borderColor": "gray.100",
        "&[data-is-numeric=true]": { "textAlign": "end" },
      },
      "caption": { "color": "gray.600" },
      "tfoot": {
        "tr": { "&:last-of-type": { "th": { "borderBottomWidth": 0 } } },
      },
    },
    "striped": {
      "th": {
        "color": "gray.600",
        "borderBottom": "1px",
        "borderColor": "gray.100",
        "&[data-is-numeric=true]": { "textAlign": "end" },
      },
      "td": {
        "borderBottom": "1px",
        "borderColor": "gray.100",
        "&[data-is-numeric=true]": { "textAlign": "end" },
      },
      "caption": { "color": "gray.600" },
      "tbody": {
        "tr": {
          "&:nth-of-type(odd)": {
            "th, td": {
              "borderBottomWidth": "1px",
              "borderColor": "gray.100",
            },
            "td": { "background": "gray.100" },
          },
        },
      },
      "tfoot": {
        "tr": { "&:last-of-type": { "th": { "borderBottomWidth": 0 } } },
      },
    },
    "unstyled": {},
  },
  "sizes": {
    "sm": {
      "th": { "px": "3", "py": "1", "lineHeight": "4", "fontSize": "xs" },
      "td": { "px": "3", "py": "2", "fontSize": "sm", "lineHeight": "4" },
      "caption": { "px": "4", "py": "2", "fontSize": "xs" },
    },
    "md": {
      "th": { "px": "5", "py": "3", "lineHeight": "4", "fontSize": "xs" },
      "td": { "px": "5", "py": "4", "lineHeight": "5" },
      "caption": { "px": "5", "py": "2", "fontSize": "sm" },
    },
    "lg": {
      "th": { "px": "6", "py": "4", "lineHeight": "5", "fontSize": "sm" },
      "td": { "px": "6", "py": "5", "lineHeight": "6" },
      "caption": { "px": "4", "py": "2", "fontSize": "md" },
    },
  },
}
