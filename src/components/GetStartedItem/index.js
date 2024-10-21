import { Stack, Heading, Text, Box } from "@chakra-ui/react"

import { LinkBox, LinkOverlay } from "@/components/Link"
import { ArrowRightIcon } from "@/components/Icon"
import BBGrid from "@/components/BBGrid"

export default function GetStartedItem({
  title = "Carbon pricing at a glance",
  description = "Carbon pricing can be an effective policy tool to make polluters pay for their greenhouse-gas emissions. Out of the 60 or so programs around the world, the most common are taxes and emission-trading programs. Broadly speaking, the former guarantees the carbon price and the latter delivers a guaranteed reduction in emissions.",
  linkText = "Continue reading",
  tags = [{ key: 1, label: "Basic" }],
  href = "/",
  imgSrc = "/images/carbon-pricing-at-a-glance.svg",
}) {
  return (
    <LinkBox
      gridColumn="1 / -1"
      as="article"
      position="relative"
      bg="brand.1000"
      color="white"
      display="grid"
      gridTemplateColumns={["1fr", null, null, "1fr 1fr"]}
      gridColumnGap={10}
      gridRowGap={5}
      pt={[5, null, null, 10]}
      pb={10}
      overflow="hidden"
      sx={{
        "&:nth-of-type(odd)": {
          gridTemplateAreas: ["'img' 'content'", null, null, "'img content'"],
          "--content-padding-left": ["1.25rem", null, null, 0],
          "--content-padding-right": ["1.25rem", null, null, "2.5rem"],
          "--gradient-start": "rgba(0,0,0,0)",
          "--gradient-end": "var(--chakra-colors-brand-1000)",
          "--gradient-direction": "right",
        },
        "&:nth-of-type(even)": {
          gridTemplateAreas: ["'img' 'content'", null, null, "'content img'"],
          "--content-padding-left": ["1.25rem", null, null, "2.5rem"],
          "--content-padding-right": ["1.25rem", null, null, 0],
          "--gradient-start": "rgba(0,0,0,0)",
          "--gradient-end": "var(--chakra-colors-brand-1000)",
          "--gradient-direction": "left",
        },
      }}
    >
      <Box
        gridColumn="1 / -1"
        gridRow="1 / span 1"
        position="relative"
        alignSelf="center"
      >
        <BBGrid
          rows={8}
          columns={14}
          color="brand.900"
          position="relative"
          zIndex={0}
          _before={{
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to var(--gradient-direction), var(--gradient-start) 0%, var(--gradient-end) 75%)",
            zIndex: 1,
            opacity: [0, null, null, 1],
          }}
          _after={{
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to bottom, var(--gradient-end) 0%, var(--gradient-start) 20%, var(--gradient-start) 80%, var(--gradient-end) 100%)",
            zIndex: 1,
          }}
        />
      </Box>
      <img
        src={imgSrc}
        style={{
          gridArea: "img",
          alignSelf: "center",
          position: "relative",
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <Stack
        gridArea="content"
        spacing={6}
        pr="var(--content-padding-right)"
        pl="var(--content-padding-left)"
        justifyContent="center"
        zIndex={1}
      >
        {tags.map((tag) => {
          return (
            <Text
              key={tag.key}
              as="span"
              color={tag.label === "basic" ? "secondary.800" : "tertiary.800"}
              bg={tag.label === "basic" ? "secondary.200" : "tertiary.200"}
              alignSelf="flex-start"
              variant="tag"
            >
              {tag.label}
            </Text>
          )
        })}
        <Heading variant="storyTitle">
          <LinkOverlay href={href}>{title}</LinkOverlay>
        </Heading>
        <Text variant="body" color="whiteAlpha.700">
          {description}
        </Text>
        <LinkOverlay href={href} display="flex" alignItems="center">
          <Text fontSize="lg" color="brand.500" fontWeight={600}>
            {linkText}
          </Text>
          <ArrowRightIcon size="1.5rem" ml={3} color="brand.500" />
        </LinkOverlay>
      </Stack>
    </LinkBox>
  )
}
