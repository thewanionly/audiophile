'use client'

import { appSectionContainer, mediaQuery } from '@/styles/utils'
import styled from '@emotion/styled'

const S = {
  HeroSection: styled.section`
    background-color: ${({ theme }) => theme.colors.heroSectionBg};
    padding: 10rem 0;
  `,
  HeroSectionContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}
  `,
  HeroSectionContentContainer: styled.div`
    max-width: 38rem;
    margin: 0 auto;
    text-align: center;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 0;
      text-align: start;
    }
  `,
  HeroProductName: styled.h2`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    line-height: 4rem;
    letter-spacing: 0.1286rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.lightTitle};
    margin-bottom: 2.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.xxxl};
      line-height: 5.8rem;
      letter-spacing: 0.2rem;
    }
  `,
  HeroMessage: styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyTextLighter};
  `,
}

type HeroSectionProps = {
  product: ProductLite
  message: string
}

export const HeroSection = ({ product, message }: HeroSectionProps) => {
  const { name } = product

  return (
    <S.HeroSection>
      <S.HeroSectionContainer>
        <S.HeroSectionContentContainer>
          <S.HeroProductName>{name}</S.HeroProductName>
          <S.HeroMessage>{message}</S.HeroMessage>
        </S.HeroSectionContentContainer>
      </S.HeroSectionContainer>
    </S.HeroSection>
  )
}
