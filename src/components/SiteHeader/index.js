import { useRef } from "react"
import { useRouter } from "next/router"
import { useTheme } from "@chakra-ui/system"
import { Box, Stack, HStack, Text, Container, Divider } from "@chakra-ui/layout"
import { Button, IconButton } from "@chakra-ui/button"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/modal"
import { useDisclosure } from "@chakra-ui/hooks"

import { Link, ButtonLink } from "@components/Link"
import { NavigationIcon, SearchIcon } from "@components/Icon"
import { navigation } from "@utils/navigation"
import CKHLogo from "@components/Logo/CKHLogo"

function NavigationDrawer({ isInverted }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Button
        colorScheme={isInverted ? "whiteAlpha" : "gray"}
        rightIcon={<NavigationIcon />}
        onClick={onOpen}
        display={["none", null, "flex"]}
      >
        {"Menu"}
      </Button>
      <Button
        colorScheme="gray"
        px={0}
        onClick={onOpen}
        display={["flex", null, "none"]}
      >
        <NavigationIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg="rgba(45,45,99,0.5)" />
        <DrawerContent bg="#2D2D63" color="white">
          <DrawerCloseButton
            bg="whiteAlpha.300"
            borderRadius="sm"
            w="2.5rem"
            h="2.5rem"
            _hover={{ bg: "whiteAlpha.200" }}
            _focus={{ bg: "whiteAlpha.300" }}
            _active={{ bg: "whiteAlpha.500" }}
          />
          <DrawerHeader
            h={20}
            flex="none"
            borderBottom="0.0625rem solid"
            borderBottomColor="whiteAlpha.300"
          >
            &nbsp;
          </DrawerHeader>
          <DrawerBody p={0}>
            <Box>
              <Stack
                spacing={3}
                divider={<Divider borderColor="whiteAlpha.300" />}
              >
                <Stack spacing={3} p={3}>
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight={600}
                    color="whiteAlpha.600"
                    px={3}
                  >
                    {"Carbon Knowledge Hub"}
                  </Text>
                  {navigation
                    .filter((d) => d.category === "knowledgeHub")
                    .map((d) => {
                      return (
                        <ButtonLink
                          key={d.label}
                          href={d.href}
                          variant="ghost"
                          colorScheme="whiteAlpha"
                          textAlign="left"
                          justifyContent="flex-start"
                          px={3}
                          onClick={onClose}
                        >
                          {d.label}
                        </ButtonLink>
                      )
                    })}
                </Stack>

                <Stack spacing={3} p={3}>
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight={600}
                    color="whiteAlpha.600"
                    px={3}
                  >
                    {"Resources"}
                  </Text>
                  {navigation
                    .filter((d) => d.category === "resources")
                    .map((d) => {
                      return (
                        <ButtonLink
                          key={d.label}
                          href={d.href}
                          variant="ghost"
                          colorScheme="whiteAlpha"
                          textAlign="left"
                          justifyContent="flex-start"
                          px={3}
                          onClick={onClose}
                        >
                          {d.label}
                        </ButtonLink>
                      )
                    })}
                </Stack>

                <Stack spacing={3} p={3}>
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight={600}
                    color="whiteAlpha.600"
                    px={3}
                  >
                    {"About"}
                  </Text>
                  {navigation
                    .filter((d) => d.category === "about")
                    .map((d) => {
                      return (
                        <ButtonLink
                          key={d.label}
                          href={d.href}
                          variant="ghost"
                          colorScheme="whiteAlpha"
                          textAlign="left"
                          justifyContent="flex-start"
                          px={3}
                          onClick={onClose}
                        >
                          {d.label}
                        </ButtonLink>
                      )
                    })}
                </Stack>
              </Stack>
            </Box>
          </DrawerBody>
          <DrawerFooter
            borderTop="0.0625rem solid"
            borderColor="whiteAlpha.300"
          >
            <Text color="whiteAlpha.600" lineHeight="short">
              {
                "The Carbon Knowledge Hub is a collaboration between BloombergNEF  and the Indonesian Chamber of Commerce and Industry (KADIN)."
              }
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default function SiteHeader() {
  const router = useRouter()
  const { pathname } = router
  const isInverted =
    pathname.split("/").length > 2 &&
    (pathname.includes("/factsheets/") || pathname.includes("/basics/"))
  const { colors } = useTheme()
  return (
    <Stack
      as="header"
      borderBottom="0.0625rem solid"
      alignItems="center"
      style={{
        background: isInverted ? colors.brand[800] : "#FFFFFF",
        borderColor: isInverted ? colors.brand[600] : colors.gray[100],
        color: isInverted ? "#FFF" : colors.gray[900],
      }}
    >
      <Container>
        <HStack spacing={6} justifyContent="space-between" h={20}>
          <Link href="/">
            <HStack
              spacing={4}
              divider={
                <Divider
                  h={14}
                  borderColor={isInverted ? "brand.400" : "gray.200"}
                  display={["none", null, "block"]}
                />
              }
            >
              <Box flex="none">
                <CKHLogo
                  hexagonFill={
                    isInverted ? colors.brand[800] : colors.brand[700]
                  }
                  hexagonOutline={isInverted ? "#FFF" : "none"}
                  owlFill="#FFF"
                  mainTextFill={isInverted ? "#FFF" : colors.brand[700]}
                  subtitleText={colors.gray[500]}
                />
              </Box>
              <Box
                flex="none"
                w="auto"
                h={14}
                display={["none", null, "block"]}
              >
                <Box ml={0} w="auto" h="100%">
                  <img
                    src={isInverted ? "/b20-logo-white.png" : "/b20-logo-color.png"}
                    style={{ height: "100%", width: "auto" }}
                  />
                </Box>
              </Box>
            </HStack>
          </Link>
          <HStack spacing={6}>
            <HStack
              as="nav"
              spacing={6}
              display={["none", null, null, null, "flex"]}
            >
              {navigation
                .filter((d) => d.level === 1)
                .map((navItem) => {
                  return (
                    <Link key={navItem.href} href={navItem.href}>
                      {navItem.label}
                    </Link>
                  )
                })}
            </HStack>
            <HStack spacing={3}>
              <NavigationDrawer isInverted={isInverted} />
              {/* <IconButton
                colorScheme="gray"
                icon={<SearchIcon />}
                display={["none", null, "flex"]}
              /> */}
            </HStack>
          </HStack>
        </HStack>
      </Container>
    </Stack>
  )
}
