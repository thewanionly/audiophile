import { ForwardedRef, ReactNode, forwardRef } from 'react'

import styled from '@emotion/styled'
import BaseInput, { InputProps as BaseInputProps } from '@mui/base/Input'

import { mediaQuery } from '@/styles/utils'

const S = {
  RadioGroup: styled.fieldset``,
  RadioGroupContainer: styled.div`
    display: grid;
    row-gap: 1.7rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 0.7rem;
      column-gap: 1.6rem;
    }
  `,
  RadioGroupLabel: styled.legend<{ isError: boolean }>`
    grid-area: 1 / 1 / 2 / 2;
    display: inline-block;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: normal;
    letter-spacing: -0.0214rem;
    color: ${({ theme, isError }) => (isError ? theme.colors.inputError : theme.colors.inputLabel)};
  `,
  RadioGroupError: styled.span`
    justify-self: flex-end;
    grid-area: 1 / 2 / 2 / 3;

    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: normal;
    letter-spacing: -0.0214rem;
    color: ${({ theme }) => theme.colors.inputError};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      justify-self: flex-start;
      grid-area: 2 / 1 / 3 / 2;
    }
  `,
  RadioGroupInputs: styled.div`
    grid-area: 2 / 1 / 3 / 3;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      grid-area: 1 / 2 / 4 / 3;
    }
  `,
  RadioInputContainer: styled.label`
    border-radius: 0.8rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.inputBorder};
    padding: 1.8rem;

    display: flex;
    gap: 1.6rem;
    align-items: center;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &:focus,
    &:focus-within {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors.primary};
    }

    &:focus-visible {
      outline: 0;
    }
  `,
  RadioInput: styled(BaseInput)`
    width: 2rem;
    height: 2rem;

    .MuiInput-input {
      width: 2rem;
      height: 2rem;

      // Hide native appearance
      appearance: none;
      -webkit-appearance: none;

      // Custom radio button styling
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.radioButtonDotDefault}; // radio dot's color
      border: 0.3rem solid ${({ theme }) => theme.colors.radioButtonBg}; // spacing between the dot and the outer circle
      box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors.radioButtonBorder}; // outer circle's border

      transition: all 0.1s ease-out;

      &:checked {
        background: ${({ theme }) => theme.colors.radioButtonDotChecked};
      }

      &:focus {
        box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.primary};
      }

      &:focus-visible {
        outline: 0;
      }
    }
  `,
  RadioInputLabel: styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.sm2};
    line-height: normal;
    letter-spacing: -0.025rem;
    color: ${({ theme }) => theme.colors.inputLabel};
  `,
}

type RadioGroupProps = {
  className?: string
  label: string
  error?: boolean
  errorMessage?: string
  children: ReactNode
}

export const RadioGroup = ({
  className,
  label,
  error = false,
  errorMessage,
  children,
}: RadioGroupProps) => {
  return (
    <S.RadioGroup className={className}>
      <S.RadioGroupContainer>
        <S.RadioGroupLabel isError={error}>{label}</S.RadioGroupLabel>
        {error && errorMessage && (
          <S.RadioGroupError data-testid="radio-group-error">{errorMessage}</S.RadioGroupError>
        )}
        <S.RadioGroupInputs>{children}</S.RadioGroupInputs>
      </S.RadioGroupContainer>
    </S.RadioGroup>
  )
}

type RadioInputProps = BaseInputProps & {
  label: string
  value: string
}

export const RadioInput = forwardRef(function CustomRadioInput(
  { label, value, name, onChange }: RadioInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <S.RadioInputContainer htmlFor={value}>
      <S.RadioInput
        ref={ref}
        type="radio"
        id={value}
        name={name}
        value={value}
        onChange={onChange}
      />
      <S.RadioInputLabel>{label}</S.RadioInputLabel>
    </S.RadioInputContainer>
  )
})
