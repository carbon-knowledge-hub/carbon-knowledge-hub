import { createContext, useContext } from "react"

export const PartnersContext = createContext({ partners: [] })

export const PartnersProvider = PartnersContext.Provider

export const usePartnersContext = (partnerType) => {
  const { partners } = useContext(PartnersContext)
  return partnerType ? partners.filter((d) => d.type === partnerType) : partners
}
