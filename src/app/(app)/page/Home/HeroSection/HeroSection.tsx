'use client'

import styled from '@emotion/styled'

import { Button } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { NEW_PRODUCT, SEE_PRODUCT } from '@/utils/constants'
import { ResponsiveImage } from '@/components/ResponsiveImage'

const S = {
  HeroSection: styled.section`
    background-color: ${({ theme }) => theme.colors.heroSectionBg};
    display: grid;
  `,
  HeroSectionImage: styled(ResponsiveImage)`
    grid-area: 1 / 1 / 2 / 2;
    width: 100%;
    max-width: 144rem;
    height: 100%;
    position: relative;
    margin: 0 auto;

    .image {
      object-fit: cover;
      object-position: bottom;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      height: 64rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      height: 63.3rem;
    }
  `,
  HeroSectionContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}
    position: relative;
    grid-area: 1 / 1 / 2 / 2;
  `,
  HeroSectionContentContainer: styled.div`
    padding: 10.8rem 0 11.2rem 0;
    max-width: 38rem;
    margin: 0 auto;
    text-align: center;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      padding: 12.6rem 0 16.7rem 0;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      padding: 12.8rem 0 15.8rem 0;
      margin: 0;
      text-align: start;
    }
  `,
  HeroNewProductText: styled.span`
    display: inline-block;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.sm2};
    line-height: 1.9rem;
    letter-spacing: 1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.bodyTextLight};
    margin-bottom: 1.6rem;
  `,
  HeroProductName: styled.h2`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.lg2};
    line-height: 4rem;
    letter-spacing: 0.1286rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.lightTitle};
    margin-bottom: 2.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      line-height: 5.8rem;
      letter-spacing: 0.2rem;
    }
  `,
  HeroMessage: styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyTextLighter};
    margin-bottom: 2.8rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 4rem;
    }
  `,
}

type HeroSectionProps = ProductSectionData

export const HeroSection = ({ product, message, sectionImage }: HeroSectionProps) => {
  const { name, new: isNew, category, slug } = product

  return (
    <S.HeroSection>
      <S.HeroSectionImage src={sectionImage.src} alt={sectionImage.alt} fill priority />
      <S.HeroSectionContainer>
        <S.HeroSectionContentContainer>
          {isNew ? <S.HeroNewProductText>{NEW_PRODUCT}</S.HeroNewProductText> : null}
          <S.HeroProductName>{name}</S.HeroProductName>
          <S.HeroMessage>{message}</S.HeroMessage>
          <Button asLink href={`${category}/${slug}`}>
            {SEE_PRODUCT}
          </Button>
        </S.HeroSectionContentContainer>
      </S.HeroSectionContainer>
    </S.HeroSection>
  )
}
