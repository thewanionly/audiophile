'use client'

import styled from '@emotion/styled'

import { CategoryCard } from './CategoryCard'

const S = {
  CategoryCardList: styled.div``,
}

export interface Category {
  image: {
    desktop: string
    tablet: string
    mobile: string
  }
  name: string
  href: string
}

type CategoryCardListProps = {
  categories: Category[]
}

export const CategoryCardList = ({ categories }: CategoryCardListProps) => {
  return (
    <S.CategoryCardList>
      {categories.map(({ image, name, href }) => (
        <CategoryCard key={name} image={image.desktop} name={name} href={href} />
      ))}
    </S.CategoryCardList>
  )
}
