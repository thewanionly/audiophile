'use client'

import { forwardRef } from 'react'

import styled from '@emotion/styled'
import BaseInput, { InputProps as BaseInputProps } from '@mui/base/Input'

const S = {
  InputContainer: styled.div`
    display: grid;
    row-gap: 0.9rem;
  `,
  InputLabel: styled.label<{ isError: boolean }>`
    grid-area: 1 / 1 / 2 / 2;
    display: inline-block;

    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: normal;
    letter-spacing: -0.0214rem;
    color: ${({ theme, isError }) => (isError ? theme.colors.inputError : theme.colors.inputLabel)};
  `,
  InputError: styled.span`
    justify-self: flex-end;
    grid-area: 1 / 2 / 2 / 3;

    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: normal;
    letter-spacing: -0.0214rem;
    color: ${({ theme }) => theme.colors.inputError};
  `,
  Input: styled(BaseInput)`
    grid-area: 2 / 1 / 3 / 3;
    width: 100%;

    .MuiInput-input {
      width: 100%;
      padding: 1.8rem 2.4rem;
      border-radius: 0.8rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.inputBorder};
      background-color: ${({ theme }) => theme.colors.inputBg};
      color: ${({ theme }) => theme.colors.inputText};
      caret-color: ${({ theme }) => theme.colors.primary};

      font-weight: ${({ theme }) => theme.fontWeights.bold};
      font-size: ${({ theme }) => theme.fontSizes.sm2};
      line-height: normal;
      letter-spacing: -0.025rem;

      &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
      }

      &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors.primary};
      }

      &:focus-visible {
        outline: 0;
      }
    }

    &.Mui-error .MuiInput-input {
      border-color: ${({ theme }) => theme.colors.inputError};
      box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors.inputError};
    }
  `,
}

type InputProps = BaseInputProps & {
  className?: string
  label: string
  errorMessage?: string
}

export const Input = forwardRef(function CustomInput(
  { className, label, errorMessage, ...inputProps }: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <S.InputContainer className={className}>
      <S.InputLabel
        data-testid="input-label"
        htmlFor={inputProps.id}
        isError={Boolean(inputProps.error)}
      >
        {label}
      </S.InputLabel>
      <S.Input {...inputProps} ref={ref} />
      {inputProps.error && errorMessage && (
        <S.InputError data-testid="input-error">{errorMessage}</S.InputError>
      )}
    </S.InputContainer>
  )
})
