import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { createCartSlice } from './cart/slice'

type AppStore = CartSlice

export const useAppStore = create<AppStore>()(
  devtools(
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
)
