import { useEffect } from 'react'

import { useAppStore } from '../store'

// Re-hydrate app store on mount
export const useRehydrateAppStore = () => {
  useEffect(() => {
    useAppStore.persist.rehydrate()
  }, [])
}
