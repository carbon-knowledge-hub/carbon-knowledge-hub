import { useRef } from "react"
import { Box } from "@chakra-ui/layout"
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
} from "@chakra-ui/modal"
import { useDisclosure } from "@chakra-ui/hooks"
import { Button } from "@chakra-ui/button"
import { VisuallyHidden } from "@chakra-ui/visually-hidden"

import FactsheetFilters from "@components/FactsheetFilters"
import { FilterIcon } from "@components/Icon"

export default function MobileFilter() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <Box flex="none">
      <Button
        colorScheme="gray"
        w={10}
        h={10}
        px={0}
        ref={btnRef}
        onClick={onOpen}
      >
        <FilterIcon />
        <VisuallyHidden>{ "Filter" }</VisuallyHidden>
      </Button>
      <Drawer
        size="full"
        isOpen={isOpen}
        onClose={onClose}
        placement="bottom"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg="rgba(45,45,99,0.5)" />
        <DrawerContent>
          <DrawerCloseButton right="1.125rem" />
          <DrawerHeader>{"Filters"}</DrawerHeader>
          <DrawerBody>
            <Box>
              <FactsheetFilters allowMultiple={true} defaultIndex={[0,1,2]} />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
