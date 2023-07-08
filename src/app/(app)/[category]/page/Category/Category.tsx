'use client'

import styled from '@emotion/styled'

import { AboutTheBrandSection, CategoryCardList } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

import { CategoryProductsSection } from './CategoryProductsSection'

const S = {
  CategoryHeader: styled.section`
    height: 10.2rem;
    background-color: ${({ theme }) => theme.colors.categoryHeaderBg};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      height: 24.6rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      height: 23.9rem;
    }
  `,
  CategoryHeaderContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  CategoryHeadingText: styled.h1`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med3};
    line-height: 3.8rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.lightTitle};
    text-align: center;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.lg3};
      line-height: 4.4rem;
      letter-spacing: 0.14rem;
    }
  `,

  CategoryCardListSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 12rem auto;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 16rem auto;
    }
  `,
  AboutTheBrandSection: styled(AboutTheBrandSection)`
    margin: 12rem auto;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 16rem auto;
    }
  `,
}

type CategoryProps = {
  name: string
  aboutTheBrand: AboutTheBrand
  categories: Category[]
  products: CategoryProduct[]
}

export const Category = ({ name, aboutTheBrand, categories, products }: CategoryProps) => {
  return (
    <>
      <S.CategoryHeader>
        <S.CategoryHeaderContainer>
          <S.CategoryHeadingText>{name}</S.CategoryHeadingText>
        </S.CategoryHeaderContainer>
      </S.CategoryHeader>
      <CategoryProductsSection products={products} />
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
