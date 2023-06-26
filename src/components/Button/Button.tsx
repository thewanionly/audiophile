'use client'

import Link from 'next/link'

import { Theme, css } from '@emotion/react'
import styled from '@emotion/styled'

// Generates button styles depending on the `color` and `variant` props
const colorVariantStyles = (
  theme: Theme,
  color: ButtonColor = ButtonColor.PRIMARY,
  variant: ButtonVariant = ButtonVariant.CONTAINED,
  disabled = false
) =>
  ({
    [ButtonColor.PRIMARY]: {
      [ButtonVariant.CONTAINED]: css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.textOnPrimary};

        &:hover {
          background-color: ${theme.colors.primaryLight};
        }

        ${disabled &&
        css`
          background-color: ${theme.colors.primaryLight};
          opacity: 0.7;
          cursor: not-allowed;

          &:hover {
            background-color: ${theme.colors.primaryLight};
          }
        `}
      `,
      [ButtonVariant.OUTLINED]: css`
        background-color: transparent;
        border: 0.1rem solid ${theme.colors.primary};
        color: ${theme.colors.primary};

        &:hover {
          background-color: ${theme.colors.primaryLight};
        }

        ${disabled &&
        css`
          background-color: ${theme.colors.primaryLight};
          border-color: ${theme.colors.primaryLight};
          opacity: 0.7;
          cursor: not-allowed;

          &:hover {
            background-color: ${theme.colors.primaryLight};
          }
        `}
      `,
    },
    [ButtonColor.SECONDARY]: {
      [ButtonVariant.CONTAINED]: css`
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.textOnSecondaryContained};

        &:hover {
          background-color: ${theme.colors.secondaryLight};
        }
      `,
      [ButtonVariant.OUTLINED]: css`
        background-color: transparent;
        border: 0.1rem solid ${theme.colors.secondary};
        color: ${theme.colors.textOnSecondaryOutlined};

        &:hover {
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.textOnSecondaryContained};
        }
      `,
    },
  }[color][variant])

const S = {
  Button: styled.button<ButtonProps>`
    display: inline-block;
    padding: 1.5rem 3rem;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.sm1};
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    transition: all 0.3s;

    ${({ theme, color, variant, disabled }) => colorVariantStyles(theme, color, variant, disabled)}
  `,
  Link: styled(Link)``, // work around because passing Link directly in "as" will throw some TypeScript warnings
}

export enum ButtonColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
}

type ButtonProps = {
  asLink?: boolean
  children?: React.ReactNode
  className?: string
  color?: ButtonColor
  download?: string
  disabled?: boolean
  href?: string
  label?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  openLinkInNewTab?: boolean
  variant?: ButtonVariant
  type?: 'submit' | 'button' | 'reset'
}

export const Button = ({
  asLink = false,
  children,
  className = '',
  color = ButtonColor.PRIMARY,
  download,
  disabled = false,
  href = '',
  label,
  onClick,
  openLinkInNewTab = false,
  variant = ButtonVariant.CONTAINED,
  type = 'button',
}: ButtonProps) => {
  const buttonProps = {
    className,
    color,
    variant,
    disabled,
    ...(!asLink
      ? { onClick, type }
      : {
          as: S.Link,
          href: !disabled ? href : '',
          role: 'link',
          target: openLinkInNewTab ? '_blank' : '',
          ['aria-disabled']: disabled,
          download,
        }),
  }

  return <S.Button {...buttonProps}>{label || children}</S.Button>
}
