'use client'

import styled from '@emotion/styled'

import { appSectionContainer } from '@/styles/utils'

import { PrimaryFeaturedProduct } from './PrimaryFeaturedProduct'
import { SecondaryFeaturedProduct } from './SecondaryFeaturedProduct'
import { TertiaryFeaturedProduct } from './TertiaryFeaturedProduct'

const S = {
  FeaturedProductSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}
  `,
}

type FeaturedProductSectionProps = {
  primary: ProductSectionData
  secondary: Omit<ProductSectionData, 'message'>
  tertiary: Omit<ProductSectionData, 'message'>
}

export const FeaturedProductSection = ({
  primary,
  secondary,
  tertiary,
}: FeaturedProductSectionProps) => {
  return (
    <S.FeaturedProductSection>
      <PrimaryFeaturedProduct
        product={primary.product}
        message={primary.message}
        sectionImage={primary.sectionImage}
      />
      <SecondaryFeaturedProduct product={secondary.product} sectionImage={secondary.sectionImage} />
      <TertiaryFeaturedProduct product={tertiary.product} sectionImage={tertiary.sectionImage} />
    </S.FeaturedProductSection>
  )
}
