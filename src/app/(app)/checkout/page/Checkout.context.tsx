'use client'

import { createContext, useContext, useState } from 'react'

type CheckoutContextValue = {
  isCheckingOut: boolean
  setIsCheckingOut: (value: boolean) => void
}

const initialCheckoutContextValue = {
  isCheckingOut: false,
  setIsCheckingOut: () => null,
}

const CheckoutContext = createContext<CheckoutContextValue>(initialCheckoutContextValue)

export const useCheckoutContext = () => useContext(CheckoutContext)

export const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const value = {
    isCheckingOut,
    setIsCheckingOut,
  }

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>
}
