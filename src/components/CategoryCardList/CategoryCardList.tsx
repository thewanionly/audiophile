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
      min-width: 24.5rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      flex-direction: row;
      gap: 1rem;

      .category-card {
        max-width: unset;
        min-width: unset;
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

interface CategoryItem extends Category {
  onLinkClick?: () => void
}

type CategoryCardListProps = {
  className?: string
  categories: CategoryItem[]
}

export const CategoryCardList = ({ className = '', categories }: CategoryCardListProps) => {
  return (
    <S.CategoryCardList className={className}>
      {categories.map(({ image, name, href, onLinkClick }) => (
        <CategoryCard
          key={name}
          image={image.desktop}
          name={name}
          href={href}
          onLinkClick={onLinkClick}
        />
      ))}
    </S.CategoryCardList>
  )
}
