'use client'

import styled from '@emotion/styled'

import { AboutTheBrandSection, CategoryCardList } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

import { MainDetailSection } from './MainDetailSection'

const S = {
  CategoryCardListSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 12rem auto;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 16rem auto;
    }
  `,
  AboutTheBrandSection: styled(AboutTheBrandSection)`
    margin: 12rem auto;

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 16rem auto;
    }
  `,
}

type ProductDetailProps = {
  product: ProductDetail
  aboutTheBrand: AboutTheBrand
  categories: Category[]
}

export const ProductDetail = ({ product, aboutTheBrand, categories }: ProductDetailProps) => {
  const { slug, name, image, category, new: isNew, price, description } = product

  return (
    <>
      <MainDetailSection
        slug={slug}
        name={name}
        image={image}
        category={category}
        new={isNew}
        price={price}
        description={description}
      />
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
