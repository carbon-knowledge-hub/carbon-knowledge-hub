import { useState, useRef } from "react"
import { Box, Text, Stack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Checkbox } from "@chakra-ui/checkbox"
import { Input } from "@chakra-ui/input"
import { useTheme } from "@chakra-ui/system"

import addToMailchimp from "@utils/mailchimp"

const NewsletterSection = () => {
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

    addToMailchimp(email, { "group[4611][4]": "4" })
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
      <Stack as="form" spacing={3} onSubmit={handleSubmit}>
        <Input
          placeholder="Your email address"
          variant="filled"
          type="email"
          name="email"
          isRequired
          onChange={handleChange}
        />
        <Button type="submit" colorScheme="brand">
          {"Subscribe"}
        </Button>
        <Checkbox
          isRequired
          alignItems="flex-start"
          spacing="0.8125rem"
          onChange={handleOptIn}
        >
          <Text mt="-0.125rem" lineHeight="short">
            {
              "Send me news about react-simple-maps releases, feature improvements, and guide articles."
            }
          </Text>
        </Checkbox>
      </Stack>
      {message ? (
        <Box
          borderRadius="lg"
          py={3}
          px={5}
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

export default NewsletterSection
