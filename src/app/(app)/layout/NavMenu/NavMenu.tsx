'use client'

import styled from '@emotion/styled'
import Modal from '@mui/material/Modal'

import { CategoryCardList } from '@/components'
import { appSectionContainer, mediaQuery } from '@/styles/utils'

import { useLayoutContext } from '../Layout.context'

const S = {
  Modal: styled(Modal)`
    &,
    .MuiBackdrop-root {
      margin-top: 9rem;

      ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
        margin-top: 9.6rem;
      }
    }
  `,
  ModalContent: styled.div`
    background-color: ${({ theme }) => theme.colors.modalBg};
    border-radius: 0 0 0.8rem 0.8rem;
    padding: 3.2rem 0 3.5rem;

    overflow: auto;
    max-height: calc(100vh - 15.4rem);
  `,
  CategoryCardListSection: styled.section`
    ${({ theme }) => appSectionContainer(theme)}
  `,
}

type NavMenuProps = {
  categories: Category[]
}

export const NavMenu = ({ categories }: NavMenuProps) => {
  const { isNavMenuOpen, closeNavMenu } = useLayoutContext()

  return (
    <S.Modal open={isNavMenuOpen} onClose={closeNavMenu}>
      <S.ModalContent>
        <S.CategoryCardListSection>
          <CategoryCardList
            categories={categories.map((category) => ({
              ...category,
              onLinkClick: closeNavMenu,
            }))}
          />
        </S.CategoryCardListSection>
      </S.ModalContent>
    </S.Modal>
  )
}
