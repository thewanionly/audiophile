'use client'

import { useState } from 'react'

import styled from '@emotion/styled'
import Button from '@mui/base/Button'
import Input from '@mui/base/Input'

const S = {
  InputStepper: styled.div`
    background-color: ${({ theme }) => theme.colors.inputStepper};
    width: 12rem;
    padding: 1.5rem;

    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  InputBox: styled(Input)`
    .MuiInput-input {
      background-color: ${({ theme }) => theme.colors.inputStepper};
      border: none;
      outline: none;
      width: 100%;

      font-weight: ${({ theme }) => theme.fontWeights.bold};
      font-size: ${({ theme }) => theme.fontSizes.sm1};
      line-height: normal;
      letter-spacing: 0.1rem;
      text-align: center;

      /* For Chrome and Safari  */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* For Firefox  */
      & {
        -moz-appearance: textfield;
      }
    }
  `,
  StepperButton: styled(Button)`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.sm1};
    line-height: normal;
    letter-spacing: 0.1rem;
    text-align: center;

    width: 1.6rem;
    height: 1.8rem;
    color: ${({ theme }) => theme.colors.stepperButton};
    background-color: transparent;

    transition: all 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
}

type InputStepperProps = {
  className?: string
}

export const MINIMUM_VALUE = 1

export const InputStepper = ({ className = '' }: InputStepperProps) => {
  const [value, setValue] = useState(MINIMUM_VALUE)

  return (
    <S.InputStepper className={className}>
      <S.StepperButton aria-label="decrement">-</S.StepperButton>
      <S.InputBox aria-label="input value" type="number" value={value} />
      <S.StepperButton aria-label="increment">+</S.StepperButton>
    </S.InputStepper>
  )
}
