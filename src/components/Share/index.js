import { useDisclosure } from "@chakra-ui/react"
import { Heading, Text, Stack, HStack, Center } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Link } from "@components/Link"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/modal"

import {
  ShareIcon,
  MailIcon,
  TwitterIcon,
  LinkedinIcon,
} from "@components/Icon"

const SocialButton = ({children, href, name, bg = "gray.100", color= "gray.900"}) => {
  return (
    <Link href={href}>
      <Stack alignItems="center">
        <Center borderRadius="full" w="4rem" h="4rem" bg={bg} color={color}>
          {children}
        </Center>
        <Text fontWeight={500}>{name}</Text>
      </Stack>
    </Link>
  )
}

export default function Share() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        variant="ghost"
        rightIcon={<ShareIcon size="1.25rem" />}
        onClick={onOpen}
      >
        {"Share"}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent mx={3} p={5}>
          <ModalCloseButton />
          <Stack spacing={5}>
            <Heading as="h4">{"Share this page"}</Heading>

            <HStack spacing={5} justifyContent="space-between">
              <SocialButton name="Twitter" href="/" bg="twitter.500" color="white">
                <TwitterIcon size="1.75rem"/>
              </SocialButton>

              <SocialButton name="Email" href="/" bg="gray.100">
                <MailIcon size="1.75rem" />
              </SocialButton>
              <SocialButton name="Linkedin" href="/" bg="linkedin.500" color="white">
                <LinkedinIcon size="1.75rem" />
              </SocialButton>
            </HStack>
            <></>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  )
}
