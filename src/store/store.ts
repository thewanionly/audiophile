import { create } from 'zustand'

import { createCartSlice } from './cart/slice'

type AppStore = CartSlice

export const useAppStore = create<AppStore>()((...a) => ({
  ...createCartSlice(...a),
}))
