'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

import { NavBar, NavItem } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

const S = {
  Header: styled.header`
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.other.colors.headerBg};
    height: 8.9rem;
    display: flex;
    align-items: center;

    ${({ theme }) => mediaQuery(theme.other.breakPoints.desktop)} {
      height: 9.6rem;
    }
  `,
  HeaderContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}

    display: flex;
    align-items: center;

    ${({ theme }) => mediaQuery(theme.other.breakPoints.desktop)} {
      justify-content: space-between;
    }
  `,
  HeaderLogo: styled(Link)`
    margin: 0 auto;

    ${({ theme }) => mediaQuery(theme.other.breakPoints.tabletLandscape)} {
      margin: 0 0 0 5.8rem;
    }

    ${({ theme }) => mediaQuery(theme.other.breakPoints.desktop)} {
      margin: 0;
    }
  `,
  HeaderLogoContainer: styled.div`
    user-select: none;
    cursor: pointer;

    height: 2.5rem;
    width: 14.3rem;
    position: relative;
  `,
  HeaderNavBar: styled(NavBar)`
    display: none;

    ${({ theme }) => mediaQuery(theme.other.breakPoints.desktop)} {
      display: block;
    }
  `,
}

type HeaderProps = {
  navItems: NavItem[]
}

export const Header = ({ navItems }: HeaderProps) => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderLogo href="/">
          <S.HeaderLogoContainer>
            <Image src="/icons/logo.svg" alt="logo of audiophile" fill priority />
          </S.HeaderLogoContainer>
        </S.HeaderLogo>
        <S.HeaderNavBar items={navItems} />
      </S.HeaderContainer>
    </S.Header>
  )
}
