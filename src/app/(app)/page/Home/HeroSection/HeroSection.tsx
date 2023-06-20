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

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 0;
    }
  `,
  HeroProductName: styled.h2`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    line-height: 4rem;
    text-align: center;
    letter-spacing: 0.1286rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.lightTitle};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.xxxl};
      line-height: 5.8rem;
      letter-spacing: 0.2rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      text-align: start;
    }
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
        </S.HeroSectionContentContainer>
      </S.HeroSectionContainer>
    </S.HeroSection>
  )
}
