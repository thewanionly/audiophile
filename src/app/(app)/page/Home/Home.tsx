'use client'

import styled from '@emotion/styled'

import { AboutTheBrandSection, CategoryCardList } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

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
  heroSection: HeroSectionData
}

export const Home = ({ aboutTheBrand, categories, heroSection }: HomeProps) => {
  return (
    <>
      <HeroSection product={heroSection.product} message={heroSection.message} />
      <S.CategoryCardListSection>
        <CategoryCardList categories={categories} />
      </S.CategoryCardListSection>
      <S.AboutTheBrandSection
        heading={aboutTheBrand.heading}
        description={aboutTheBrand.description}
        image={aboutTheBrand.image}
      />
    </>
  )
}
