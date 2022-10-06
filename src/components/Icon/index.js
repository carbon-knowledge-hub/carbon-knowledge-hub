import { Box } from "@chakra-ui/layout"

const SvgContainer = ({
  size = "1.5rem",
  children,
  viewBox = "0 0 24 24",
  ...restProps
}) => {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox={viewBox}
      width="24"
      w={size}
      h={size}
      strokeLinecap="square"
      strokeLinejoin="bevel"
      aria-hidden="true"
      {...restProps}
    >
      {children}
    </Box>
  )
}

export const ChevronRightIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <path d="M9 18l6-6-6-6" />
    </SvgContainer>
  )
}

export const ChevronLeftIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <path d="M15 18l-6-6 6-6" />
    </SvgContainer>
  )
}

export const ChevronDownIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <path d="M6 9l6 6 6-6" />
    </SvgContainer>
  )
}

export const ChevronUpIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <path d="M18 15l-6-6-6 6" />
    </SvgContainer>
  )
}

export const ArrowRightIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <path d="M5 12h13m-6-7l7 7-7 7" />
    </SvgContainer>
  )
}

export const GithubIcon = ({ fill = "currentcolor", ...restProps }) => {
  return (
    <SvgContainer fill={fill} viewBox="0 0 20 20" {...restProps}>
      <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0" />
    </SvgContainer>
  )
}

export const CopyIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <g>
        <rect width="13" height="13" x="9" y="9" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
      </g>
    </SvgContainer>
  )
}

export const CheckIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <path d="M20 6L9 17 4 12" />
    </SvgContainer>
  )
}

export const EnvelopeIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6L12 13 2 6" />
    </SvgContainer>
  )
}

export const LinkIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <g>
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </g>
    </SvgContainer>
  )
}

export const NavigationIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <line x1={3} x2={21} y1={7} y2={7} />
      <line x1={3} x2={21} y1={12} y2={12} />
      <line x1={3} x2={21} y1={17} y2={17} />
    </SvgContainer>
  )
}

export const ClipboardIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </SvgContainer>
  )
}

export const ExternalLinkIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <path d="M18 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V8c0-1.1.9-2 2-2h5m5-3h6v6m-11 5L20.2 3.8" />
    </SvgContainer>
  )
}

export const SearchIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </SvgContainer>
  )
}

export const ShareIcon = ({
  strokeWidth = 2.5,
  stroke = "currentcolor",
  ...restProps
}) => {
  return (
    <SvgContainer
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill="none"
      {...restProps}
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51L15.42 17.49" />
      <path d="M15.41 6.51L8.59 10.49" />
    </SvgContainer>
  )
}
