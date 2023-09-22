'use client'

import { useServerInsertedHTML } from 'next/navigation'

import createCache from '@emotion/cache'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import { theme } from '@/styles'

const createEmotionCache = () => createCache({ key: 'css', prepend: true })

export const StyleRegistry = ({ children }: { children: React.ReactNode }) => {
  const cache = createEmotionCache()
  cache.compat = true

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ))

  /**
   * Notes on theming:
   * 1. Need to wrap with ThemeProvider from emotion to access custom theme in the components.
   * 2. Now that we are wrapping a ThemeProvider from emotion, the MUI components would not work.
   *    To resolve, need to wrap with ThemeProvider from MUI with empty createTheme to retain its default theme.
   */

  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={createTheme()}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MuiThemeProvider>
    </CacheProvider>
  )
}
