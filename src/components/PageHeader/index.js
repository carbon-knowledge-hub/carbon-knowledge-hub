import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Container,
} from "@chakra-ui/layout"

import { BreadCrumbs, BreadCrumb } from "@components/BreadCrumbs"

const getComponentsByName = (children, name) => {
  if (!children?.length) return []
  return children.filter((d) => d.type.displayName === name)
}

const excludeComponentsByName = (children, names = []) => {
  if (!children?.length) return []
  return children.filter((d) => !names.includes(d.type.displayName))
}

export function PageTitle(props) {
  return (
    <Heading
      as="h1"
      variant="pageTitle"
      gridColumn={["1 / -1", null, "2 / -2"]}
      {...props}
    />
  )
}

PageTitle.displayName = "PageTitle"

export function PageDescription(props) {
  return <Text variant="lead" {...props} />
}

PageDescription.displayName = "PageDescription"

export function PageHeader({
  title = "",
  description = "",
  bc = [{ label: "Page" }],
  children,
}) {
  const pageTitle = getComponentsByName(children, "PageTitle")[0]
  const pageDescription = getComponentsByName(children, "PageDescription")
  const restChildren = excludeComponentsByName(children, [
    "PageTitle",
    "PageDescription",
  ])

  return (
    <Box w="100%">
      <Container>
        <SimpleGrid columns={8} pt={10} gridGap={10}>
          <Stack gridColumn={["1 / -1", null, "2 / -2"]} spacing={6} pt={1}>
            <BreadCrumbs>
              {bc.map(({ label, href }) => {
                return (
                  <BreadCrumb key={label} href={href}>
                    {label}
                  </BreadCrumb>
                )
              })}
            </BreadCrumbs>
            <Stack spacing={3}>
              {pageTitle ? (
                pageTitle
              ) : title ? (
                <PageTitle>{title}</PageTitle>
              ) : null}
              {pageDescription.length ? (
                pageDescription
              ) : description ? (
                <PageDescription>{description}</PageDescription>
              ) : null}
            </Stack>
            {restChildren}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
