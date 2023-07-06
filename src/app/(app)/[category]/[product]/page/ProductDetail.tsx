'use client'

import { useRouter } from 'next/navigation'

import styled from '@emotion/styled'

import { AboutTheBrandSection, Button, ButtonVariant, CategoryCardList } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

import { MainDetailSection } from './MainDetailSection'
import { FeaturesSection } from './FeaturesSection/FeaturesSection'
import { GO_BACK } from '../utils/constants'

const S = {
  BackButtonContainer: styled.div`
    ${({ theme }) => appSectionContainer(theme)}

    margin: 1.6rem auto 2.4rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin: 3.3rem auto 2.4rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin: 7.9rem auto 5.6rem;
    }
  `,
  BackButton: styled(Button)`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    letter-spacing: unset;
  `,
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
  const router = useRouter()
  const { slug, name, image, category, new: isNew, price, description, features } = product

  const handleGoBack = () => {
    router.back()
  }

  return (
    <>
      <S.BackButtonContainer>
        <S.BackButton variant={ButtonVariant.TERTIARY} onClick={handleGoBack}>
          {GO_BACK}
        </S.BackButton>
      </S.BackButtonContainer>
      <MainDetailSection
        slug={slug}
        name={name}
        image={image}
        category={category}
        new={isNew}
        price={price}
        description={description}
      />
      <FeaturesSection data={features} />
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
