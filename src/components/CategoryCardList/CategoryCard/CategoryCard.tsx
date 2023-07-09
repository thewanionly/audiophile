'use client'

import Link from 'next/link'

import styled from '@emotion/styled'

import { Icon, IconName } from '@/components'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { mediaQuery } from '@/styles/utils'

const S = {
  CategoryCard: styled.article`
    display: grid;
    justify-items: center;
  `,
  CategoryCardImage: styled(ResponsiveImage)`
    top: 2rem;
    width: 14rem;
    height: 14rem;
    position: relative;
    grid-area: 1 / 1 / 3 / 2;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      top: 2rem;
      width: 16rem;
      height: 16rem;
    }

    .image {
      object-fit: contain;
    }
  `,
  CategoryCardFilledContainer: styled.div`
    background-color: ${({ theme }) => theme.colors.categoryCardBg};
    border-radius: 0.8rem;

    grid-area: 2 / 1 / 4 / 2;
    width: 100%;
    height: 16.5rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      height: 20.4rem;
    }
  `,
  CategoryCardTextContainer: styled.div`
    grid-area: 3 / 1 / 4 / 2;
    width: 100%;

    padding: 2.2rem;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      padding-bottom: 3rem;
    }
  `,
  CategoryCardName: styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};

    margin-bottom: 1.7rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      font-size: ${({ theme }) => theme.fontSizes.med1};
      line-height: 2.5rem;
      letter-spacing: 0.1286rem;
    }
  `,

  CategoryCardShopLink: styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.sm1};
    line-height: 1.8rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.categoryCardLink};
    transition: all 0.3s ease-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
}

type CategoryCardProps = {
  image: ResponsiveImageType
  name: string
  href: string
  onLinkClick?: () => void
}

export const CategoryCard = ({ image, name, href, onLinkClick }: CategoryCardProps) => {
  return (
    <S.CategoryCard className="category-card" data-testid="category-card">
      <S.CategoryCardImage src={image.src} alt={image.alt} fill />
      <S.CategoryCardFilledContainer />
      <S.CategoryCardTextContainer>
        <S.CategoryCardName>{name}</S.CategoryCardName>
        <S.CategoryCardShopLink href={href} onClick={onLinkClick}>
          Shop
          <Icon name={IconName.ArrowRight} />
        </S.CategoryCardShopLink>
      </S.CategoryCardTextContainer>
    </S.CategoryCard>
  )
}
