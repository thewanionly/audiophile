import { StateCreator } from 'zustand'

export const createCartSlice: StateCreator<CartSlice, [], [], CartSlice> = () => ({
  items: [],
})
