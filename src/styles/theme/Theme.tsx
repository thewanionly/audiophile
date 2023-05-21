'use client'

import { ThemeProvider } from 'styled-components'

import { theme } from './theme'

export const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
