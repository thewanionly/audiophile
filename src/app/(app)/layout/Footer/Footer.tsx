'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

const S = {
  Footer: styled.footer`
    background-color: ${({ theme }) => theme.colors.footerBg};
  `,
  FooterContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}

    padding: 5.2rem 0 3.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      align-items: flex-start;
      padding: 6rem 0 4.6rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      padding: 7.5rem 0 4.8rem;
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
}

type FooterProps = { className?: string }

export const Footer = ({ className = '' }: FooterProps) => {
  return (
    <S.Footer className={className}>
      <S.FooterContainer>
        <S.FooterLogo href="/">
          <S.FooterLogoContainer>
            <Image src="/icons/logo.svg" alt="logo of audiophile" fill priority />
          </S.FooterLogoContainer>
        </S.FooterLogo>
      </S.FooterContainer>
    </S.Footer>
  )
}
