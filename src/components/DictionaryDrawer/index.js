import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  // DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Text,
  HStack,
  Stack,
} from "@chakra-ui/react"

import { useDictionaryStore } from "@/utils/useDictionaryDrawer"
import { Link } from "@/components/Link"

export default function DictionaryDrawer() {
  const isOpen = useDictionaryStore((state) => state.isOpen)
  const onClose = useDictionaryStore((state) => state.onClose)

  const definition = useDictionaryStore((state) => state.definition)
  const description = useDictionaryStore((state) => state.description)

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="lg" placement="bottom">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <Stack py={[5, null, 10]} justifyContent="space-between" direction={["column", null, "row"]}>
            <Stack spacing={3} maxW="48rem">
              {" "}
              <Heading variant="dictionaryDrawerTerm">{definition}</Heading>
              <Text variant="bodySmall">{description}</Text>
            </Stack>

            <Link
              href={`/dictionary#term-${definition.split(" ").join("-")}`}
              onClick={onClose}
              flex="none"
            >
              {"See term in dictionary"}
            </Link>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
