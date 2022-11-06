import filterMetaData from "./filterMetaData.mjs"
import {
  createProperty,
  createLiteralProperty,
  createObject,
  createArray,
} from "./astHelpers.mjs"

function getAllTitles(text) {
  return text.match(/\#.+?\n/g).map((heading) => {
    const headingLevel = heading.split(" ")[0]
    return {
      level: "h" + headingLevel.split("").length,
      value: heading.replaceAll(/\#|\n/g, "").trim(),
    }
  })
}

export default function addTOCPlugin() {
  return (ast, file) => {
    const allTitles = getAllTitles(file.value)
    const metaDataNode = ast.body.find((s) => filterMetaData(s))
    metaDataNode?.declaration?.declarations[0].init?.properties?.push(
      createProperty({
        key: "anchors",
        value: createArray(
          allTitles.map(({ value, level }) => {
            return createObject([
              createLiteralProperty({ key: "value", value }),
              createLiteralProperty({ key: "level", value: level }),
            ])
          })
        ),
      })
    )
  }
}
