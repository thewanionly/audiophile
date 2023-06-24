'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'
import useMediaQuery from '@mui/material/useMediaQuery'

import { Icon, IconName, NavBar, NavItem } from '@/components'
import { theme } from '@/styles'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

import { HeaderMenuIcon } from './HeaderMenuIcon'
import { useLayoutContext } from '../Layout.context'

const S = {
  Header: styled.header`
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.headerBg};
    height: 9rem;
    display: flex;
    align-items: center;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.headerDivider};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      border-bottom: none;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      height: 9.6rem;
    }
  `,
  HeaderContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}

    display: flex;
    align-items: center;
    position: relative;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      height: 100%;
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.headerDivider};
    }
  `,
  HeaderMenuIcon: styled(HeaderMenuIcon)`
    position: absolute;
  `,
  HeaderLogo: styled(Link)`
    margin: 0 auto;
    padding: 0px 3rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin: 0 0 0 5.8rem;
      padding: 0;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
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
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `,
  HeaderCartIconContainer: styled.button`
    position: absolute;
    right: 0;
    background: transparent;
    width: 2.3rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.cartIcon};
    cursor: pointer;
    transition: all 0.2s ease-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
}

type HeaderProps = {
  navItems: NavItem[]
}

export const Header = ({ navItems }: HeaderProps) => {
  const { isNavMenuOpen, closeNavMenu, toggleNavMenu } = useLayoutContext()
  const isDesktop = useMediaQuery(theme.breakPoints.desktop)

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderMenuIcon isOpen={isNavMenuOpen} isVisible={!isDesktop} onClick={toggleNavMenu} />
        <S.HeaderLogo href="/" onClick={closeNavMenu}>
          <S.HeaderLogoContainer>
            <Image src="/icons/logo.svg" alt="logo of audiophile" fill priority />
          </S.HeaderLogoContainer>
        </S.HeaderLogo>
        {isDesktop && <S.HeaderNavBar items={navItems} />}
        <S.HeaderCartIconContainer>
          <Icon name={IconName.Cart} />
        </S.HeaderCartIconContainer>
      </S.HeaderContainer>
    </S.Header>
  )
}
