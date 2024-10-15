import { Box } from "@chakra-ui/react"

export function Icon({
  size = "1.25rem",
  viewBox = "0 0 24 24",
  stroke = "currentcolor",
  strokeWidth = 2,
  strokeLinecap = "butt",
  strokeLinejoin = "bevel",
  children,
  isAnimated,
  className,
  ...restProps
}) {
  const size2 = [size].flat()
  const strokeWidth2 = [strokeWidth].flat()
  const fontSize = strokeWidth2.map((d) => (d ? d * 0.0625 + "rem" : d))
  return (
    <Box
      xmlns="http://www.w3.org/2000/svg"
      as="svg"
      w={size2}
      h={size2}
      aria-hidden="true"
      focusable="false"
      viewBox={viewBox}
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      fill="none"
      sx={{
        "circle, path, rect, text, line": {
          fontSize,
          vectorEffect: "non-scaling-stroke",
          strokeWidth: "1em",
        },
      }}
      className={`${className}${
        isAnimated ? ` is-animated-${isAnimated}` : ""
      }`}
      {...restProps}
    >
      {children}
    </Box>
  )
}

export const ChevronLeftIcon = ({ viewBox = "0 0 24 24", ...restProps }) => (
  <Icon viewBox={viewBox} {...restProps}>
    <path d="M15 18l-6-6 6-6" />
  </Icon>
)

export const ChevronRightIcon = ({ viewBox = "0 0 24 24", ...restProps }) => (
  <Icon viewBox={viewBox} {...restProps}>
    <path d="M9 18l6-6-6-6" />
  </Icon>
)

export const ChevronDownIcon = ({ viewBox = "0 0 24 24", ...restProps }) => (
  <Icon viewBox={viewBox} {...restProps}>
    <path d="M6 9l6 6 6-6" />
  </Icon>
)

export const ChevronUpIcon = ({ viewBox = "0 0 24 24", ...restProps }) => (
  <Icon viewBox={viewBox} {...restProps}>
    <path d="M18 15l-6-6-6 6" />
  </Icon>
)

export const ArrowRightIcon = ({ viewBox = "0 0 24 24", ...restProps }) => (
  <Icon viewBox={viewBox} {...restProps}>
    <path d="M5 12h13m-6-7l7 7-7 7" />
  </Icon>
)

export const ArrowLeftIcon = ({ viewBox = "0 0 24 24", ...restProps }) => (
  <Icon viewBox={viewBox} {...restProps}>
    <path d="M19 12H6M12 5l-7 7 7 7" />
  </Icon>
)

export const SearchIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />
    </Icon>
  )
}

export const CloseIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <path d="M18,6L6,18M6,6L18,18" />
    </Icon>
  )
}

export const ListIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <path d="M10 4h12M10 12h12M10 20h12M6 2H2v4h4V2zM6 10H2v4h4v-4zM6 18H2v4h4v-4z" />
    </Icon>
  )
}

export const ExternalLinkIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <path d="M18 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V8c0-1.1.9-2 2-2h5m5-3h6v6m-11 5L20.2 3.8" />
    </Icon>
  )
}

export const DownloadIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 002-2v-4m-4-6l-5 5-5-5m5 3.8V2.5" />
    </Icon>
  )
}

export const EnvelopeIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      <g>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6L12 13 2 6" />
      </g>
    </Icon>
  )
}

export const MenuIcon = ({ viewBox = "0 0 24 24", ...restProps }) => {
  return (
    <Icon viewBox={viewBox} {...restProps}>
      {/* <line x1={2} x2={22} y1={8} y2={8} /> */}
      {/* <line x1={4} x2={20} y1={12} y2={12} /> */}
      {/* <line x1={2} x2={22} y1={16} y2={16} /> */}
      <path d="M2,8L22,8M2,16L22,16" />
    </Icon>
  )
}
