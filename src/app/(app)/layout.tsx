import { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import { MantineRegistry } from '@/lib'
import { client } from 'cms/sanity/lib/client'

import { Header } from './Header'
import { Main } from './Main'

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

// CMS
async function getNavLinks() {
  const navLinksQuery = `*\[_type == "navLink"\] {
    label,
    href,
    order,
  }`

  const data = await client.fetch(navLinksQuery)

  return data
}

interface NavLink {
  label: string
  href: string
  order: number
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navLinks: NavLink[] = await getNavLinks()

  return (
    <html lang="en">
      <body className={manrope.className}>
        <MantineRegistry>
          <Header navItems={navLinks} />
          <Main>{children}</Main>
        </MantineRegistry>
      </body>
    </html>
  )
}
