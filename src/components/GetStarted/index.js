import { SimpleGrid } from "@chakra-ui/react"


import SectionHeader from "@/components/SectionHeader"
import GetStartedItem from "@/components/GetStartedItem"

export default function GetStarted({ }) {
  return (
    <SimpleGrid as="section" columns={8} gridGap={10}>
      <SectionHeader
        title="Get started"
        description="Take carbon markets 101 and learn the fundamentals behind carbon-pricing systems."
      />
      <GetStartedItem
        title="Carbon pricing at a glance"
        imgSrc="/images/carbon-pricing-at-a-glance.svg"
        href="/factsheets/carbon-pricing-at-a-glance"
      />
      <GetStartedItem
        title="How carbon trading works"
        imgSrc="/images/carbon-pricing.svg"
        href="/factsheets/how-co2-trading-works"
      />
      <GetStartedItem
        title="Goals and impact of carbon pricing"
        imgSrc="/images/goals-and-impact.svg"
        href="/factsheets/goals-and-impact"
      />
      <GetStartedItem
        title="Participants and their role in carbon trading"
        imgSrc="/images/participants.svg"
        href="/factsheets/participants"
      />
      <GetStartedItem
        title="Current state of carbon trading"
        imgSrc="/images/current-status.svg"
        href="/factsheets/current-status"
      />
    </SimpleGrid>
  )
}
