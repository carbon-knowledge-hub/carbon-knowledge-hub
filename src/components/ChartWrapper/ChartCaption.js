import { useChartStore } from "./store"

export default function ChartCaption({ caption }) {
  const source = useChartStore((state) => state.source)

  if (!caption && !source) return null

  const allCaption = [caption, source].join(" ").trim()

  return (
    <figcaption className="chart__caption" style={{ paddingTop: "1rem" }}>
      {allCaption}
    </figcaption>
  )
}
