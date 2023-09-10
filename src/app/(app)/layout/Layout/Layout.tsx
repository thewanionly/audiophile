'use client'

import styled from '@emotion/styled'

import { NavItem } from '@/components'
import { useRehydrateAppStore } from '@/store/hydration'

import { Footer } from '../Footer'
import { Header } from '../Header'
import { LayoutProvider } from '../Layout.context'
import { NavMenu } from '../NavMenu'

const S = {
  Main: styled.main`
    flex-grow: 1;
  `,
}

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
      <S.Main>{children}</S.Main>
      <Footer navItems={navLinks} data={footer} />
    </LayoutProvider>
  )
}
