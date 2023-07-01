'use client'

import styled from '@emotion/styled'

import { Button, ButtonColor, ButtonVariant } from '@/components'
import { SEE_PRODUCT } from '@/utils/constants'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { ResponsiveImage } from '@/components/ResponsiveImage'

const S = {
  TertiaryFeaturedProductSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      flex-direction: row;
      gap: 1.1rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      flex-direction: row;
      gap: 3rem;
    }
  `,
  SectionImage: styled(ResponsiveImage)`
    position: relative;
    height: 20rem;
    width: 100%;

    .image {
      border-radius: 0.8rem;
      object-fit: cover;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      height: 32rem;
      flex-basis: 50%;
    }
  `,
  ContentContainer: styled.div`
    background-color: ${({ theme }) => theme.colors.tertiaryFPSectionBg};
    border-radius: 0.8rem;
    padding: 4.1rem 2.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      flex-basis: 50%;
      height: 32rem;
      padding: 0 4.1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      padding: 0 9.5rem;
    }
  `,
  ProductName: styled.h2`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med3};
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};
    margin-bottom: 3.2rem;
  `,
}

type TertiaryFeaturedProductSectionProps = Omit<ProductSectionData, 'message'>

export const TertiaryFeaturedProductSection = ({
  product,
  sectionImage,
}: TertiaryFeaturedProductSectionProps) => {
  const { name, category, slug } = product

  return (
    <S.TertiaryFeaturedProductSection>
      <S.SectionImage src={sectionImage.src} alt={sectionImage.alt} fill />
      <S.ContentContainer>
        <S.ProductName>{name}</S.ProductName>
        <Button
          asLink
          href={`${category}/${slug}`}
          variant={ButtonVariant.OUTLINED}
          color={ButtonColor.SECONDARY}
        >
          {SEE_PRODUCT}
        </Button>
      </S.ContentContainer>
    </S.TertiaryFeaturedProductSection>
  )
}
