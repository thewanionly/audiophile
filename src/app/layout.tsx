import { Manrope } from 'next/font/google'

import StyledComponentsRegistry from '@/lib/styledComponentsRegistry'
import { GlobalStyles, Theme } from '@/styles'

const manrope = Manrope({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Audiophile',
  description: 'An e-commerce web application',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Theme>
          <GlobalStyles />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Theme>
      </body>
    </html>
  )
}
