'use client'

import { createContext, useCallback, useContext, useState } from 'react'

type LayoutContextValue = {
  isNavMenuOpen: boolean
  toggleNavMenu: () => void
  closeNavMenu: () => void
  isHeroSectionVisible: boolean
  setIsHeroSectionVisible: (value: boolean) => void
}

const initialLayoutContextValue = {
  isNavMenuOpen: false,
  toggleNavMenu: () => null,
  closeNavMenu: () => null,
  isHeroSectionVisible: false,
  setIsHeroSectionVisible: () => null,
}

const LayoutContext = createContext<LayoutContextValue>(initialLayoutContextValue)

export const useLayoutContext = () => useContext(LayoutContext)

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)
  const [isHeroSectionVisible, setIsHeroSectionVisible] = useState(false)

  const closeNavMenu = useCallback(() => {
    setIsNavMenuOpen(false)
  }, [])

  const toggleNavMenu = useCallback(() => {
    setIsNavMenuOpen((prevValue) => !prevValue)
  }, [])

  const value = {
    isNavMenuOpen,
    toggleNavMenu,
    closeNavMenu,
    isHeroSectionVisible,
    setIsHeroSectionVisible,
  }

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}
