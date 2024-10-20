import { useIsClient } from "usehooks-ts"

import useCustomColors from "./useCustomColors"
import { ChartStoreProvider } from "./store"
import ChartDataWrapper from "./ChartDataWrapper"
import ChartCaption from "./ChartCaption"

/**
 * Chart Wrapper
 *
 * This is the outermost wrapper of the chart
 * Determines whether this is rendered on the client side
 * and what the dimensions of the wrapper are.
 *
 */
export default function ChartWrapper({
  colors,
  chartType = "",
  orientation,
  src = "",
  data,
  chartPadding,
  title = "",
  caption = "",
  ratio = 16 / 9,
  onDataLoad,
  yAxisLabel = "",
  showLegend,
}) {
  const isClient = useIsClient()
  const customColors = useCustomColors(colors)

  if (!isClient) return null

  return (
    <section className={`chart ${chartType}-chart`}>
      {title && <h2 className="chart__title">{title}</h2>}
      <figure>
        <ChartStoreProvider>
          {isClient && (
            <ChartDataWrapper
              chartType={chartType}
              src={src}
              defaultData={data}
              colors={customColors}
              orientation={orientation}
              chartPadding={chartPadding}
              ratio={ratio}
              onDataLoad={onDataLoad}
              yAxisLabel={yAxisLabel}
              showLegend={showLegend}
            />
          )}
          <ChartCaption caption={caption} />
        </ChartStoreProvider>
      </figure>
    </section>
  )
}
