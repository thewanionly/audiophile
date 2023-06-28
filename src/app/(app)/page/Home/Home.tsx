'use client'

import styled from '@emotion/styled'

import { AboutTheBrandSection, CategoryCardList } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

import { HeroSection } from './HeroSection'
import {
  PrimaryFeaturedProductSection,
  SecondaryFeaturedProductSection,
} from './FeaturedProductSection'

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
    margin-top: 12rem;
    margin-bottom: 12rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-top: 9.6rem;
      margin-bottom: 9.6rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-top: 20rem;
      margin-bottom: 20rem;
    }
  `,
}

type HomeProps = {
  aboutTheBrand: AboutTheBrand
  categories: Category[]
  heroSection: ProductSectionData
  primaryFPSection: ProductSectionData
  secondaryFPSection: Omit<ProductSectionData, 'message'>
}

export const Home = ({
  aboutTheBrand,
  categories,
  heroSection,
  primaryFPSection,
  secondaryFPSection,
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
      <PrimaryFeaturedProductSection
        product={primaryFPSection.product}
        message={primaryFPSection.message}
        sectionImage={primaryFPSection.sectionImage}
      />
      <SecondaryFeaturedProductSection
        product={secondaryFPSection.product}
        sectionImage={secondaryFPSection.sectionImage}
      />
      <S.AboutTheBrandSection
        heading={aboutTheBrand.heading}
        description={aboutTheBrand.description}
        image={aboutTheBrand.image}
      />
    </>
  )
}
