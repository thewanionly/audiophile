import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { createCartSlice } from './cart/slice'

type AppStore = CartSlice

export const useAppStore = create<AppStore>()(
  persist(
    (...a) => ({
      ...createCartSlice(...a),
    }),
    {
      name: 'cart',
      skipHydration: true,
    }
  )
)
