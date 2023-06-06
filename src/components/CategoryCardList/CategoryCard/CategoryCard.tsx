'use client'

import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

import { Icon, IconName } from '@/components'

const S = {
  CategoryCard: styled.div`
    display: grid;
    justify-items: center;
  `,
  CategoryCardImageContainer: styled.div`
    width: 100px;
    height: 100px;
    position: relative;
    grid-area: 1 / 1 / 3 / 2;
  `,
  CategoryCardImage: styled(Image)``,
  CategoryCardBottomContainer: styled.div`
    background-color: ${({ theme }) => theme.colors.categoryCardBg};
    border-radius: 0.8rem;
    padding: 2.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8.8rem;
    grid-area: 2 / 1 / 4 / 2;
    width: 100%;
  `,
  CategoryCardName: styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};

    margin-bottom: 1.7rem;
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
  image: string
  name: string
  href: string
}

export const CategoryCard = ({ image, name, href }: CategoryCardProps) => {
  return (
    <S.CategoryCard data-testid="category-card">
      <S.CategoryCardImageContainer>
        <S.CategoryCardImage src={image} alt={name} fill />
      </S.CategoryCardImageContainer>
      <S.CategoryCardBottomContainer>
        <S.CategoryCardName>{name}</S.CategoryCardName>
        <S.CategoryCardShopLink href={href}>
          Shop
          <Icon name={IconName.ArrowRight} />
        </S.CategoryCardShopLink>
      </S.CategoryCardBottomContainer>
    </S.CategoryCard>
  )
}
