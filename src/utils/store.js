import create from "zustand"
import uniqBy from "lodash/uniqBy"
import sortBy from "lodash/sortBy"

import { routes } from "@utils/dynamicRoutes"

/**
 * Basics store
 *
 * This store is primarily used for the display of the basics
 * on the /basics page
 *
 */

const initialBasics = sortBy(
  routes.filter((d) => d.href.includes("/basics/") && d.publish),
  (o) => o.order || 9999
)

export const useBasicsStore = create((set) => ({
  basics: initialBasics,
}))

/**
 * Factsheets store
 *
 * This store is primarily used for the display and filtering
 * of the factsheets on the /factsheets page
 *
 */

const isPublished = (d) => !d.hasOwnProperty("publish") || d.publish

const initialFactsheets = routes
  .filter((d) => d.href.includes("/factsheets/") && isPublished(d))
  .map((d) => {
    const filters = {
      marketType: d.marketType?.map((dd) => dd.toLowerCase()),
      organizationType: d.organizationType?.map((dd) => dd.toLowerCase()),
      tags: d.tags?.map((dd) => dd.toLowerCase()),
      level: d.level?.toLowerCase(),
    }
    return { ...d, isVisible: true, filters }
  })

const allMarketTypes = uniqBy(
  initialFactsheets.flatMap((d) => {
    return d.marketType.map((d) => d.toLowerCase())
  })
)

const allOrganizationTypes = uniqBy(
  initialFactsheets.flatMap((d) => {
    return d.organizationType.map((d) => d.toLowerCase())
  })
)

const allLevels = uniqBy(initialFactsheets.map((d) => d.level.toLowerCase()))

const initialFilters = [
  {
    id: 1,
    label: "Market type",
    selector: "marketType",
    options: ["all", ...allMarketTypes],
    value: "all",
  },
  {
    id: 2,
    label: "Organization type",
    selector: "organizationType",
    options: ["all", ...allOrganizationTypes],
    value: "all",
  },
  {
    id: 3,
    label: "Level",
    selector: "level",
    options: ["all", ...allLevels],
    value: "all",
  },
]

export const useFactsheetStore = create((set) => ({
  filters: initialFilters,
  updateSelectedFilters: (id, value) => {
    set((state) => {
      const newFilters = state.filters.map((d) => {
        if (d.id !== id) return d
        return { ...d, value }
      })

      const showAll = newFilters.reduce((acc, cur) => {
        return acc ? cur.value === "all" : acc
      }, true)

      const newFactsheets = showAll
        ? initialFactsheets
        : newFilters.reduce((acc, cur, i) => {
            if (!i) acc = initialFactsheets
            if (cur.value === "all") return acc
            return acc.map((d) => {
              const isVisible = d.isVisible
                ? d.filters[cur.selector].includes(cur.value)
                : d.isVisible
              return { ...d, isVisible }
            })
          }, [])

      return {
        filters: newFilters,
        factsheets: newFactsheets,
      }
    })
  },
  factsheets: initialFactsheets,
}))
