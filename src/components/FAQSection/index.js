import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  ListItem,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"

import { Link } from "@components/Link"

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion"
import { TagLeftIcon } from "@chakra-ui/react"
import { CheckIcon } from "@components/Icon"

const AccordionItemWrapper = ({ children }) => {
  return <AccordionItem borderColor="gray.200">{children}</AccordionItem>
}

const FAQSection = () => {
  return (
    <Container>
      <SimpleGrid columns={8}>
        <Stack spacing={5} gridColumn={["1 / -1", null, "2 / -2"]}>
          <Heading as="h3" fontSize={["xl", null, "2xl"]}>
            {"Frequently asked questions"}
          </Heading>
          <Accordion>
            <AccordionItemWrapper borderColor="gray.200">
              <Heading as="h4">
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    py={5}
                    fontSize={["lg", null, "xl"]}
                  >
                    {"What is the Carbon Centre of Excellence?"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel color="gray.600" fontSize={["md", null, "lg"]}>
                <Stack spacing={5}>
                  <Text>
                    {
                      "This public web platform aims to provide companies and other players with the knowledge required to understand the carbon markets. It offers primers, factsheets, videos and other resources targeted at different levels of expertise. In addition, the ‘Stories’ part of the site contains interviews and thought pieces by other companies and organizations already involved in the carbon markets."
                    }
                  </Text>
                  <Text>
                    {
                      "The Carbon Centre of Excellence is a legacy program of B20 Indonesia – the official G20 dialogue forum with the global business community. The program aims to accelerate the green transition across the G20 countries and beyond."
                    }
                  </Text>
                </Stack>
              </AccordionPanel>
            </AccordionItemWrapper>
            <AccordionItemWrapper borderColor="gray.200">
              <Heading as="h4">
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    py={5}
                    fontSize={["lg", null, "xl"]}
                  >
                    {"Who is the target audience?"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel color="gray.600" fontSize={["md", null, "lg"]}>
                <Text>
                  {
                    "The primary audience will be companies, governments and organizations looking to learn more about the carbon markets and trading. The material is devised to appeal to a range of levels of expertise so beginners can get to grips with the basics on how carbon trading works. More knowledgeable users can delve into factsheets on more advanced topics like the intricacies of Article 6 and the varied factors determining the price of a voluntary offset."
                  }
                </Text>
              </AccordionPanel>
            </AccordionItemWrapper>
            <AccordionItemWrapper borderColor="gray.200">
              <Heading as="h4">
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    py={5}
                    fontSize={["lg", null, "xl"]}
                  >
                    {"When will it go live?"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel color="gray.600" fontSize={["md", null, "lg"]}>
                <Text>
                  {
                    "The platform will be launched in time for BloombergNEF’s Summit in Bali on Nov. 12, 2022, and the Business 20 (B20) and G20 Summits, led by Indonesia, on Nov. 13-16."
                  }
                </Text>
              </AccordionPanel>
            </AccordionItemWrapper>
            <AccordionItemWrapper borderColor="gray.200">
              <Heading as="h4">
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    py={5}
                    fontSize={["lg", null, "xl"]}
                  >
                    {"How can I be alerted when it goes live?"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel color="gray.600" fontSize={["md", null, "lg"]}>
                <Text>
                  {
                    "Please enter your email address in the ‘Stay up to date’ box above and hit ‘Sign up’. "
                  }
                </Text>
              </AccordionPanel>
            </AccordionItemWrapper>
            <AccordionItemWrapper borderColor="gray.200">
              <Heading as="h4">
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    py={5}
                    fontSize={["lg", null, "xl"]}
                  >
                    {"What are Carbon Centre of Excellence partners?"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel color="gray.600" fontSize={["md", null, "lg"]}>
                <Stack spacing={5}>
                  <Text>
                    {
                      "We are looking for companies and organizations that want to become involved in this initiative and raise their profile as a key carbon market player. There are two main ways to become involved:"
                    }
                  </Text>
                  <UnorderedList color="gray.600" fontSize={["md", null, "lg"]} spacing={5}>
                    <ListItem>
                      {
                        "You can become a Contributing Partner if you provide an interview or thought piece about your views and experience of carbon markets and trading. Your logo would appear on the home page of the new platform and the ‘Partners’ page, and your contribution would appear in the ‘Stories’ section."
                      }
                    </ListItem>
                    <ListItem>
                      {
                        "You can become a Supporting Partner if you want to show your support for the platform but do not wish to contribute a Story. You would simply provide your logo, which will appear in the dedicated section of the ‘Partners’ page."
                      }
                    </ListItem>
                  </UnorderedList>
                  <Text>
                    {
                      "Contributing and Supporting Partners do not need to make any financial contribution to the web platform."
                    }
                  </Text>
                </Stack>
              </AccordionPanel>
            </AccordionItemWrapper>
            <AccordionItemWrapper borderColor="gray.200">
              <Heading as="h4">
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    py={5}
                    fontSize={["lg", null, "xl"]}
                  >
                    {"What does contributing a Story involve?"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel color="gray.600" fontSize={["md", null, "lg"]}>
                <Stack spacing={5}>
                  <Text>
                    {"There are two main options for contributing a Story:"}
                  </Text>
                  <UnorderedList color="gray.600" fontSize={["md", null, "lg"]} spacing={5}>
                    <ListItem>
                      {
                        "Thought piece/commentary: you and BloombergNEF agree on a topic for the piece. It can be a Word document, PowerPoint slide deck and other format, it uses your branding, and it includes your copyright and disclaimer information. BloombergNEF checks that the piece is in line with the platform’s editorial standards and takes care of the uploading."
                      }
                    </ListItem>
                    <ListItem>
                      {
                        "Interview: BloombergNEF interviews a senior member of your team based on pre-agreed questions, and then types up the responses. You can review the copy before publication by BloombergNEF."
                      }
                    </ListItem>
                  </UnorderedList>
                </Stack>
              </AccordionPanel>
            </AccordionItemWrapper>
            <AccordionItemWrapper borderColor="gray.200">
              <Heading as="h4">
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    py={5}
                    fontSize={["lg", null, "xl"]}
                  >
                    {"How can I find out more about becoming a partner?"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel color="gray.600" fontSize={["md", null, "lg"]}>
                <Text>
                  {"To find out more, please email "}
                  <Link href="mailto:co2excel@bloomberg.net" color="red.500">
                    {"co2excel@bloomberg.net"}
                  </Link>
                  {" or click on the ‘Get involved’ button above."}
                </Text>
              </AccordionPanel>
            </AccordionItemWrapper>
          </Accordion>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export default FAQSection
