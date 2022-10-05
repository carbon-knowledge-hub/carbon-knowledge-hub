import groupBy from "lodash/groupBy.js"
import sortBy from "lodash/sortBy.js"

import filterMetaData from "./filterMetaData.mjs"
import {
  createLiteralProperty,
  createLiteral,
  createArrayProperty,
} from "./astHelpers.mjs"

const getLayout = (p) => {
  if (p.includes("/factsheets/")) return "factsheets"
  if (p.includes("/basics/")) return "basics"
  return "page"
}

const getKeywords = (text) => {
  const wordsToExclude = [
    "tags",
    "factsheet",
    "this",
    "that",
    "export",
    "const",
    "title",
    "metadata",
    "also",
    "like",
    "text",
    "item",
  ]

  const cleanWords = text
    .split("\n")
    .join(" ")
    .split("  ")
    .join(" ")
    .replace(/export const metaData \= \{.+?\}/, "")
    .toLowerCase()
    .replaceAll(/\#|\*|\<|\>|\.|\:|\;|\,/g, "")
    .split(" ")
    .filter(
      (d) =>
        d &&
        d.length > 3 &&
        !wordsToExclude.includes(d) &&
        `${d[0]}${d.slice(-1)[0]}` !== "{}"
    )

  const wordCounts = Object.entries(groupBy(cleanWords)).map((d) => {
    return { name: d[0], count: d[1].length }
  })

  return sortBy(wordCounts, (o) => -o.count).slice(0, 10)
}

export default function addMetadataPlugin() {
  return (ast, file) => {
    const layout = getLayout(file.history[0])
    const keywords = getKeywords(file.value)
    const metaDataNode = ast.body.find((s) => filterMetaData(s))
    metaDataNode?.declaration?.declarations[0].init?.properties?.push(
      createLiteralProperty({ key: "layout", value: layout })
    )
    metaDataNode?.declaration?.declarations[0].init?.properties?.push(
      createArrayProperty({
        key: "keywords",
        value: keywords.map(({ name }) => createLiteral(name)),
      })
    )
  }
}
