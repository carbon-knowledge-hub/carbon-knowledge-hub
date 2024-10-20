import { useState, useRef } from "react"
import {
  Box,
  Text,
  Stack,
  Button,
  Checkbox,
  Input,
  useTheme,
} from "@chakra-ui/react"

import { EnvelopeIcon } from "@/components/Icon"

import addToMailchimp from "@/utils/mailchimp"

export default function NewsletterSignup() {
  const [GDPRConfirmation, setGDPRConfirmation] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [hasError, setError] = useState(false)
  const lastPressed = useRef(0)

  const { colors } = useTheme()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (!GDPRConfirmation) {
      if (email) {
        setError(true)
        setMessage("Please tick the checkbox to proceed.")
        return
      } else {
        setError(true)
        setMessage("Type in your email address")
        return
      }
    }

    const diff = Date.now() - lastPressed.current
    if (diff < 2000) return
    lastPressed.current = Date.now()

    addToMailchimp(email)
      .then(({ msg, result }) => {
        if (result !== "success") {
          throw msg
        } else {
          setError(false)
          setMessage(msg)
        }
      })
      .catch((err) => {
        setError(true)
        setMessage(err)
      })
  }

  const handleChange = (evt) => {
    setEmail(evt.target.value)
  }

  const handleOptIn = (evt) => {
    setGDPRConfirmation(evt.target.checked)
  }

  return (
    <Stack spacing={3}>
      <Stack
        as="form"
        spacing={3}
        onSubmit={handleSubmit}
        direction={["column", null, "row"]}
      >
        <Input
          placeholder="Your email address"
          variant="outline"
          size="lg"
          type="email"
          name="email"
          isRequired
          onChange={handleChange}
          borderColor="brand.100"
          _placeholder={{ "color": "brand.100", "fontFamily": "body" }}
          borderRadius="none"
          color="white"
        />
        <Button
          type="submit"
          bg="brand.500"
          color="white"
          _hover={{ "bg": "brand.600" }}
          _active={{ "bg": "brand.700" }}
          _focus={{ "bg": "brand.700" }}
          size="lg"
          px={10}
          rightIcon={<EnvelopeIcon />}
          borderRadius="none"
        >
          {"Sign up"}
        </Button>
      </Stack>
      <Checkbox
        isRequired
        alignItems="flex-start"
        spacing="0.8125rem"
        onChange={handleOptIn}
      >
        <Text mt="-0.125rem" lineHeight="short" color="white">
          {"Send me news about the Carbon Knowledge Hub releases."}
        </Text>
      </Checkbox>
      {message ? (
        <Box
          py={3}
          px={5}
          color="white"
          style={{
            background: hasError ? colors.red[300] : colors.green[300],
            color: hasError ? colors.red[900] : colors.green[900],
          }}
        >
          <Text
            lineHeight="short"
            dangerouslySetInnerHTML={{ __html: message }}
            sx={{
              a: { textDecoration: "underline" },
            }}
          />
        </Box>
      ) : null}
    </Stack>
  )
}
