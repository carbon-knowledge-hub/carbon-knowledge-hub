import { Grid } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { range } from "d3-array"

export default function BBGrid({
  bg = "transparent",
  color = "gray.300",
  columns = 14,
  rows = 4,
  ...props
}) {
  const smColumns = Math.max(columns - 6, 0)
  const mdColumns = Math.max(columns - smColumns - 2, 0)
  const lgColumns = Math.max(columns - smColumns - mdColumns, 0)

  const maxColumns = smColumns + mdColumns * 2 + lgColumns * 4

  const gridSizeSm = `calc((100vw - 5rem - (${
    maxColumns - 1
  } * 0.0625rem)) / ${maxColumns})`
  const gridSizeMd = `calc((100vw - 5rem - (${
    maxColumns / 2 - 1
  } * 0.0625rem)) / ${maxColumns / 2})`
  const gridSizeLg = `calc((100vw - 5rem - (${
    maxColumns / 2 / 2 - 1
  } * 0.0625rem)) / ${maxColumns / 2 / 2})`

  const backgroundGridColumns = [
    range(smColumns)
      .map(() => gridSizeSm)
      .join(" 0.0625rem "),
    range(mdColumns)
      .map(() => gridSizeMd)
      .join(" 0.0625rem "),
    range(lgColumns)
      .map(() => gridSizeLg)
      .join(" 0.0625rem "),
  ]
    .filter((d) => d)
    .join(" 0.0625rem ")

  const backgroundGridRows = range(rows)
    .map(() => gridSizeSm)
    .join(" 0.0625rem ")

  const baseStyleY = {
    background: "currentcolor",
    gridRow: "1 / -1",
    transformOrigin: "top",
  }

  const baseStyleX = {
    background: "currentcolor",
    transformOrigin: "left",
  }

  const transitionConfig = { duration: 1.5, bounce: 0, type: "spring" }

  const delay = 0.05

  return (
    <Grid
      gridTemplateColumns={backgroundGridColumns}
      gridTemplateRows={backgroundGridRows}
      color={color}
      bg={bg}
      sx={{
        ".grid-y": baseStyleY,
        ".grid-x": baseStyleX,
      }}
      {...props}
    >
      {range(smColumns + mdColumns + lgColumns - 1).map((col) => {
        return (
          <motion.div
            key={col}
            className="grid-y"
            style={{ gridColumnStart: `${(col + 1) * 2}` }}
            animate={{ scaleY: [0, 1] }}
            transition={{ ...transitionConfig, delay: col * delay }}
          />
        )
      })}
      {range(rows - 1).map((row) => {
        const isLong = !((row + 1) % 2)
        const isVeryLong = !((row + 1) % 4)
        const gridSpan = isVeryLong
          ? smColumns * 2 + mdColumns * 2 + lgColumns * 2
          : isLong
          ? smColumns * 2 + mdColumns * 2
          : smColumns * 2
        return (
          <motion.div
            key={row}
            className="grid-x"
            style={{
              gridRowStart: `${(row + 1) * 2}`,
              gridColumn: gridSpan ? `1 / span ${gridSpan}` : "none",
            }}
            animate={{ scaleX: [0, 1] }}
            transition={{ ...transitionConfig, delay: row * delay }}
          />
        )
      })}
    </Grid>
  )
}
