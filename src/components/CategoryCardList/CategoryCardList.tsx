'use client'

import styled from '@emotion/styled'

import { CategoryCard } from './CategoryCard'

const S = {
  CategoryCardList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  `,
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
  className?: string
  categories: Category[]
}

export const CategoryCardList = ({ className = '', categories }: CategoryCardListProps) => {
  return (
    <S.CategoryCardList className={className}>
      {categories.map(({ image, name, href }) => (
        <CategoryCard key={name} image={image.desktop} name={name} href={href} />
      ))}
    </S.CategoryCardList>
  )
}
