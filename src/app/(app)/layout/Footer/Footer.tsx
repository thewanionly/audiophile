'use client'

import Image from 'next/image'
import Link from 'next/link'

import styled from '@emotion/styled'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { NavBar, NavItem } from '@/components'

const S = {
  Footer: styled.footer`
    background-color: ${({ theme }) => theme.colors.footerBg};
  `,
  FooterContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}
    position: relative;
    padding: 5.2rem 0 3.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 0.4rem;
      width: 10.1rem;
      background-color: ${({ theme }) => theme.colors.primary};
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      align-items: flex-start;
      padding: 6rem 0 4.6rem;

      &::before {
        left: 0;
        transform: translateX(0);
      }
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      padding: 7.5rem 0 4.8rem;
      flex-direction: row;
      justify-content: space-between;
    }
  `,
  FooterLogo: styled(Link)``,
  FooterLogoContainer: styled.div`
    user-select: none;
    cursor: pointer;

    height: 2.5rem;
    width: 14.3rem;
    position: relative;
  `,
  FooterNavBar: styled(NavBar)`
    margin-top: 4.8rem;

    .navbar-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-top: 3.2rem;

      .navbar-list {
        flex-direction: row;
        gap: 3.4rem;
      }
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-top: 0;
    }
  `,
}

type FooterProps = {
  className?: string
  navItems: NavItem[]
}

export const Footer = ({ className = '', navItems }: FooterProps) => {
  return (
    <S.Footer className={className}>
      <S.FooterContainer>
        <S.FooterLogo href="/">
          <S.FooterLogoContainer>
            <Image src="/icons/logo.svg" alt="logo of audiophile" fill priority />
          </S.FooterLogoContainer>
        </S.FooterLogo>
        <S.FooterNavBar items={navItems} />
      </S.FooterContainer>
    </S.Footer>
  )
}
