import { useEffect, useState } from 'react'

import { useAppStore } from '../store'

// Source: https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md#how-can-i-check-if-my-store-has-been-hydrated
export const useIsStoreHydrated = () => {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    // Note: This is just in case you want to take into account manual rehydration.
    // You can remove the following line if you don't need it.
    const unsubHydrate = useAppStore.persist.onHydrate(() => setHydrated(false))

    const unsubFinishHydration = useAppStore.persist.onFinishHydration(() => setHydrated(true))

    setHydrated(useAppStore.persist.hasHydrated())

    return () => {
      unsubHydrate()
      unsubFinishHydration()
    }
  }, [])

  return hydrated
}
