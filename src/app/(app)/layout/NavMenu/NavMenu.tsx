'use client'

import Modal from '@mui/material/Modal'
import styled from '@emotion/styled'

import { mediaQuery } from '@/styles/utils'
import { CategoryCardList } from '@/components'
import { useLayoutContext } from '../Layout.context'

const S = {
  Modal: styled(Modal)`
    &,
    .MuiBackdrop-root {
      margin-top: 8.9rem;

      ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
        margin-top: 9.6rem;
      }
    }
  `,
  ModalContent: styled.div`
    background-color: white;
    border-radius: 0 0 0.8rem 0.8rem;
    padding: 3.2rem 2.4rem 3.5rem;
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

export const NavMenu = () => {
  const { isNavMenuOpen, closeNavMenu } = useLayoutContext()

  return (
    <S.Modal open={isNavMenuOpen}>
      <S.ModalContent>
        <CategoryCardList
          categories={mockedCategories.map((category) => ({
            ...category,
            onLinkClick: closeNavMenu,
          }))}
        />
      </S.ModalContent>
    </S.Modal>
  )
}
