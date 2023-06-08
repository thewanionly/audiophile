'use client'

import { NavItem } from '@/components'
import { Header } from '../Header'
import { Main } from '../Main'
import { NavMenu } from '../NavMenu'
import { LayoutProvider } from '../Layout.context'

type LayoutProps = {
  navLinks: NavItem[]
  children: React.ReactNode
}

export const Layout = ({ navLinks, children }: LayoutProps) => {
  return (
    <LayoutProvider>
      <Header navItems={navLinks} />
      <NavMenu />
      <Main>{children}</Main>
    </LayoutProvider>
  )
}
