'use client'

import styled from '@emotion/styled'
import Button from '@mui/base/Button'

const S = {
  InputStepper: styled.div`
    background-color: ${({ theme }) => theme.colors.inputStepper};
    width: max-content;
    padding: 1.5rem;

    display: flex;
    gap: 1rem;
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

export const InputStepper = ({ className = '' }: InputStepperProps) => {
  return (
    <S.InputStepper className={className}>
      <S.StepperButton aria-label="decrement">-</S.StepperButton>
      <S.StepperButton aria-label="increment">+</S.StepperButton>
    </S.InputStepper>
  )
}
