import {
  Stack,
  Box,
  SimpleGrid,
  Text,
  Heading,
  Container,
} from "@chakra-ui/react"

import BBGrid from "@/components/BBGrid"
// import { BreadCrumbs, BreadCrumb } from "@/components/Breadcrumbs"

export function PageHeader({ bg = "white", color = "inherit", ...props }) {
  return (
    <Box bg={bg} color={color}>
      <Container position="relative" overflow="hidden" {...props} />
    </Box>
  )
}

export function PageHeaderGrid({
  bg = "brand.1000",
  color = "whiteAlpha.200",
}) {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      _before={{
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: `linear(to-b, ${bg}, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, ${bg})`,
        zIndex: 1,
      }}
      _after={{
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: `linear(to-r, ${bg}, rgba(255,255,255,0) 90%, ${bg})`,
        zIndex: 1,
      }}
    >
      <Box
        position="absolute"
        top="50%"
        left={0}
        right={0}
        transform="translateY(-50%)"
      >
        <BBGrid
          color={color}
          position="relative"
          rows={8}
          _before={{
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgGradient: `linear(to-b, ${bg}, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, ${bg})`,
            zIndex: 1,
          }}
          _after={{
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgGradient: `linear(to-r, ${bg}, rgba(255,255,255,0) 90%, ${bg})`,
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  )
}

export function PageHeaderContent(props) {
  return (
    <SimpleGrid columns={8} gridGap={10} position="relative" zIndex={1}>
      <Stack
        position="relative"
        spacing={5}
        py={10}
        gridColumn="2 / -2"
        {...props}
      />
    </SimpleGrid>
  )
}

export function PageHeaderBreadcrumbs({ isInverted, items = [] }) {
  return null
  // return (
  //   <Box>
  //     <BreadCrumbs isInverted={isInverted}>
  //       {items.map((item) => {
  //         return (
  //           <BreadCrumb
  //             key={item.key || item.href || item.label}
  //             isInverted={isInverted}
  //             href={item.href}
  //             whiteSpace="nowrap"
  //             overflow="hidden"
  //             textOverflow="ellipsis"
  //           >
  //             {item.label}
  //           </BreadCrumb>
  //         )
  //       })}
  //     </BreadCrumbs>
  //   </Box>
  // )
}

export function PageHeaderTitle(props) {
  return <Heading variant="pageTitle" {...props} />
}

export function PageHeaderDescription(props) {
  return <Text variant="pageDescription" maxW="45rem" {...props} />
}

export function PageHeaderMetadata(props) {
  return <Box {...props} />
}
