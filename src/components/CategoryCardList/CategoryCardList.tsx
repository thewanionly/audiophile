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

interface CategoryItem extends Category {
  onLinkClick?: () => void
}

type CategoryCardListProps = {
  className?: string
  categories: CategoryItem[]
}

export const CategoryCardList = ({ className = '', categories }: CategoryCardListProps) => {
  return (
    <S.CategoryCardList className={className} data-testid="category-card-list">
      {categories
        .sort(
          ({ displayOrder: item1DisplayOrder }, { displayOrder: item2DisplayOrder }) =>
            item1DisplayOrder - item2DisplayOrder
        )
        .map(({ image, name, slug, onLinkClick }) => (
          <CategoryCard
            key={name}
            image={image}
            name={name}
            href={slug}
            onLinkClick={onLinkClick}
          />
        ))}
    </S.CategoryCardList>
  )
}
