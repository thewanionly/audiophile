'use client'

import styled from '@emotion/styled'

import { CategoryCardList } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

const S = {
  CategoryCardListSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 12rem auto;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 16rem auto;
    }
  `,
}

type ProductDetailProps = {
  categories: Category[]
}

export const ProductDetail = ({ categories }: ProductDetailProps) => {
  return (
    <>
      <S.CategoryCardListSection>
        <CategoryCardList categories={categories} />
      </S.CategoryCardListSection>
    </>
  )
}
