'use client'

import styled from '@emotion/styled'

import { Button, ButtonColor } from '@/components'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { SEE_PRODUCT } from '@/utils/constants'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

const S = {
  PrimaryFeaturedProductSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}
    background-image: url('/icons/pattern-circles.svg');
    background-size: cover;
    background-position: center -11.8rem;
    background-repeat: no-repeat;
    padding: 5.6rem 2.4rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin-bottom: 2.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      background-size: 138%;
      background-position-y: -29rem;
      padding: 5.2rem 9.5rem 6.4rem;
      gap: 6.7rem;
      margin-bottom: 3.2rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      background-size: 81%;
      background-position-y: -1rem;
      background-position-x: -12rem;
      padding: 0 9.5rem 0 11.75rem;
      text-align: start;
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 4.8rem;
    }
  `,
  SectionImage: styled(ResponsiveImage)`
    position: relative;
    width: 100%;
    height: 20.7rem;

    .image {
      object-fit: contain;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      height: 23.7rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      height: 49.3rem;
      width: 41rem;
      bottom: -5rem;
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
      margin: 13.3rem 0 12.4rem;
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

type PrimaryFeaturedProductSectionProps = ProductSectionData

export const PrimaryFeaturedProductSection = ({
  product,
  message,
  sectionImage,
}: PrimaryFeaturedProductSectionProps) => {
  const { name, category, slug } = product

  return (
    <S.PrimaryFeaturedProductSection>
      <S.SectionImage src={sectionImage.src} alt={sectionImage.alt} fill priority />
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
