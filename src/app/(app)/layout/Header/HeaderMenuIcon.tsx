'use client'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { mediaQuery } from '@/styles/utils'

const S = {
  HeaderMenuButton: styled.button<HeaderMenuIconProps>`
    background: transparent;
    color: ${({ theme }) => theme.colors.menuIcon};
    width: 1.6rem;
    height: 2.5rem;
    overflow: hidden;

    &:hover {
      .header-menu-icon {
        & {
          background-color: ${({ theme, isOpen }) =>
            isOpen ? 'transparent' : theme.colors.primary};
        }

        &::before,
        &::after {
          background-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    ${({ theme }) => mediaQuery(theme.breakPoints.desktop)} {
      display: none;
    }
  `,
  HeaderMenuIcon: styled.span<{ isOpen: boolean }>`
    position: relative;

    &,
    &::before,
    &::after {
      display: block;
      background-color: ${({ theme }) => theme.colors.menuIcon};
      content: '';
      height: 0.3rem;
      width: 1.6rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.2s ease-out;
    }

    &::before {
      transform: none;
      top: -0.6rem;
    }

    &::after {
      transform: none;
      top: 0.6rem;
    }

    /* Close icon styling */
    ${({ isOpen }) =>
      isOpen &&
      css`
        & {
          background-color: transparent;
        }

        &::before {
          transform: rotate(-45deg);
          top: 0;
        }

        &::after {
          transform: rotate(45deg);
          top: 0;
        }
      `}
  `,
}

type HeaderMenuIconStyleProps = {
  isOpen: boolean
}

type HeaderMenuIconProps = HeaderMenuIconStyleProps & {
  className?: string
  onClick: () => void
}

export const HeaderMenuIcon = ({ className = '', isOpen, onClick }: HeaderMenuIconProps) => {
  return (
    <S.HeaderMenuButton
      aria-label={isOpen ? 'menu open' : 'menu close'}
      className={className}
      isOpen={isOpen}
      onClick={onClick}
    >
      <S.HeaderMenuIcon className="header-menu-icon" isOpen={isOpen} />
    </S.HeaderMenuButton>
  )
}
