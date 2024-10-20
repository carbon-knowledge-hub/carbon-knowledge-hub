import { SimpleGrid } from "@chakra-ui/react"
import day from "dayjs"

import SectionHeader from "@/components/SectionHeader"
import UpdatesListItem from "@/components/UpdatesListItem"

export default function LatestUpdates({ updates }) {
  return (
    <SimpleGrid columns={[1, null, 2, 3, 4]} gridGap={10}>
      <SectionHeader
        title="Latest updates"
        description="See what's new on the Carbon Knowledge Hub"
      />
      {updates.map((updateItem, i) => {
        return (
          <UpdatesListItem
            key={updateItem.title}
            href={updateItem.slug || updateItem.url}
            date={day(updateItem.date).format("DD MMM YYYY")}
            type={
              updateItem.type ||
              updateItem.mediaCategory?.split("-").slice(0, -1).join("-")
            }
            title={updateItem.title}
          />
        )
      })}
    </SimpleGrid>
  )
}
