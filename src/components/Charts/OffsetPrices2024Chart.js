import { useEffect, useState, useMemo } from "react"
import { Stack, HStack, SimpleGrid, Box, Tooltip } from "@chakra-ui/react"
import { scaleLinear } from "d3-scale"

import fetchDataset from "@/utils/api/client/fetchDataset"

export default function OffsetPrices2024Chart() {
  const [data, setData] = useState([])

  useEffect(() => {
    if (typeof window === "undefined") return undefined
    fetchDataset("/data/charts/offset-prices-2024.txt").then((d) => setData(d))
  }, [])

  const scale = useMemo(() => scaleLinear().domain([0, 45]).range([0, 100]), [])

  return (
    <Stack spacing={12}>
      <SimpleGrid columns={8} gridGap={10} position="sticky" top={0} zIndex={2}>
        <HStack
          bg="white"
          gridColumn="3 / -1"
          spacing={2}
          justifyContent="space-between"
          py={2}
        >
          <Box fontWeight={600} fontSize="sm">
            {"0"}
          </Box>
          <Box flex={1} h="0.0625rem" bg="gray.200" />
          <Box fontSize="sm" fontWeight={600} flex="none" textAlign="center">
            {"$ per metric ton"}
          </Box>
          <Box flex={1} h="0.0625rem" bg="gray.200" />
          <Box fontWeight={600} fontSize="sm">
            {"45"}
          </Box>
        </HStack>
      </SimpleGrid>
      {data.map((d) => {
        const x1 = scale(parseFloat(d.min)) // These are the wrong way around
        const x2 = scale(parseFloat(d.max)) // These are the wrong way around
        const xAverage = scale(parseFloat(d.average))

        const w = x2 - x1

        const p1 = x1
        const p2 = xAverage - x1
        const p3 = x2 - xAverage
        const p4 = 100 - x2

        return (
          <SimpleGrid
            key={d.sector}
            columns={8}
            gridGap={10}
            alignItems="center"
          >
            <Box
              gridColumn="1 / 3"
              fontWeight={600}
              lineHeight="shorter"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {d.sector}
            </Box>
            <Box gridColumn="3 / -1" h={6} bg="gray.100" position="relative">
              <Tooltip
                p={0}
                maxW="50vw"
                label={
                  <HStack spacing={5} p={3} bg="black" color="white">
                    <Box
                      fontWeight={600}
                      whiteSpace="nowrap"
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {d.sector}
                    </Box>
                    <Box whiteSpace="nowrap">{`${
                      Math.round(d.average * 100) / 100
                    } $/mt`}</Box>
                  </HStack>
                }
                hasArrow
              >
                <Box
                  h={6}
                  bg="blue.500"
                  _hover={{ bg: "blue.600" }}
                  color="gray.500"
                  position="absolute"
                  boxShadow="-0.125rem 0 0 #FFF, 0.125rem 0 0 #FFF"
                  style={{
                    left: `${x1}%`,
                    width: w ? `${w}%` : "1.25rem",
                    marginLeft: w ? 0 : "-0.625rem",
                  }}
                >
                  {w ? (
                    <Box
                      fontSize="xs"
                      fontWeight={600}
                      lineHeight="1"
                      position="absolute"
                      top="50%"
                      left={0}
                      px={1}
                      style={{
                        color: p1 > p2 ? "currentcolor" : "white",
                        transform: `translate(${
                          p1 > p2 ? "-100%" : "0"
                        }, -50%)`,
                      }}
                    >
                      {d.min}
                    </Box>
                  ) : null}
                  {w ? (
                    <Box
                      fontSize="xs"
                      fontWeight={600}
                      lineHeight="1"
                      position="absolute"
                      top="50%"
                      right={0}
                      color="gray.500"
                      px={1}
                      style={{
                        color: p4 > p3 ? "currentcolor" : "white",
                        transform: `translate(${p4 > p3 ? "100%" : "0"}, -50%)`,
                      }}
                    >
                      {d.max}
                    </Box>
                  ) : null}
                </Box>
              </Tooltip>
              <Box
                h={8}
                w="0.125rem"
                ml="-0.0625rem"
                position="absolute"
                bg="black"
                top={-1}
                boxShadow="-0.125rem 0 0 #FFF, 0.125rem 0 0 #FFF"
                pointerEvents="none"
                style={{ left: `${xAverage}%` }}
              >
                <Box
                  position="absolute"
                  bottom="100%"
                  left="50%"
                  transform="translateX(-50%)"
                  fontWeight={600}
                  fontSize="xs"
                  lineHeight="1"
                >
                  {"Average"}
                </Box>
                <Box
                  position="absolute"
                  top="100%"
                  left="50%"
                  transform="translateX(-50%)"
                  fontWeight={600}
                  fontSize="xs"
                  lineHeight="1"
                  mt={1}
                  whiteSpace="nowrap"
                >
                  {`${Math.round(d.average * 100) / 100}`}
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        )
      })}
    </Stack>
  )
}
