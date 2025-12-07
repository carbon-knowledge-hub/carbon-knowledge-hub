import _groupBy from "lodash/groupBy"
import _sortBy from "lodash/sortBy"
import _sumBy from "lodash/sumBy"
import _uniqBy from "lodash/uniqBy"
import { extent as _extent } from "d3-array"

import getGroupColors from "./getGroupColors"

function getLineDataValueType(fixedXVal) {
  return ["", "year", "month", "day"][fixedXVal.split("-").length] || ""
}

function getLineDataValue(key, d) {
  const fixedXVal = `${d.x_val}`.trim()
  const isYear = fixedXVal.length === 4
  const valueType = getLineDataValueType(fixedXVal)
  const x_val = isYear ? `${fixedXVal}-01-01` : fixedXVal
  const y_val = parseFloat(d.y_val) || (isNaN(parseFloat(d.y_val)) ? "" : 0)
  return {
    key,
    x_val,
    y_val,
    unit: d.unit || d.y_unit || "",
    y_unit: d.y_unit || "",
    valueType,
    source: d.source || "",
  }
}

export function processLineChart(data, colors) {
  const grouped = Object.entries(_groupBy(data, (o) => o.group))
  const groupColors = getGroupColors(grouped, colors)

  const hasXMin = Object.keys(data[0]).includes("x_min")
  const hasXMax = Object.keys(data[0]).includes("x_max")
  const hasYMin = Object.keys(data[0]).includes("y_min")
  const hasYMax = Object.keys(data[0]).includes("y_max")

  const source = []

  const groupedByGroup = grouped.map(([groupName, groupValues], key) => {
    let unit = ""
    const data = _sortBy(
      groupValues
        .map((d, key) => {
          if (!unit) unit = d.unit?.trim() || d.y_unit?.trim()
          const lineData = getLineDataValue(key, d)
          source.push(lineData.source)
          return lineData
        })
        .filter((d) => !!d.x_val),
      (o) => parseFloat(o.x_val.split("-").join(""))
    )
    const group =
      groupName === "undefined" ? "no-group" : groupName || "no-group"
    const color = groupColors[groupName]
    return { key, group, color, unit: unit || "", data }
  })

  const allDomainValues = groupedByGroup.flatMap((d) => d.data)
  const allXValues = _sortBy(
    _uniqBy(allDomainValues.map((d) => d.x_val)),
    (o) => parseFloat(o.split("-").join(""))
  )
  const allYValues = _uniqBy(allDomainValues.map((d) => d.y_val)).filter(
    (d) => typeof d !== "string"
  )
  const xExtent = _extent(allXValues, (o) => o)
  const yExtent = _extent(allYValues, (o) => o)

  const xDomain = [
    hasXMin ? data[0].x_min : xExtent[0],
    hasXMax ? data[0].x_max : xExtent[1],
  ]
  const yDomain = [
    hasYMin ? data[0].y_min : yExtent[0],
    hasYMax ? data[0].y_max : yExtent[1],
  ]

  const xValueType = allDomainValues.map((d) => d.valueType).filter((d) => d)[0]

  const finalData = {
    data: groupedByGroup,
    groups: groupedByGroup.map((d) => d.group),
    source: source.filter((d) => !!d)[0] || "",
    domain: {
      allXValues,
      allYValues,
      xValueType,
      x: xDomain.map((dx, i) => dx.split("-")[0] + (!i ? "-01-01" : "-12-31")),
      y: [Math.min(yDomain[0]), Math.max(yDomain[1])],
    },
  }

  // console.groupCollapsed("Line chart processor")
  // console.log("Original data: ", data)
  // console.log("Processed data: ", finalData)
  // console.groupEnd()

  return finalData
}
