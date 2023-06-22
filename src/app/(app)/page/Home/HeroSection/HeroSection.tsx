'use client'

import Link from 'next/link'

import styled from '@emotion/styled'

import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { NEW_PRODUCT, SEE_PRODUCT } from '@/utils/constants'

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
    margin-bottom: 2.8rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 4rem;
    }
  `,
  HeroProductLink: styled(Link)`
    display: inline-block;
    padding: 1.5rem 3rem;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.primaryButtonMain};
    color: ${({ theme }) => theme.colors.buttonText};

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.sm1};
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: all 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryButtonLighter};
    }
  `,
}

type HeroSectionProps = {
  product: ProductLite
  message: string
}

export const HeroSection = ({ product, message }: HeroSectionProps) => {
  const { name, new: isNew } = product

  return (
    <S.HeroSection>
      <S.HeroSectionContainer>
        <S.HeroSectionContentContainer>
          {isNew ? <S.HeroNewProductText>{NEW_PRODUCT}</S.HeroNewProductText> : null}
          <S.HeroProductName>{name}</S.HeroProductName>
          <S.HeroMessage>{message}</S.HeroMessage>
          <S.HeroProductLink href={product.slug}>{SEE_PRODUCT}</S.HeroProductLink>
        </S.HeroSectionContentContainer>
      </S.HeroSectionContainer>
    </S.HeroSection>
  )
}
