'use client'

import styled from '@emotion/styled'

import { AboutTheBrandSection, CategoryCardList } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

const S = {
  CategoryCardListSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin-top: 4rem;
    margin-bottom: 12rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-top: 9.6rem;
      margin-bottom: 9.6rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-top: 12rem;
      margin-bottom: 16.8rem;
    }
  `,
  AboutTheBrandSection: styled(AboutTheBrandSection)`
    margin-top: 12rem;
    margin-bottom: 12rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      margin-top: 9.6rem;
      margin-bottom: 9.6rem;
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      margin-top: 20rem;
      margin-bottom: 20rem;
    }
  `,
}

const mockedCategories = [
  {
    image: {
      desktop: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
      tablet: '/images/tablet/xx99-mark-one-headphones-no-bg.png',
      mobile: '/images/mobile/xx99-mark-one-headphones-no-bg.png',
    },
    name: 'Headphones',
    href: '/headphones',
  },
  {
    image: {
      desktop: '/images/desktop/zx9-speaker-no-bg.png',
      tablet: '/images/tablet/zx9-speaker-no-bg.png',
      mobile: '/images/mobile/zx9-speaker-no-bg.png',
    },
    name: 'Speakers',
    href: '/speakers',
  },
  {
    image: {
      desktop: '/images/desktop/yx1-wireless-earphones-no-bg.png',
      tablet: '/images/tablet/yx1-wireless-earphones-no-bg.png',
      mobile: '/images/mobile/yx1-wireless-earphones-no-bg.png',
    },
    name: 'Earphones',
    href: '/earphones',
  },
]

export const Home = () => {
  return (
    <>
      <S.CategoryCardListSection>
        <CategoryCardList categories={mockedCategories} />
      </S.CategoryCardListSection>
      <S.AboutTheBrandSection
        heading="Bringing you the best audio gear"
        description="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
      />
    </>
  )
}
