'use client'

import styled from '@emotion/styled'

import { CategoryCardList } from '@/components'
import { appSectionContainer } from '@/styles/utils'

const S = {
  CategoryCardListSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}

    margin-top: 4rem;
  `,
  CategoryCardList: styled(CategoryCardList)``,
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
        <S.CategoryCardList categories={mockedCategories} />
      </S.CategoryCardListSection>
    </>
  )
}
