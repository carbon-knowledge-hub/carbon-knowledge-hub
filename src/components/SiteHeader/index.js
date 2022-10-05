import { useRef } from "react"
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
import Logo from "@components/Logo/Logo"
import { navigation } from "@utils/navigation"

function NavigationDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Button
        colorScheme="gray"
        rightIcon={<NavigationIcon />}
        onClick={onOpen}
      >
        {"Menu"}
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
                    {"The Carbon Knowledge Hub"}
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
                "The Carbon Knowledge Hub is a collaboration between BNEF  and  the The Indonesian Chamber of Commerce and Industry (KADIN)."
              }
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default function SiteHeader() {
  return (
    <Stack
      as="header"
      borderBottom="0.0625rem solid"
      borderColor="gray.100"
      alignItems="center"
    >
      <Container>
        <HStack spacing={6} justifyContent="space-between" h={20}>
          <HStack
            spacing={4}
            divider={<Divider h={14} borderColor="gray.300" />}
          >
            <HStack flex="none" h={14} spacing={1}>
              <Logo />
              <Link href="/" _hover={{ textDecoration: "none" }}>
                <Stack spacing={1} textTransform="uppercase" lineHeight="1">
                  <Box as="span" fontWeight={700}>
                    {"Carbon Knowledge Hub"}
                  </Box>
                  <Box
                    as="span"
                    fontFamily="mono"
                    fontSize="0.625rem"
                    letterSpacing="wider"
                  >
                    {"A "}
                    <Box as="span" color="red.500">
                      {"B20 Indonesia"}
                    </Box>
                    {" legacy programme"}
                  </Box>
                </Stack>
              </Link>
            </HStack>
            <Box flex="none" w="auto" h={14}>
              <img
                src="/b20-logo.png"
                style={{ height: "100%", width: "auto" }}
              />
            </Box>
          </HStack>
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
              <NavigationDrawer />
              <IconButton colorScheme="gray" icon={<SearchIcon />} />
            </HStack>
          </HStack>
        </HStack>
      </Container>
    </Stack>
  )
}
