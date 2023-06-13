'use client'

import { NavItem } from '@/components'

import { Header } from '../Header'
import { Main } from '../Main'
import { NavMenu } from '../NavMenu'
import { LayoutProvider } from '../Layout.context'
import { Footer } from '../Footer'

type LayoutProps = {
  navLinks: NavItem[]
  footer: Footer
  children: React.ReactNode
}

export const Layout = ({ navLinks, footer, children }: LayoutProps) => {
  return (
    <LayoutProvider>
      <Header navItems={navLinks} />
      <NavMenu />
      <Main>{children}</Main>
      <Footer navItems={navLinks} data={footer} />
    </LayoutProvider>
  )
}
