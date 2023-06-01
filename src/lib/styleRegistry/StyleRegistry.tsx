'use client'

import { useServerInsertedHTML } from 'next/navigation'
import createCache from '@emotion/cache'
import { CacheProvider, ThemeProvider } from '@emotion/react'

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

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={{ other: theme }}>{children}</ThemeProvider>
    </CacheProvider>
  )
}
