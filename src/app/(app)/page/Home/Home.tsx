'use client'

import styled from '@emotion/styled'

import { AboutTheBrandSection, CategoryCardList } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

import { FeaturedProductSection } from './FeaturedProductSection'
import { HeroSection } from './HeroSection'

const S = {
  CategoryCardListSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin-top: 4rem;
    margin-bottom: 12rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-top: 9.6rem;
      margin-bottom: 9.6rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-top: 12rem;
      margin-bottom: 16.8rem;
    }
  `,
  AboutTheBrandSection: styled(AboutTheBrandSection)`
    margin: 12rem auto;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin: 9.6rem auto;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 20rem auto;
    }
  `,
}

type HomeProps = {
  aboutTheBrand: AboutTheBrand
  categories: Category[]
  heroSection: ProductSectionData
  primaryFeaturedProduct: ProductSectionData
  secondaryFeaturedProduct: Omit<ProductSectionData, 'message'>
  tertiaryFeaturedProduct: Omit<ProductSectionData, 'message'>
}

export const Home = ({
  aboutTheBrand,
  categories,
  heroSection,
  primaryFeaturedProduct,
  secondaryFeaturedProduct,
  tertiaryFeaturedProduct,
}: HomeProps) => {
  return (
    <>
      <HeroSection
        product={heroSection.product}
        message={heroSection.message}
        sectionImage={heroSection.sectionImage}
      />
      <S.CategoryCardListSection>
        <CategoryCardList categories={categories} />
      </S.CategoryCardListSection>
      <FeaturedProductSection
        primary={primaryFeaturedProduct}
        secondary={secondaryFeaturedProduct}
        tertiary={tertiaryFeaturedProduct}
      />
      <S.AboutTheBrandSection
        heading={aboutTheBrand.heading}
        description={aboutTheBrand.description}
        image={aboutTheBrand.image}
      />
    </>
  )
}
