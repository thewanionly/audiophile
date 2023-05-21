import { Manrope } from 'next/font/google'

import StyledComponentsRegistry from '@/lib/styledComponentsRegistry'

const manrope = Manrope({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Audiophile',
  description: 'An e-commerce web application',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
