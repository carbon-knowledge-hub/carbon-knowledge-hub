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
        description="Carbon pricing can be an effective policy tool to make polluters pay for their greenhouse-gas emissions. Out of the 60 or so programs around the world, the most common are taxes and emission-trading programs. Broadly speaking, the former guarantees the carbon price and the latter delivers a guaranteed reduction in emissions."
        imgSrc="/images/carbon-pricing-at-a-glance.svg"
        href="/factsheets/carbon-pricing-at-a-glance"
      />
      <GetStartedItem
        title="How carbon trading works"
        description="Carbon permits may be traded as part of a mandatory program, with most transactions occurring on an exchange. Carbon offsets may also be traded by participants in some compliance programs as well as companies, governments and individuals with sustainability targets. Most trades are via broker."
        imgSrc="/images/carbon-pricing.svg"
        href="/factsheets/how-co2-trading-works"
      />
      <GetStartedItem
        title="Goals and impact of carbon pricing"
        description="A carbon price aims to ensure that the producers of greenhouse-gas emissions pay for the costs of such pollution. Such schemes have proved effective at reducing emissions, with social, economic and physical benefits. But devising an effective carbon-pricing policy is tricky."
        imgSrc="/images/goals-and-impact.svg"
        href="/factsheets/goals-and-impact"
      />
      <GetStartedItem
        title="Participants and their role in carbon trading"
        description="Compliance carbon markets typically involve governments, companies required to participate, and the finance and trading community. Voluntary carbon markets have a more complex value chain involving project developers, registries, brokers and corporations looking to meet their sustainability targets."
        imgSrc="/images/participants.svg"
        href="/factsheets/participants"
      />
      <GetStartedItem
        title="Current state of carbon trading"
        description="Governments have implemented over 30 compliance carbon markets around the world but few have prices high enough to drive decarbonization. Companies’ increasingly ambitious climate targets mean demand for carbon offsets has never been higher. But the voluntary carbon markets remain oversupplied."
        imgSrc="/images/current-status.svg"
        href="/factsheets/current-status"
      />
    </SimpleGrid>
  )
}
