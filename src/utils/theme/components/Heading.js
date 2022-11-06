export default {
  "defaultProps": { "size": "md", "colorScheme": "action" },
  "baseStyle": { "fontFamily": "heading", "fontWeight": "semibold" },
  "variants": {
    "bannerTitle": { fontSize: "5xl" },
    "featuredTitle": { fontSize: "3xl" },
    "featureTitle": { fontSize: "2xl" },
    "pageTitle": { fontSize: ["2xl", null, "3xl"] },
    "factsheetTitle": { fontSize: ["2xl", null, "3xl"] },
  },
  "sizes": {
    "4xl": { "fontSize": ["6xl", null, "7xl"], "lineHeight": 1 },
    "3xl": { "fontSize": ["5xl", null, "6xl"], "lineHeight": 1 },
    "2xl": { "fontSize": ["4xl", null, "5xl"], "lineHeight": [1.2, null, 1] },
    "xl": { "fontSize": ["3xl", null, "4xl"], "lineHeight": [1.33, null, 1.2] },
    "lg": { "fontSize": ["2xl", null, "3xl"], "lineHeight": [1.33, null, 1.2] },
    "md": { "fontSize": "xl", "lineHeight": 1.2 },
    "sm": { "fontSize": "md", "lineHeight": 1.2 },
    "xs": { "fontSize": "sm", "lineHeight": 1.2 },
  },
}
