'use client'

import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const S = {
  CategoryCard: styled.div`
    background-color: ${({ theme }) => theme.colors.categoryCardBg};
    border-radius: 0.8rem;
    padding: 2.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  CategoryCardImageContainer: styled.div`
    width: 100px;
    height: 100px;
    position: relative;
  `,
  CategoryCardImage: styled(Image)``,
  CategoryCardName: styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkTitle};

    margin-bottom: 1.7rem;
  `,
  CategoryCardLink: styled(Link)`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.sm1};
    line-height: 1.8rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.categoryCardLink};

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
      <S.CategoryCardName>{name}</S.CategoryCardName>
      <S.CategoryCardLink href={href}>Shop</S.CategoryCardLink>
    </S.CategoryCard>
  )
}
