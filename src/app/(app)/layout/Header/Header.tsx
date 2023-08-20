'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styled from '@emotion/styled'
import { Badge } from '@mui/base/Badge'
import useMediaQuery from '@mui/material/useMediaQuery'

import { Icon, IconName, NavBar, NavItem } from '@/components'
import { CartModal } from '@/components/CartModal'
import { useCartState } from '@/store/cart'
import { theme } from '@/styles'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

import { useLayoutContext } from '../Layout.context'
import { HeaderMenuIcon } from './HeaderMenuIcon'

const S = {
  Header: styled.header<HeaderStyleProps>`
    position: ${({ heroSectionVisible }) => (heroSectionVisible ? 'relative' : 'sticky')};
    top: 0;
    z-index: 1;
    width: 100%;
    background-color: ${({ theme, heroSectionVisible }) =>
      heroSectionVisible ? theme.colors.headerHeroBg : theme.colors.headerBg};
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
  CartIconBadge: styled(Badge)`
    .MuiBadge-badge {
      position: absolute;
      top: -1.5rem;
      right: -1.5rem;

      padding: 0 0.6rem;
      min-width: 22px;
      height: 22px;
      border-radius: 1.2rem;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.cartIcon};

      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      line-height: 2.2rem;

      &.MuiBadge-invisible {
        display: none;
      }
    }
  `,
}

type HeaderStyleProps = {
  heroSectionVisible: boolean
}

type HeaderProps = {
  navItems: NavItem[]
}

export const Header = ({ navItems }: HeaderProps) => {
  const { totalItems } = useCartState()
  const [showCartModal, setShowCartModal] = useState(false)
  const { isNavMenuOpen, isHeroSectionVisible, closeNavMenu, toggleNavMenu } = useLayoutContext()
  const isDesktop = useMediaQuery(theme.breakPoints.desktop)

  return (
    <S.Header heroSectionVisible={isHeroSectionVisible}>
      <S.HeaderContainer>
        <S.HeaderMenuIcon isOpen={isNavMenuOpen} isVisible={!isDesktop} onClick={toggleNavMenu} />
        <S.HeaderLogo href="/" onClick={closeNavMenu}>
          <S.HeaderLogoContainer>
            <Image src="/icons/logo.svg" alt="logo of audiophile" fill priority />
          </S.HeaderLogoContainer>
        </S.HeaderLogo>
        {isDesktop && <S.HeaderNavBar items={navItems} />}
        <S.HeaderCartIconContainer onClick={() => setShowCartModal((prev) => !prev)}>
          <S.CartIconBadge badgeContent={totalItems}>
            <Icon name={IconName.Cart} />
          </S.CartIconBadge>
        </S.HeaderCartIconContainer>
      </S.HeaderContainer>
      <CartModal open={showCartModal} closeModal={() => setShowCartModal(false)} />
    </S.Header>
  )
}
