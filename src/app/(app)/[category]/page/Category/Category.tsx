'use client'

import styled from '@emotion/styled'

import { mediaQuery } from '@/styles/utils'

const S = {
  CategoryHeader: styled.section`
    height: 10.2rem;
    background-color: ${({ theme }) => theme.colors.categoryHeaderBg};
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      height: 24.6rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      height: 23.9rem;
    }
  `,
  CatrgoryHeadingText: styled.h1`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 3.8rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.lightTitle};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
      line-height: 4.4rem;
      letter-spacing: 0.14rem;
    }
  `,
}

type CategoryProps = {
  name: string
}

export const Category = ({ name }: CategoryProps) => {
  return (
    <>
      <S.CategoryHeader>
        <S.CatrgoryHeadingText>{name}</S.CatrgoryHeadingText>
      </S.CategoryHeader>
    </>
  )
}
