import { useEffect, useState, useMemo, useRef } from "react"
import { scaleLinear, scaleSqrt } from "d3-scale"
import { max as d3Max, sort } from "d3-array"
import { useDebounceCallback, useResizeObserver } from "usehooks-ts"
import { HStack, Stack, Select, Text } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import { voronoi as d3voronoi } from "d3-voronoi"
import { create } from "zustand"

import fetchDataset from "@/utils/api/client/fetchDataset"

const useTooltipStore = create((set) => ({
  currentKey: null,
  currentItem: null,
  x: 0,
  y: 0,
  setCurrentKey: (currentKey, x, y, currentItem) =>
    set({ currentKey, x, y, currentItem }),
}))

function fixNumber(num) {
  return num
    .split(".")
    .map((d, i) => (!i ? d.replace(/[^0-9]/g, "") : d))
    .join(".")
    .trim()
}

export default function BubbleChart({ ratio = 2 }) {
  const ref = useRef(null)

  const [{ width, height }, setSize] = useState({
    width: 800,
    height: 800 / ratio,
  })

  const [dataRaw, setData] = useState([])
  // const [domains, setDomains] = useState({ x: [], y: [], size: [] })

  const [regionFilter, setRegionFilter] = useState("")
  const [programFilter, setProgramFilter] = useState("")
  const [economyFilter, setEconomyFilter] = useState("")

  // const noFilters = !regionFilter && !programFilter && !economyFilter

  const { data, domains, source } = useMemo(() => {
    if (!dataRaw?.length)
      return { data: [], domains: { x: [], y: [], size: [] } }

    const noFilters = !regionFilter && !programFilter && !economyFilter
    const parsed = noFilters
      ? dataRaw
      : dataRaw.filter((d) => {
          let isVisible = true
          if (regionFilter && isVisible)
            isVisible = d.continent === regionFilter
          if (programFilter && isVisible)
            isVisible = d.program_type === programFilter
          if (economyFilter && isVisible)
            isVisible = d.economy_type === economyFilter
          return isVisible
        })

    const domains = {
      x: [0, d3Max(dataRaw, (o) => o.carbon_price)],
      y: noFilters ? [0, 100] : [0, 100],
      // : [
      //     0,
      //     d3Max(
      //       dataRaw,
      //       (o) => o.share_of_economy_emissions_covered_by_carbon_price
      //     ),
      //   ],
      size: [0, d3Max(dataRaw, (o) => o.economy_total_emissions)],
    }

    const source = parsed.map((d) => d.source).filter((d) => !!d)[0]

    return { data: parsed, domains, source }
  }, [JSON.stringify(dataRaw), regionFilter, programFilter, economyFilter])
  const padding = {
    top: 48,
    left: 48,
    right: 48,
    bottom: 48,
  }

  useEffect(() => {
    if (typeof window === "undefined") return undefined
    fetchDataset(`/data/charts/bubble-chart.txt`).then((dataset) => {
      const parsed = dataset.map((d, i) => {
        return {
          ...d,
          key: i + 1,
          carbon_price: d.carbon_price
            ? parseFloat(fixNumber(d.carbon_price))
            : "",
          economy_total_emissions: d.economy_total_emissions
            ? parseFloat(fixNumber(d.economy_total_emissions))
            : "",
          share_of_economy_emissions_covered_by_carbon_price:
            d.share_of_economy_emissions_covered_by_carbon_price
              ? parseFloat(
                  fixNumber(
                    d.share_of_economy_emissions_covered_by_carbon_price
                  )
                )
              : "",
        }
      })
      setData(sort(parsed, (o) => -o.economy_total_emissions))
    })
  }, [])

  const [xMin, xMax] = domains.x

  const xScale = useMemo(() => {
    return scaleLinear()
      .domain([xMin, xMax])
      .range([padding.left, width - padding.right])
      .nice()
  }, [xMin, xMax, width, padding.left, padding.right])

  const [yMin, yMax] = domains.y

  const yScale = useMemo(() => {
    return scaleLinear()
      .domain([yMin, yMax])
      .range([height - padding.bottom, padding.top])
      .nice()
  }, [yMin, yMax, height, padding.bottom, padding.top])

  const [sizeMin, sizeMax] = domains.size

  const maxSize = Math.min(
    padding.top,
    padding.bottom,
    padding.left,
    padding.right
  )

  const sizeScale = useMemo(() => {
    return scaleSqrt().domain([sizeMin, sizeMax]).range([3, maxSize])
  }, [sizeMin, sizeMax, maxSize])

  // const xTicks = noFilters
  //   ? width < 800
  //     ? [0, 60, 120, 180]
  //     : [0, 20, 40, 60, 80, 100, 120, 140, 160, 180]
  //   : xScale.ticks()
  // const yTicks = noFilters ? [0, 20, 40, 60, 80, 100] : yScale.ticks()

  const xTicks =
    width < 800
      ? [0, 60, 120, 180]
      : [0, 20, 40, 60, 80, 100, 120, 140, 160, 180]
  const yTicks = [0, 20, 40, 60, 80, 100]

  const onResize = useDebounceCallback(({ width }) => {
    setSize({ width, height: width / ratio })
  }, 300)

  useResizeObserver({
    ref,
    onResize,
  })

  useEffect(() => {
    if (typeof window === "undefined") return undefined
  }, [regionFilter, programFilter, economyFilter])

  // const allValues = data.flatMap((d) => d.data)

  const tooltipPolygons = useMemo(() => {
    const voronoi = d3voronoi()
      .size([width, height])
      .x((d) => xScale(d.carbon_price))
      .y((d) => yScale(d.share_of_economy_emissions_covered_by_carbon_price))
    return voronoi(data).polygons()
  }, [width, height, JSON.stringify(data), xScale, yScale])

  return (
    <div>
      <HStack spacing={3} mb={5}>
        <Select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
          variant="filled"
          fontWeight={600}
          borderRadius="sm"
          size="lg"
          flex={1}
        >
          <option value="">{"All continents"}</option>
          <option value="Africa">{"Africa"}</option>
          <option value="Asia Pacific">{"Asia Pacific"}</option>
          <option value="Europe">{"Europe"}</option>
          <option value="Latin America">{"Latin America"}</option>
          <option value="North America">{"North America"}</option>
        </Select>

        <Select
          value={programFilter}
          onChange={(e) => setProgramFilter(e.target.value)}
          variant="filled"
          fontWeight={600}
          borderRadius="sm"
          size="lg"
          flex={1}
        >
          <option value="">{"All programs"}</option>
          <option value="Tax">{"Tax"}</option>
          <option value="Market">{"Market"}</option>
        </Select>

        <Select
          value={economyFilter}
          onChange={(e) => setEconomyFilter(e.target.value)}
          variant="filled"
          fontWeight={600}
          borderRadius="sm"
          size="lg"
          flex={1}
        >
          <option value="">{"All economy types"}</option>
          <option value="Emerging market">{"Emerging market"}</option>
          <option value="Developed economy">{"Developed economy"}</option>
        </Select>
      </HStack>

      <div ref={ref} style={{ position: "relative" }}>
        <svg viewBox={`0 0 ${width} ${height}`}>
          {xMax && yMax && (
            <g stroke="var(--chakra-colors-gray-200)" strokeWidth={1}>
              {xTicks.map((tick, i, a) => {
                const isLast = i === a.length - 1
                return (
                  <g key={tick} transform={`translate(${xScale(tick)} 0)`}>
                    <text
                      x={0}
                      y={height - 4}
                      textAnchor="middle"
                      alignmentBaseline="baseline"
                      fontSize={14}
                      fontWeight={600}
                      stroke="#FFF"
                      strokeWidth={4}
                      strokeLinejoin="round"
                      paintOrder="stroke fill"
                    >
                      {isLast ? `${tick}$/mt` : tick || ""}
                    </text>
                    <line y1={0} y2={tick ? height - 24 : height} />
                  </g>
                )
              })}

              {yTicks.map((tick, i, a) => {
                const isLast = i === a.length - 1
                return (
                  <g key={tick} transform={`translate(0 ${yScale(tick)})`}>
                    <text
                      x={4}
                      y={-4}
                      alignmentBaseline="baseline"
                      fontSize={14}
                      fontWeight={600}
                      stroke="#FFF"
                      strokeWidth={4}
                      strokeLinejoin="round"
                      paintOrder="stroke fill"
                    >
                      {isLast
                        ? `${tick}% of economy emissions covered by carbon price`
                        : tick || ""}
                    </text>
                    <line x1={0} x2={width} />
                  </g>
                )
              })}
              <g transform={`translate(${xScale(95)} 0)`}>
                <line y1={0} y2={height - 24} stroke="#000" strokeWidth={2} />
                <text
                  stroke="#FFF"
                  strokeWidth={10}
                  strokeLinejoin="round"
                  paintOrder="stroke fill"
                  y={height * 0.85}
                  textAnchor="middle"
                  fontSize={14}
                  fontWeight={600}
                >
                  {" 2030 price needed for 2C pathway"}
                </text>
              </g>
            </g>
          )}

          <TooltipTarget width={width} height={height} />

          <text
            x={padding.left - 4}
            y={height - padding.bottom + 4}
            fontWeight={600}
            fontSize={14}
            textAnchor="end"
            alignmentBaseline="hanging"
          >
            {"0"}
          </text>

          <AnimatePresence>
            {data.map((d) => (
              <Bubble
                key={d.key}
                xScale={xScale}
                yScale={yScale}
                sizeScale={sizeScale}
                data={d}
              />
            ))}
          </AnimatePresence>

          <Tooltips
            data={tooltipPolygons}
            width={width}
            height={height}
            xScale={xScale}
            yScale={yScale}
          />
        </svg>
        <TooltipOverlay width={width} height={height} />
      </div>

      <div style={{ paddingTop: "1.5rem" }}>{source}</div>
    </div>
  )
}

function Bubble({ data = {}, xScale, yScale, sizeScale }) {
  const x = data.carbon_price
  const y = data.share_of_economy_emissions_covered_by_carbon_price
  const r = data.economy_total_emissions
  const currentKey = useTooltipStore((state) => state.currentKey)
  const isSelected = currentKey === data.key
  return (
    <>
      <motion.circle
        fill={
          isSelected
            ? "var(--chakra-colors-blue-600)"
            : "var(--chakra-colors-blue-500)"
        }
        stroke="#FFF"
        strokeWidth={3}
        paintOrder="stroke fill"
        initial={{ x: xScale(x), y: yScale(y), r: 0 }}
        animate={{ x: xScale(x), y: yScale(y), r: sizeScale(r) }}
        exit={{ x: xScale(x), y: yScale(y), r: 0 }}
        transition={{ duration: 0.5, bounce: 0, type: "spring" }}
      />
      {isSelected && (
        <circle
          cx={xScale(x)}
          cy={yScale(y)}
          r={sizeScale(r) + 2.5}
          fill="none"
          stroke="var(--chakra-colors-blue-600)"
          strokeWidth={2}
        />
      )}
    </>
  )
}

function Tooltips({ data = [], width, height, xScale, yScale }) {
  const setCurrentKey = useTooltipStore((state) => state.setCurrentKey)
  return (
    <g>
      {data.map((d, i) => (
        <path
          key={i}
          d={`M${d.join("L")}Z`}
          fill="transparent"
          onMouseEnter={() => {
            setCurrentKey(
              d.data.key,
              xScale(parseFloat(d.data.carbon_price)),
              yScale(
                parseFloat(
                  d.data.share_of_economy_emissions_covered_by_carbon_price
                )
              ),
              d.data
            )
          }}
          onMouseLeave={() => setCurrentKey(null)}
        />
      ))}
    </g>
  )
}

function TooltipTarget({ width, height }) {
  const x = useTooltipStore((state) => state.x)
  const y = useTooltipStore((state) => state.y)
  if (!x || !y) return null
  return (
    <path
      d={`M${x},0L${x},${height}M0,${y}L${width},${y}`}
      stroke="#999"
      strokeWidth={1}
      fill="none"
    />
  )
}

function TooltipOverlay({ width, height }) {
  const x = useTooltipStore((state) => state.x)
  const y = useTooltipStore((state) => state.y)
  const currentItem = useTooltipStore((state) => state.currentItem)
  if (!currentItem) return null
  return (
    <div
      style={{
        position: "absolute",
        left: x || 0,
        top: y || 0,
        pointerEvents: "none",
        padding: "0.5rem",
        width: "33%",
        transform: `translate(${x > width / 2 ? "-100%" : "0"}, ${
          y > height / 2 ? "-100%" : "0"
        })`,
      }}
    >
      <Stack
        spacing={1}
        style={{
          background: "#000",
          color: "#FFF",
          padding: "1rem",
          width: "100%",
          boxShadow: "0 0.25rem 0.5rem rgba(0,0,0,0.1)",
        }}
      >
        <Text
          fontSize="xs"
          lineHeight="shorter"
          fontWeight={600}
          color="gray.300"
        >{`${currentItem.continent}`}</Text>
        <Text
          fontSize="md"
          lineHeight="shorter"
          fontWeight={600}
        >{`${currentItem.program_name} (${currentItem.program_type})`}</Text>
        <Text fontSize="sm" lineHeight="shorter" color="gray.300">
          {`Carbon price: `}
          <Text
            as="span"
            color="white"
            fontSize="inherit"
            lineHeight="inherit"
            fontWeight={600}
          >{`${currentItem.carbon_price}${currentItem.carbon_price_unit}`}</Text>
        </Text>
        <Text fontSize="sm" lineHeight="shorter" color="gray.300">
          <Text
            as="span"
            color="white"
            fontSize="inherit"
            lineHeight="inherit"
            fontWeight={600}
          >{`${currentItem.share_of_economy_emissions_covered_by_carbon_price}%`}</Text>
          {` of economy emissions covered by carbon price`}
        </Text>
      </Stack>
    </div>
  )
}
