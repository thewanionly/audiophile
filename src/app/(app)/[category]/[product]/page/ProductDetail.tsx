'use client'

import styled from '@emotion/styled'

import { AboutTheBrandSection, CategoryCardList } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

const S = {
  MainDetailSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin-top: 2.4rem;
    margin-bottom: 8.8rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-bottom: 12rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-top: 5.6rem;
      margin-bottom: 16rem;
    }
  `,
  // TODO: move to MainDetailSection
  ProductName: styled.h1`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med3};
    line-height: normal;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      line-height: 3.2rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      font-size: ${({ theme }) => theme.fontSizes.lg3};
      line-height: 4.4rem;
      letter-spacing: 0.1429rem;
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

type ProductDetailProps = {
  product: ProductDetail
  aboutTheBrand: AboutTheBrand
  categories: Category[]
}

export const ProductDetail = ({ product, aboutTheBrand, categories }: ProductDetailProps) => {
  return (
    <>
      <S.MainDetailSection>
        <S.ProductName>{product.name}</S.ProductName>
      </S.MainDetailSection>
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
