import { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import { StyleRegistry } from '@/lib/styleRegistry'
import { getNavLinks } from '@/services/cms'
import { GlobalStyles } from '@/styles'

import { Header } from './layout/Header'
import { Main } from './layout/Main'

// Fonts
const manrope = Manrope({ subsets: ['latin'], display: 'swap' })

// Metadata
export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'An e-commerce web application',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
  manifest: '/favicon/site.webmanifest',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navLinks = await getNavLinks()

  return (
    <html lang="en">
      <body className={manrope.className}>
        <StyleRegistry>
          <GlobalStyles />
          <Header navItems={navLinks} />
          <Main>{children}</Main>
        </StyleRegistry>
      </body>
    </html>
  )
}
