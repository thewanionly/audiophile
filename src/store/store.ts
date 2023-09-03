import { useEffect } from 'react'

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

// Re-hydrate app store on mount
export const useRehydrateAppStore = () => {
  useEffect(() => {
    useAppStore.persist.rehydrate()
  }, [])
}
