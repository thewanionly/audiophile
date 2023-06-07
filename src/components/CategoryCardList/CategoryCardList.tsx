'use client'

import styled from '@emotion/styled'

import { CategoryCard } from './CategoryCard'
import { mediaQuery } from '@/styles/utils'

const S = {
  CategoryCardList: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    .category-card {
      flex: 1;
      width: min(100%, 32.7rem);
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      flex-direction: row;
      gap: 1rem;

      .category-card {
        max-width: none;
      }
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      gap: 3rem;
    }
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
