'use client'

import styled from '@emotion/styled'

import { AboutTheBrandSection, CategoryCardList } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

const S = {
  CategoryHeader: styled.section`
    height: 10.2rem;
    background-color: ${({ theme }) => theme.colors.categoryHeaderBg};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      height: 24.6rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      height: 23.9rem;
    }
  `,
  CategoryHeaderContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  CatrgoryHeadingText: styled.h1`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.med3};
    line-height: 3.8rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.lightTitle};
    text-align: center;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      font-size: ${({ theme }) => theme.fontSizes.lg3};
      line-height: 4.4rem;
      letter-spacing: 0.14rem;
    }
  `,
  CategoryCardListSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 12rem auto;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 16rem auto;
    }
  `,
  AboutTheBrandSection: styled(AboutTheBrandSection)`
    margin-top: 12rem;
    margin-bottom: 12rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-top: 16rem;
      margin-bottom: 16rem;
    }
  `,
}

type CategoryProps = {
  name: string
  aboutTheBrand: AboutTheBrand
  categories: Category[]
}

export const Category = ({ name, aboutTheBrand, categories }: CategoryProps) => {
  return (
    <>
      <S.CategoryHeader>
        <S.CategoryHeaderContainer>
          <S.CatrgoryHeadingText>{name}</S.CatrgoryHeadingText>
        </S.CategoryHeaderContainer>
      </S.CategoryHeader>
      <S.CategoryCardListSection>
        <CategoryCardList categories={categories} />
      </S.CategoryCardListSection>
      <S.AboutTheBrandSection
        heading={aboutTheBrand.heading}
        description={aboutTheBrand.description}
        image={aboutTheBrand.image}
      />
    </>
  )
}
