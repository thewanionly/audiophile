'use client'

import styled from '@emotion/styled'

import { appSectionContainer, mediaQuery } from '@/styles/utils'

import { CategoryProductCard } from './CategoryProductCard'

const S = {
  CategoryCardProductsSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 6.4rem auto 12rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin: 12rem auto;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 16rem auto;
    }
  `,
  CategoryCardProductsList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      gap: 16rem;
    }
  `,
  CategoryProductCard: styled(CategoryProductCard)<{ imageLastOnDesktop: boolean }>`
    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      flex-direction: ${({ imageLastOnDesktop }) => (imageLastOnDesktop ? 'row-reverse' : 'row')};
    }
  `,
}

type CategoryProductsSectionProps = {
  products: CategoryProduct[]
}

export const CategoryProductsSection = ({ products }: CategoryProductsSectionProps) => {
  return (
    <S.CategoryCardProductsSection>
      <S.CategoryCardProductsList>
        {products.map(
          ({ id, name, description, new: isNew, category, slug, categoryImage }, index) => (
            <li key={id}>
              <S.CategoryProductCard
                imageLastOnDesktop={Boolean(index % 2)}
                name={name}
                description={description}
                isNew={isNew}
                category={category}
                slug={slug}
                image={categoryImage}
                preLoadImage={index === 0}
              />
            </li>
          )
        )}
      </S.CategoryCardProductsList>
    </S.CategoryCardProductsSection>
  )
}
