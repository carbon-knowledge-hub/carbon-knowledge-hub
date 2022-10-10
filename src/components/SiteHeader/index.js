import { Box, Stack, HStack, Container, Divider } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"

import Share from "@components/Share"
import { ShareIcon } from "@components/Icon"

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
            divider={<Divider h={14} borderColor="gray.300" display={["none", null, "block"]} />}
          >
            <Box flex="none">
              <img src="/logo.svg" />
            </Box>

            <Box flex="none" w="auto" h={14} display={["none", null, "block"]}>
              <img
                src="/b20-logo.png"
                style={{ height: "100%", width: "auto" }}
              />
            </Box>
          </HStack>
          <Share />
        </HStack>
      </Container>
    </Stack>
  )
}
