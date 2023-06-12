'use client'

import Link from 'next/link'
import styled from '@emotion/styled'

const S = {
  NavBar: styled.nav``,
  NavList: styled.ul`
    display: flex;
    gap: 3.4rem;
  `,
  NavLink: styled(Link)`
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.sm1};
    line-height: 2.5rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.navLink};

    &:hover {
      color: ${(props) => props.theme.colors.navLinkHover};
    }
  `,
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NavItem extends NavLink {}

type NavBarProps = {
  className?: string
  items: NavItem[]
}

export const NavBar = ({ className = '', items }: NavBarProps) => {
  return (
    <S.NavBar className={className}>
      <S.NavList className="navbar-list">
        {items
          .sort(({ order: item1Order }, { order: item2Order }) => item1Order - item2Order)
          .map(({ label, href }) => (
            <li key={label}>
              <S.NavLink href={href}>{label}</S.NavLink>
            </li>
          ))}
      </S.NavList>
    </S.NavBar>
  )
}
