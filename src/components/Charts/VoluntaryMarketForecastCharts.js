import { SimpleGrid, Stack, Heading } from "@chakra-ui/react"
import { max as d3Max } from "d3-array"

import ChartWrapper from "@/components/ChartWrapper"

export default function VoluntaryMarketForecastCharts() {
  return (
    <SimpleGrid columns={[1, null, null, 3]} gridGap={10}>
      <Stack spacing={5} justifyContent="space-between">
        <Heading as="h3" fontSize="lg">
          {"Voluntary market scenario, elastic fundamental demand"}
        </Heading>
        <ChartWrapper
          chartType="line"
          src="voluntary-market-forecast.txt"
          ratio={4 / 3}
          chartPadding={{ bottom: 32, left: 20, right: 0 }}
          yAxisLabel="$ per metric ton CO2e"
          onDataLoad={(_, dataset) => {
            const y_max = d3Max(dataset, (o) => parseFloat(o.y_val))
            return dataset
              .filter(
                (d) =>
                  d.group ===
                  "Voluntary market scenario, elastic fundamental demand"
              )
              .map((d) => ({
                ...d,
                y_min: 0,
                y_max,
                y_unit: "$/mt",
                y_val: d.y_val
                  ? `${Math.round(parseFloat(d.y_val) * 100) / 100}`
                  : d.y_val,
              }))
          }}
        />
      </Stack>
      <Stack spacing={5} justifyContent="space-between">
        <Heading as="h3" fontSize="lg">
          {"Removal scenario, least-cost decarbonization"}
        </Heading>
        <ChartWrapper
          chartType="line"
          src="voluntary-market-forecast.txt"
          ratio={4 / 3}
          chartPadding={{ bottom: 32, left: 20, right: 0 }}
          yAxisLabel="$ per metric ton CO2e"
          onDataLoad={(_, dataset) => {
            const y_max = d3Max(dataset, (o) => parseFloat(o.y_val))
            return dataset
              .filter(
                (d) =>
                  d.group === "Removal scenario, least-cost decarbonization"
              )
              .map((d) => ({
                ...d,
                y_min: 0,
                y_max,
                y_unit: "$/mt",
                y_val: d.y_val
                  ? `${Math.round(parseFloat(d.y_val) * 100) / 100}`
                  : d.y_val,
              }))
          }}
        />
      </Stack>
      <Stack spacing={5} justifyContent="space-between">
        <Heading as="h3" fontSize="lg">
          {"High-quality scenario, inelastic fundamental demand"}
        </Heading>
        <ChartWrapper
          chartType="line"
          src="voluntary-market-forecast.txt"
          ratio={4 / 3}
          chartPadding={{ bottom: 32, left: 20, right: 0 }}
          yAxisLabel="$ per metric ton CO2e"
          onDataLoad={(_, dataset) => {
            const y_max = d3Max(dataset, (o) => parseFloat(o.y_val))
            return dataset
              .filter(
                (d) =>
                  d.group ===
                  "High-quality bifurcation scenario, inelastic fundamental demand"
              )
              .map((d) => ({
                ...d,
                y_min: 0,
                y_max,
                y_unit: "$/mt",
                y_val: d.y_val
                  ? `${Math.round(parseFloat(d.y_val) * 100) / 100}`
                  : d.y_val,
              }))
          }}
        />
      </Stack>
    </SimpleGrid>
  )
}
