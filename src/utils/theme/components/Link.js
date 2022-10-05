export default {
  "defaultProps": { "colorScheme": "action", "size": "md" },
  "baseStyle": {
    "transitionProperty": "common",
    "transitionDuration": "fast",
    "transitionTimingFunction": "ease-out",
    "cursor": "pointer",
    "textDecoration": "none",
    "outline": "none",
    "color": "inherit",
    fontWeight: 600,
    borderRadius: "sm",
    _hover: { "textDecoration": "underline" },
    _focusVisible: {
      outline: "0.125rem solid",
      outlineColor: "gray.300",
      outlineOffset: "0.125rem",
    },
  },
  "variants": {
    "inText": {
      color: "brand.500",
      _hover: { textDecoration: "underline" },
      _focus: { textDecoration: "underline" },
      _focusVisible: {
        outline: "0.125rem solid",
        outlineColor: "currentcolor",
        outlineOffset: "0.125rem",
      },
    },
    "navigationLink": {
      p: 3,
      borderRadius: "md",
      textDecoration: "none",
      _hover: { bg: "gray.50", textDecoration: "none" },
      _focusVisible: {
        bg: "gray.50",
        textDecoration: "none",
        outline: "0.125rem solid",
        outlineColor: "gray.300",
        outlineOffset: "0.125rem",
      },
      _active: { bg: "gray.100", textDecoration: "none" },
    },
  },
  "sizes": {},
}
