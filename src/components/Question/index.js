import { Box, Heading, Text } from "@chakra-ui/layout"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion"

export const Questions = ({ children }) => {
  return <Accordion allowMultiple>{children}</Accordion>
}

export const QuestionWrapper = ({ children }) => {
  return <AccordionItem>{children}</AccordionItem>
}

export const Question = ({ children }) => {
  return (
    <Heading as="h2">
      <AccordionButton fontWeight={600} fontSize="xl" py={5}>
        <Box flex="1" textAlign="left">
          {children}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
  )
}

export const Answer = ({ children }) => {
  return <AccordionPanel>{children}</AccordionPanel>
}