'use client'

import { NavItem } from '@/components'

import { Header } from '../Header'
import { NavMenu } from '../NavMenu'
import { LayoutProvider } from '../Layout.context'
import { Footer } from '../Footer'

type LayoutProps = {
  categories: Category[]
  navLinks: NavItem[]
  footer: Footer
  children: React.ReactNode
}

export const Layout = ({ categories, navLinks, footer, children }: LayoutProps) => {
  return (
    <LayoutProvider>
      <Header navItems={navLinks} />
      <NavMenu categories={categories} />
      <main>{children}</main>
      <Footer navItems={navLinks} data={footer} />
    </LayoutProvider>
  )
}
