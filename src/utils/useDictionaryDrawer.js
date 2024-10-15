import { create } from "zustand"

export const useDictionaryStore = create((set) => ({
  isOpen: false,
  definition: "",
  description: "",
  onOpen: (definition, description) =>
    set({ isOpen: true, definition, description }),
  onClose: () => set({ isOpen: false, definition: "", description: "" }),
  terms: [],
  setTerms: (terms) => set({ terms }),
}))

export const useDictionaryDrawer = () => {
  return {}
}
