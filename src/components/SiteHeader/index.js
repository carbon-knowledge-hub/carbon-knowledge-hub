import {
  Box,
  HStack,
  Container,
  Button,
  Text,
  Drawer,
  DrawerBody,
  // DrawerFooter,
  // DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react"

import Logo from "@/components/Logo"
import { Link, ButtonLink } from "@/components/Link"
import { MenuIcon } from "@/components/Icon"

const navigationItems = [
  { label: "Factsheets", href: "/factsheets" },
  { label: "Data tracker", href: "/data-tracker" },
  { label: "Stories", href: "/stories" },
  { label: "Media", href: "/media" },
  { label: "B20 recommendations", href: "/b20-recommendations" },
].map((d, i) => ({ ...d, key: i + 1 }))

export default function SiteHeader({ bg = "white", color = "currentcolor" }) {
  return (
    <Box
      bg={bg}
      color={color}
      sx={{
        ".fill-owl-bg": { fill: color },
        ".fill-owl-color": { fill: bg },
        ".fill-primary-text-color": { fill: color },
        ".fill-secondary-text-color": { fill: color, opacity: 0.5 },
      }}
    >
      <Container as="header">
        <HStack spacing={10} justifyContent="space-between" h={20}>
          <Link href="/" w="17rem" flex="none">
            <Logo />
          </Link>
          <HStack spacing={8}>
            <HStack spacing={8} display={["none", null, null, null, "flex"]}>
              {navigationItems.map((navItem) => (
                <ButtonLink
                  key={navItem.key}
                  href={navItem.href}
                  variant="navLink"
                >
                  {navItem.label}
                </ButtonLink>
              ))}
            </HStack>
            <NavigationOverlay />
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}

const extendedNavigationItems = [
  { label: "Factsheets", href: "/factsheets" },
  { label: "Data tracker", href: "/data-tracker" },
  { label: "Stories", href: "/stories" },
  { label: "Dictionary", href: "/dictionary" },
  { label: "Media", href: "/media" },
  { label: "Links", href: "/links" },
  { label: "B20 recommendations", href: "/b20-recommendations" },
].map((d, i) => ({ ...d, key: i + 1 }))

function NavigationOverlay() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} borderRadius="none" rightIcon={<MenuIcon />}>
        {"Menu"}
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent bg="primary.1000" color="white">
          <DrawerCloseButton
            bg="whiteAlpha.200"
            borderRadius="none"
            w="2.5rem"
            h="2.5rem"
            mt={2}
          />
          <DrawerBody py={20} px={0}>
            <Stack
              spacing={3}
              py={6}
              px={5}
              borderY="0.0625rem solid"
              borderColor="whiteAlpha.200"
            >
              <Stack spacing={6} py={6}>
                <Text variant="metaHeadingSmall" color="whiteAlpha.600" px={2}>
                  {"Carbon Knowledge Hub"}
                </Text>
                <ButtonLink
                  href={"/factsheets"}
                  variant="ghost"
                  color="white"
                  colorScheme="whiteAlpha"
                  textAlign="left"
                  justifyContent="flex-start"
                  px={4}
                  mx={-2}
                  fontSize="lg"
                >
                  {"Factsheets"}
                </ButtonLink>
                <ButtonLink
                  href={"/b20-recommendations"}
                  variant="ghost"
                  color="white"
                  colorScheme="whiteAlpha"
                  textAlign="left"
                  justifyContent="flex-start"
                  px={4}
                  mx={-2}
                  fontSize="lg"
                >
                  {"B20 recommendations"}
                </ButtonLink>
                <ButtonLink
                  href={"/data-tracker"}
                  variant="ghost"
                  color="white"
                  colorScheme="whiteAlpha"
                  textAlign="left"
                  justifyContent="flex-start"
                  px={4}
                  mx={-2}
                  fontSize="lg"
                >
                  {"Data tracker"}
                </ButtonLink>
              </Stack>

              {/* {extendedNavigationItems.map((navItem) => (
                <Link key={navItem.key} href={navItem.href} fontWeight={600}>
                  {navItem.label}
                </Link>
              ))} */}
            </Stack>
            <Stack
              spacing={3}
              py={6}
              px={5}
              borderY="0.0625rem solid"
              borderColor="whiteAlpha.200"
            >
              <Stack spacing={6} py={6}>
                <Text variant="metaHeadingSmall" color="whiteAlpha.600" px={2}>
                  {"Resources"}
                </Text>
                <ButtonLink
                  href={"/stories"}
                  variant="ghost"
                  color="white"
                  colorScheme="whiteAlpha"
                  textAlign="left"
                  justifyContent="flex-start"
                  px={4}
                  mx={-2}
                  fontSize="lg"
                >
                  {"Stories"}
                </ButtonLink>
                <ButtonLink
                  href={"/links"}
                  variant="ghost"
                  color="white"
                  colorScheme="whiteAlpha"
                  textAlign="left"
                  justifyContent="flex-start"
                  px={4}
                  mx={-2}
                  fontSize="lg"
                >
                  {"Links"}
                </ButtonLink>
                <ButtonLink
                  href={"/media"}
                  variant="ghost"
                  color="white"
                  colorScheme="whiteAlpha"
                  textAlign="left"
                  justifyContent="flex-start"
                  px={4}
                  mx={-2}
                  fontSize="lg"
                >
                  {"Media"}
                </ButtonLink>
                <ButtonLink
                  href={"/dictionary"}
                  variant="ghost"
                  color="white"
                  colorScheme="whiteAlpha"
                  textAlign="left"
                  justifyContent="flex-start"
                  px={4}
                  mx={-2}
                  fontSize="lg"
                >
                  {"Dictionary"}
                </ButtonLink>
              </Stack>
            </Stack>
            <Stack
              spacing={3}
              py={6}
              px={5}
              borderY="0.0625rem solid"
              borderColor="whiteAlpha.200"
            >
              <Stack spacing={6} py={6}>
                <Text variant="metaHeadingSmall" color="whiteAlpha.600" px={2}>
                  {"About"}
                </Text>
                <ButtonLink
                  href={"/about"}
                  variant="ghost"
                  color="white"
                  colorScheme="whiteAlpha"
                  textAlign="left"
                  justifyContent="flex-start"
                  px={4}
                  mx={-2}
                  fontSize="lg"
                >
                  {"About"}
                </ButtonLink>
                <ButtonLink
                  href={"/partners"}
                  variant="ghost"
                  color="white"
                  colorScheme="whiteAlpha"
                  textAlign="left"
                  justifyContent="flex-start"
                  px={4}
                  mx={-2}
                  fontSize="lg"
                >
                  {"Partners"}
                </ButtonLink>
                <ButtonLink
                  href={"/faq"}
                  variant="ghost"
                  color="white"
                  colorScheme="whiteAlpha"
                  textAlign="left"
                  justifyContent="flex-start"
                  px={4}
                  mx={-2}
                  fontSize="lg"
                >
                  {"Frequently asked questions"}
                </ButtonLink>
                <ButtonLink
                  href={"/contact"}
                  variant="ghost"
                  color="white"
                  colorScheme="whiteAlpha"
                  textAlign="left"
                  justifyContent="flex-start"
                  px={4}
                  mx={-2}
                  fontSize="lg"
                >
                  {"Contact"}
                </ButtonLink>
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
