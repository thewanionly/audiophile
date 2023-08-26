import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

export const useEffectOnUpdate = (effect: EffectCallback, deps?: DependencyList) => {
  const isFirst = useRef(true)

  useEffect(() => {
    if (!isFirst.current) {
      return effect()
    }

    isFirst.current = false

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
