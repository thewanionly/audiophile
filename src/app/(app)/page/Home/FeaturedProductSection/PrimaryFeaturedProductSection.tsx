'use client'

import styled from '@emotion/styled'

import { Button, ButtonColor } from '@/components'
import { SEE_PRODUCT } from '@/utils/constants'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

const S = {
  PrimaryFeaturedProductSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}
    padding: 5.6rem 2.4rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    align-items: center;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      padding: 5.2rem 9.5rem 6.4rem;
      gap: 6.4rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      text-align: start;
      flex-direction: row;
      gap: 13.8rem;
      justify-content: space-around;
    }
  `,
  ContentContainer: styled.div`
    margin: 0 auto;
    max-width: 28rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      width: 34.9rem;
      max-width: none;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 0;
    }
  `,
  ProductName: styled.h2`
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
  SectionMessage: styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.bodyTextLighter};
    margin-bottom: 2.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 4rem;
    }
  `,
}

type FeaturedProductSectionProps = ProductSectionData

export const PrimaryFeaturedProductSection = ({
  product,
  message,
  sectionImage,
}: FeaturedProductSectionProps) => {
  const { name, category, slug } = product

  return (
    <S.PrimaryFeaturedProductSection>
      <S.ContentContainer>
        <S.ProductName>{name}</S.ProductName>
        <S.SectionMessage>{message}</S.SectionMessage>
        <Button asLink href={`${category}/${slug}`} color={ButtonColor.SECONDARY}>
          {SEE_PRODUCT}
        </Button>
      </S.ContentContainer>
    </S.PrimaryFeaturedProductSection>
  )
}
