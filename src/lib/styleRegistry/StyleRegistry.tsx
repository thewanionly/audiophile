'use client'

// import { CacheProvider } from '@emotion/react'
// import { useServerInsertedHTML } from 'next/navigation'

import { theme } from '@/styles'
import { ThemeProvider } from '@emotion/react'

// export const StyleRegistry = ({ children }: { children: React.ReactNode }) => {
//   const cache = useEmotionCache()
//   cache.compat = true

//   useServerInsertedHTML(() => (
//     <style
//       data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
//       dangerouslySetInnerHTML={{
//         __html: Object.values(cache.inserted).join(' '),
//       }}
//     />
//   ))

//   return (
//     <CacheProvider value={cache}>
//       <MantineProvider withGlobalStyles withNormalizeCSS theme={{ other: theme }}>
//         {children}
//       </MantineProvider>
//     </CacheProvider>
//   )
// }

export const StyleRegistry = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={{ other: theme }}>{children}</ThemeProvider>
}
