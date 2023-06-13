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
    display: grid;
    grid-template-areas:
      'logo'
      'navbar'
      'website-desc'
      'copyright'
      'socials';
    justify-items: center;

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
      grid-template-areas:
        'logo logo'
        'navbar navbar'
        'website-desc website-desc'
        'copyright socials';
      justify-items: flex-start;
      padding: 6rem 0 4.6rem;

      &::before {
        left: 0;
        transform: translateX(0);
      }
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      grid-template-areas:
        'logo navbar'
        'website-desc socials'
        'copyright copyright';

      padding: 7.5rem 0 4.8rem;
      flex-direction: row;
      justify-content: space-between;
    }
  `,
  FooterLogo: styled(Link)`
    grid-area: logo;
  `,
  FooterLogoContainer: styled.div`
    user-select: none;
    cursor: pointer;

    height: 2.5rem;
    width: 14.3rem;
    position: relative;
  `,
  FooterNavBar: styled(NavBar)`
    grid-area: navbar;
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
  FooterWebsiteDesc: styled.p`
    grid-area: website-desc;
    margin-top: 4.8rem;

    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.regular};
    line-height: 2.5rem;
    text-align: center;
    color: ${(props) => props.theme.colors.bodyLighterText};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-top: 3.2rem;
      text-align: start;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-top: 3.6rem;
      max-width: 54rem;
    }
  `,
  FooterCopyright: styled.span`
    grid-area: copyright;
    margin-top: 4.8rem;

    & > span {
      font-weight: ${(props) => props.theme.fontWeights.bold};
      font-size: ${(props) => props.theme.fontSizes.regular};
      line-height: 2.5rem;
      color: ${(props) => props.theme.colors.bodyLighterText};
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-top: 8rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-top: 5.6rem;
    }
  `,
}

type FooterProps = {
  className?: string
  data: Footer
  navItems: NavItem[]
}

export const Footer = ({ className = '', data, navItems }: FooterProps) => {
  const { website_desc, copyright } = data

  return (
    <S.Footer className={className}>
      <S.FooterContainer>
        <S.FooterLogo href="/">
          <S.FooterLogoContainer>
            <Image src="/icons/logo.svg" alt="logo of audiophile" fill priority />
          </S.FooterLogoContainer>
        </S.FooterLogo>
        <S.FooterNavBar items={navItems} />
        <S.FooterWebsiteDesc>{website_desc}</S.FooterWebsiteDesc>
        <S.FooterCopyright>
          <span>
            {copyright.line_1} {new Date().getFullYear()}.{' '}
          </span>
          <span>{copyright.line_2}</span>
        </S.FooterCopyright>
      </S.FooterContainer>
    </S.Footer>
  )
}
