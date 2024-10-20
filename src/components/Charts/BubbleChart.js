import { useEffect } from "react"
import { Box } from "@chakra-ui/react"

import fetchDataset from "@/utils/api/client/fetchDataset"

export default function BubbleChart() {
  const width = 800
  const height = 400

  useEffect(() => {
    if (typeof window === "undefined") return undefined
    fetchDataset("/data/charts/bubble-chart.txt").then((data) => {
      const parsedData = data.map((d) => {
        return {
          ...d,
          x_val: parseFloat(d.x_val),
          y_val: parseFloat(d.y_val),
          size: parseFloat(d.size),
        }
      })
      console.log(parsedData)
    })
  }, [])

  return (
    <Box border="1px solid #F05">
      <svg viewBox={`0 0 ${width} ${height}`}></svg>
    </Box>
  )
}
