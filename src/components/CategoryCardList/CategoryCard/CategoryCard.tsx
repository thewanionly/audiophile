'use client'

import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const S = {
  CategoryCard: styled.div``,
  CategoryCardImageContainer: styled.div`
    width: 100px;
    height: 100px;
    position: relative;
  `,
  CategoryCardImage: styled(Image)``,
  CategoryCardName: styled.span``,
  CategoryCardLink: styled(Link)``,
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
