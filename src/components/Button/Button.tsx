'use client'

import Link from 'next/link'

import { Theme, css } from '@emotion/react'
import styled from '@emotion/styled'

import { transientOptions } from '@/styles/utils'

// Generates button styles depending on the `color` and `variant` props
const colorVariantStyles = (
  theme: Theme,
  color: ButtonColor = ButtonColor.PRIMARY,
  variant: ButtonVariant = ButtonVariant.CONTAINED,
  disabled = false,
  isLoading = false
) =>
  ({
    [ButtonColor.PRIMARY]: {
      [ButtonVariant.CONTAINED]: css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.textOnPrimary};

        &:hover {
          background-color: ${theme.colors.primaryLight};
        }

        ${(disabled || isLoading) &&
        css`
          background-color: ${theme.colors.primaryLight};
          opacity: 0.7;
          cursor: ${isLoading ? 'wait' : 'not-allowed'};

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

        ${(disabled || isLoading) &&
        css`
          background-color: ${theme.colors.primaryLight};
          border-color: ${theme.colors.primaryLight};
          opacity: 0.7;
          cursor: ${isLoading ? 'wait' : 'not-allowed'};

          &:hover {
            background-color: ${theme.colors.primaryLight};
          }
        `}
      `,
      [ButtonVariant.TERTIARY]: css`
        background-color: transparent;
        text-transform: none;
        border: none;
        padding: 0;

        color: ${theme.colors.buttonTertiary};

        &:hover {
          color: ${theme.colors.buttonTertiaryHover};
        }

        ${(disabled || isLoading) &&
        css`
          color: ${theme.colors.buttonTertiaryDisabled};
          cursor: ${isLoading ? 'wait' : 'not-allowed'};

          &:hover {
            color: ${theme.colors.buttonTertiaryDisabled};
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
      [ButtonVariant.TERTIARY]: css`
        background-color: transparent;
        text-transform: none;
        border: none;
        padding: 0;

        color: ${theme.colors.buttonTertiary};

        &:hover {
          color: ${theme.colors.buttonTertiaryHover};
        }

        ${(disabled || isLoading) &&
        css`
          color: ${theme.colors.buttonTertiaryDisabled};
          cursor: ${isLoading ? 'wait' : 'not-allowed'};

          &:hover {
            color: ${theme.colors.buttonTertiaryDisabled};
          }
        `}
      `,
    },
  }[color][variant])

const buttonStyles = (
  theme: Theme,
  { color, variant, disabled, $isLoading }: ButtonStyleProps
) => css`
  display: inline-block;
  padding: 1.5rem 3rem;

  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.sm1};
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  transition: all 0.3s;

  ${colorVariantStyles(theme, color, variant, disabled, $isLoading)}
`

const S = {
  Button: styled('button', transientOptions)<ButtonStyleProps>`
    ${({ theme, color, variant, disabled, $isLoading }) =>
      buttonStyles(theme, {
        color,
        variant,
        disabled,
        $isLoading,
      })}
  `,
  Link: styled(Link, transientOptions)<ButtonStyleProps>`
    ${({ theme, color, variant, disabled, $isLoading }) =>
      buttonStyles(theme, {
        color,
        variant,
        disabled,
        $isLoading,
      })}
  `,
}

export enum ButtonColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TERTIARY = 'tertiary',
}

type ButtonProps = {
  asLink?: boolean
  children?: React.ReactNode
  className?: string
  color?: ButtonColor
  download?: string
  disabled?: boolean
  isLoading?: boolean
  href?: string
  label?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  openLinkInNewTab?: boolean
  variant?: ButtonVariant
  type?: 'submit' | 'button' | 'reset'
  form?: string
}

type ButtonStyleProps = Omit<ButtonProps, 'isLoading'> & { $isLoading?: boolean }

export const Button = ({
  asLink = false,
  children,
  className = '',
  color = ButtonColor.PRIMARY,
  download,
  disabled = false,
  isLoading = false,
  href = '',
  label,
  onClick,
  openLinkInNewTab = false,
  variant = ButtonVariant.CONTAINED,
  type = 'button',
  form,
}: ButtonProps) => {
  const commonProps = {
    className,
    color,
    variant,
    disabled: disabled || isLoading,
    $isLoading: isLoading,
    onClick,
  }

  if (asLink) {
    return (
      <S.Link
        {...commonProps}
        href={disabled || isLoading ? '' : href}
        role="link"
        target={openLinkInNewTab ? '_blank' : ''}
        aria-disabled={disabled || isLoading}
        download={download}
      >
        {label || children}
      </S.Link>
    )
  }

  return (
    <S.Button {...commonProps} type={type} form={form}>
      {label || children}
    </S.Button>
  )
}
