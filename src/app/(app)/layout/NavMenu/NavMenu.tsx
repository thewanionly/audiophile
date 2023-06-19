'use client'

import Modal from '@mui/material/Modal'
import styled from '@emotion/styled'

import { mediaQuery } from '@/styles/utils'
import { CategoryCardList } from '@/components'
import { useLayoutContext } from '../Layout.context'
import { mockedCategories } from '@/tests/__mocks__/data'

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
    background-color: ${({ theme }) => theme.colors.modalBg};
    border-radius: 0 0 0.8rem 0.8rem;
    padding: 3.2rem 2.4rem 3.5rem;
  `,
}

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
