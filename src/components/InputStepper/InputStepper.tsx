'use client'

import { ChangeEvent, FocusEvent, useState } from 'react'

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
  value: number
  onChange: (value: number) => void
}

const NON_NUMERIC_REGEX = /[^0-9]/g

export const InputStepper = ({
  className = '',
  value,
  onChange: updateValue,
}: InputStepperProps) => {
  const [inputValue, setInputValue] = useState(value.toString())

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    // Allow only numeric values and limit input to numbers
    setInputValue(event.target.value.replace(NON_NUMERIC_REGEX, ''))
  }

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      // If current input is empty (user deletes the input value), when input loses focus, revert `inputValue` to previous value
      setInputValue(value.toString())
    } else {
      // Update `value` prop only when there's an input value and user is out of focus from the input
      updateValue(Number(event.target.value))
    }
  }

  return (
    <S.InputStepper className={className}>
      <S.StepperButton aria-label="decrement">-</S.StepperButton>
      <S.InputBox
        aria-label="input value"
        type="text"
        inputMode="numeric"
        value={inputValue}
        onChange={handleChangeValue}
        onBlur={handleInputBlur}
      />
      <S.StepperButton aria-label="increment">+</S.StepperButton>
    </S.InputStepper>
  )
}
