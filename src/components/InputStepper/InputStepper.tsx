'use client'

import { ChangeEvent, FocusEvent, useState } from 'react'

import styled from '@emotion/styled'
import { Button } from '@mui/base/Button'
import { Input } from '@mui/base/Input'

import { NON_NUMERIC_REGEX } from '@/utils/constants'

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

    &:disabled {
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.stepperButtonDisabled};

      &:hover {
        color: ${({ theme }) => theme.colors.stepperButtonDisabled};
      }
    }
  `,
}

export type InputStepperProps = {
  className?: string
  value: number
  min?: number
  onChange: (value: number) => void
}

export const InputStepper = ({
  className = '',
  value,
  min,
  onChange: updateValue,
}: InputStepperProps) => {
  const [inputValue, setInputValue] = useState(value.toString())

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '0') {
      // Allow only numeric values and limit input to numbers
      setInputValue(event.target.value.replace(NON_NUMERIC_REGEX, ''))
    }
  }

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      // If current input is empty (user deletes the input value), when input loses focus, revert `inputValue` to previous value
      setInputValue(value.toString())
    } else {
      const inputtedNumber = Number(event.target.value)
      let newValue = inputtedNumber

      if (min && inputtedNumber < min) {
        newValue = min

        setInputValue(newValue.toString())
      }

      updateValue(newValue)
    }
  }

  const handleDecrementValue = () => {
    const newValue = Number(inputValue) - 1

    setInputValue(newValue.toString())
    updateValue(newValue)
  }

  const handleIncrementValue = () => {
    const newValue = Number(inputValue) + 1

    setInputValue(newValue.toString())
    updateValue(newValue)
  }

  return (
    <S.InputStepper className={className}>
      <S.StepperButton
        aria-label="decrement"
        onClick={handleDecrementValue}
        disabled={Boolean(!inputValue || (min && inputValue <= min.toString()))}
      >
        -
      </S.StepperButton>
      <S.InputBox
        aria-label="input value"
        type="text"
        inputMode="numeric"
        value={inputValue}
        onChange={handleChangeValue}
        onBlur={handleInputBlur}
      />
      <S.StepperButton aria-label="increment" onClick={handleIncrementValue} disabled={!inputValue}>
        +
      </S.StepperButton>
    </S.InputStepper>
  )
}
