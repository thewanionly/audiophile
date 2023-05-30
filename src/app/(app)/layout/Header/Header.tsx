'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useMediaQuery } from '@mantine/hooks'

import { NavBar, NavItem } from '@/components'
import { theme } from '@/styles'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

import { HeaderMenuIcon } from './HeaderMenuIcon'

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
  HeaderMenuIcon: styled(HeaderMenuIcon)`
    position: absolute;
  `,
  HeaderLogo: styled(Link)`
    margin: 0 auto;
    padding: 0px 3rem;

    ${({ theme }) => mediaQuery(theme.other.breakPoints.tabletLandscape)} {
      margin: 0 0 0 5.8rem;
      padding: 0;
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
  HeaderNavBar: styled(NavBar)``,
}

type HeaderProps = {
  navItems: NavItem[]
}

export const Header = ({ navItems }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isDesktop = useMediaQuery(theme.breakPoints.desktop)

  const closeNavMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const toggleNavMenu = useCallback(() => {
    setIsMenuOpen((prevValue) => !prevValue)
  }, [])

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderMenuIcon isOpen={isMenuOpen} isVisible={!isDesktop} onClick={toggleNavMenu} />
        <S.HeaderLogo href="/">
          <S.HeaderLogoContainer>
            <Image src="/icons/logo.svg" alt="logo of audiophile" fill priority />
          </S.HeaderLogoContainer>
        </S.HeaderLogo>
        {isDesktop && <S.HeaderNavBar items={navItems} />}
      </S.HeaderContainer>
    </S.Header>
  )
}
