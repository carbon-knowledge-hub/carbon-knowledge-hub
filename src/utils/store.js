import create from "zustand"

import { routes } from "@utils/dynamicRoutes"

const initialFactsheets = routes.filter((d) => d.href.includes("/factsheets/"))
const initialBasics = routes.filter((d) => d.href.includes("/basics/"))

export const useStore = create((set) => ({
  message: "Hello, world!",
  tooltipX: 0,
  tooltipY: 0,
  tooltipContent: "",
  setTooltip: ({ tooltipX, tooltipY, tooltipContent }) => {
    set({ tooltipX, tooltipY, tooltipContent })
  },
}))

export const useBasicsStore = create((set) => ({
  basics: initialBasics,
}))

export const useFactsheetStore = create((set) => ({
  filters: [],
  selectedFilters: [],
  setSelectedFilters: (selectedFilters) => set({ selectedFilters }),
  factsheets: initialFactsheets,
}))
