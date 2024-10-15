import { SimpleGrid } from "@chakra-ui/react"

import SectionHeader from "@/components/SectionHeader"
import UpdatesListItem from "@/components/UpdatesListItem"

export default function LatestUpdates() {
  return (
    <SimpleGrid columns={[1, null, 2, 3, 4]} gridGap={10}>
      <SectionHeader
        title="Latest updates"
        description="See what's new on the Carbon Knowledge Hub"
      />
      <UpdatesListItem />
      <UpdatesListItem />
      <UpdatesListItem />
      <UpdatesListItem />
      <UpdatesListItem />
      <UpdatesListItem />
      <UpdatesListItem />
      <UpdatesListItem />
    </SimpleGrid>
  )
}