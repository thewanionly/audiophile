'use client'

import { NavItem } from '@/components'
import { useRehydrateAppStore } from '@/store/store'

import { Footer } from '../Footer'
import { Header } from '../Header'
import { LayoutProvider } from '../Layout.context'
import { NavMenu } from '../NavMenu'

type LayoutProps = {
  categories: Category[]
  navLinks: NavItem[]
  footer: Footer
  children: React.ReactNode
}

export const Layout = ({ categories, navLinks, footer, children }: LayoutProps) => {
  useRehydrateAppStore()

  return (
    <LayoutProvider>
      <Header navItems={navLinks} />
      <NavMenu categories={categories} />
      <main>{children}</main>
      <Footer navItems={navLinks} data={footer} />
    </LayoutProvider>
  )
}
