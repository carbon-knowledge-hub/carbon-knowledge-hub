import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Center,
} from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { useTheme } from "@chakra-ui/system"
import { useClipboard } from "@chakra-ui/hooks"

import { Link } from "@components/Link"

const ColorBox = ({ hex, color = "#FFFFFF", name }) => {
  const { hasCopied, onCopy } = useClipboard(hex)
  return (
    <Stack spacing={2} pb={2} boxShadow="md" borderRadius="md">
      <Center
        h={20}
        borderTopRadius="md"
        borderTopColor="gray.100"
        borderBottomColor="gray.200"
        style={{
          borderTopWidth: hex ? "0" : "0.0625rem",
          borderBottomWidth: hex ? "0" : "0.0625rem",
          background: hex || "transparent",
        }}
      >
        <Button
          colorScheme="whiteAlpha"
          variant="ghost"
          onClick={onCopy}
          w="100%"
          h="100%"
          borderRadius={0}
          style={{ color }}
        >
          {hasCopied ? "Copied..." : hex}
        </Button>
      </Center>
      <Box px={3}>
        <Text lineHeight="shorter" textTransform="capitalize" fontWeight={600}>
          {name || hex}
        </Text>
      </Box>
    </Stack>
  )
}

const GeneratedColorSection = ({ colorName = "brand" }) => {
  const { colors } = useTheme()
  const shades = colors[colorName]
  return (
    <>
      {Object.keys(shades).map((key) => {
        const n = colorName
        const color = +key > 300 ? shades[100] : shades[900]
        return (
          <ColorBox
            key={`${n}-${key}`}
            hex={shades[key]}
            color={color}
            name={`${n} ${key}`}
          />
        )
      })}
    </>
  )
}

const ColorSection = ({
  title = "Color section",
  colorName = "gray",
  children,
}) => {
  return (
    <Stack spacing={[3, null, 8]}>
      <Heading as="h2">{title}</Heading>
      <SimpleGrid columns={[2, null, 5]} gridGap={[5, null, 10]}>
        {!children ? <GeneratedColorSection colorName={colorName} /> : children}
      </SimpleGrid>
    </Stack>
  )
}

export default function Styleguide() {
  const { colors } = useTheme()
  return (
    <Stack spacing={[5, null, 10]}>
      <Box w="100%">
        <Container>
          <Stack spacing={5} pt={10}>
            <Box fontWeight={500}>{"Home / Styleguide"}</Box>
            <Stack spacing={3}>
              <Heading
                as="h1"
                variant="pageTitle"
                gridColumn={["1 / -1", null, "2 / -2"]}
              >
                {"Styleguide"}
              </Heading>
              <Text variant="lead">
                {
                  "Short styleguide on typography and colors for the Carbon Knowledge Hub"
                }
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container pb={20}>
        <SimpleGrid columns={8}>
          <Stack spacing={5} gridColumn={["1 / -1", null, "1 / -4"]}>
            <Heading>{"Typography"}</Heading>
            <Text fontSize="lg">
              {"This website uses 2 typefaces: "}
              <Link href="https://fonts.google.com/specimen/Inter">
                {"Inter"}
              </Link>
              {" for headings and body text, and "}
              <Link href="https://fonts.google.com/specimen/Roboto+Mono">
                {"Roboto Mono"}
              </Link>
              {" for meta information such as decorative text and tags. "}
            </Text>
            <Text fontSize="lg">
              {
                "Please use Inter in size semibold 600 for chart titles (primary) and Inter regular 500 for subtitles and any additional text (secondary)."
              }
            </Text>
            <SimpleGrid columns={4} gridGap={10}>
              <ColorBox hex={colors.gray[900]} name="Primary" />
              <ColorBox hex={colors.gray[600]} name="Secondary" />
              <ColorBox hex={colors.gray[400]} name="Tertiary" />
            </SimpleGrid>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container pb={20}>
        <SimpleGrid columns={8}>
          <Stack spacing={5} gridColumn={["1 / -1", null, "1 / -4"]}>
            <Heading>{"Chart colors"}</Heading>
            <Text fontSize="lg">
              {
                "Please use the colors below in the listed order when creating charts. Try to limit the number of colors in a chart to 7."
              }
            </Text>
            <SimpleGrid columns={4} gridGap={10}>
              <ColorBox hex={colors.brand[500]} name="Indigo 500" />
              <ColorBox hex={colors.red[500]} name="Red 500" />
              <ColorBox hex={colors.cyan[400]} name="Cyan 400" />
              <ColorBox hex={colors.cyan[700]} name="Cyan 700" />
              <ColorBox hex={colors.yellow[500]} name="Yellow 500" />
              <ColorBox hex={colors.green[300]} name="Green 300" />
              <ColorBox hex={colors.green[700]} name="Green 700" />
            </SimpleGrid>
          </Stack>
        </SimpleGrid>
      </Container>
      {/* <Box w="100%" pb={20}>
        <Container>
          <Stack spacing={[5, null, 10]}>
            <ColorSection />
            <ColorSection title="Brand color" colorName="brand" />
            <ColorSection title="Random section">
              <ColorBox hex={colors.cyan[500]} name="Cyan 500" />
              <ColorBox hex={colors.green[500]} name="Green 500" />
              <ColorBox hex={colors.brand[500]} name="Brand 500" />
              <ColorBox hex={colors.red[500]} name="Red 500" />
            </ColorSection>
          </Stack>
        </Container>
      </Box> */}
    </Stack>
  )
}
