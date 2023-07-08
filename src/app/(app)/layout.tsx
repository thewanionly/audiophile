import { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import { StyleRegistry } from '@/lib/styleRegistry'
import { getFooter, getNavLinks } from '@/services/cms/content'
import { getCategories } from '@/services/cms/products'
import { GlobalStyles } from '@/styles'

import { Layout } from './layout/Layout'

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
  const categories = await getCategories()
  const navLinks = await getNavLinks()
  const footer = await getFooter()

  return (
    <html lang="en">
      <body className={manrope.className}>
        <StyleRegistry>
          <GlobalStyles />
          <Layout categories={categories} navLinks={navLinks} footer={footer}>
            {children}
          </Layout>
        </StyleRegistry>
      </body>
    </html>
  )
}
