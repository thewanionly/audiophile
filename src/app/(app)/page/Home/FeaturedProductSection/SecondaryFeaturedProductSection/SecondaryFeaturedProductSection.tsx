'use client'

import styled from '@emotion/styled'

import { Button, ButtonColor, ButtonVariant } from '@/components'
import { SEE_PRODUCT } from '@/utils/constants'
import { appSectionContainer, mediaQuery } from '@/styles/utils'
import { ResponsiveImage } from '@/components/ResponsiveImage'

const S = {
  SecondaryFeaturedProductSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}
    border-radius: 0.8rem;
    margin-bottom: 2.4rem;
    display: grid;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 3.2rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-bottom: 4.8rem;
    }
  `,
  SectionImage: styled(ResponsiveImage)`
    grid-area: 1 / 1 / 2 / 2;
    width: 100%;
    height: 32rem;
    position: relative;

    .image {
      border-radius: 0.8rem;
      object-fit: cover;
    }
  `,
  ContentContainer: styled.div`
    grid-area: 1 / 1 / 2 / 2;
    z-index: 1;
    margin: auto 0;
    padding: 0 2.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      padding: 0 6.2rem;
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

type SecondaryFeaturedProductSectionProps = Omit<ProductSectionData, 'message'>

export const SecondaryFeaturedProductSection = ({
  product,
  sectionImage,
}: SecondaryFeaturedProductSectionProps) => {
  const { name, category, slug } = product

  return (
    <S.SecondaryFeaturedProductSection>
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
    </S.SecondaryFeaturedProductSection>
  )
}
