import { useDisclosure, VisuallyHidden } from "@chakra-ui/react"
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

const twitterRoot = "http://twitter.com/intent/tweet"
const linkedinRoot = "http://linkedin.com/sharing/share-offsite"

const shareUrl = "https://www.carbonknowledgehub.com/"

const twitterShareText = encodeURIComponent(
  "New #Carbon Knowledge Hub by @BloombergNEF @B20 and @KADIN_Indonesia provides transparency and credibility to the carbon markets with primers, factsheets and stories from experts. Find out how to get involved"
)
const emailSubject = "B20/BNEF Carbon Centre of Excellence"
const emailText =
  "I would like to find out more about getting involved in the Carbon Centre of Excellence. Please contact me to kick off a discussion."

const twitterShareUrl = `${twitterRoot}?url=${shareUrl}&text=${twitterShareText}&original_referer=${shareUrl}`
const linkedinShareUrl = `${linkedinRoot}?url=${shareUrl}`
const emailShareUrl = `mailto:co2excel@bloomberg.net?subject=${emailSubject}&body=${emailText}`

const SocialButton = ({
  children,
  href,
  name,
  bg = "gray.100",
  color = "gray.900",
}) => {
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

export default function ShareButton({ ...restProps }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        rightIcon={<ShareIcon size="1.25rem" />}
        onClick={onOpen}
        display={["none", null, "flex"]}
        borderRadius="sm"
        {...restProps}
      >
        {"Share"}
      </Button>
      <Button
        display={["block", null, "none"]}
        onClick={onOpen}
        h="2.5rem"
        w="2.5rem"
        p={0}
        borderRadius="full"
      >
        <VisuallyHidden>{"Share"}</VisuallyHidden>
        <Center>
          <ShareIcon size="1.125rem" />
        </Center>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="sm" mx={3}>
        <ModalOverlay />
        <ModalContent py={6} px={10} mx={5}>
          <ModalCloseButton borderRadius="full" />
          <Stack spacing={6}>
            <Heading as="h4" fontSize="lg">
              {"Share this page"}
            </Heading>

            <HStack spacing={5} justifyContent="space-between">
              <SocialButton
                name="Twitter"
                href={twitterShareUrl}
                bg="twitter.500"
                color="white"
              >
                <TwitterIcon size="1.75rem" />
              </SocialButton>

              <SocialButton name="Email" href={emailShareUrl} bg="gray.100">
                <MailIcon size="1.75rem" />
              </SocialButton>
              <SocialButton
                name="Linkedin"
                href={linkedinShareUrl}
                bg="linkedin.500"
                color="white"
              >
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
