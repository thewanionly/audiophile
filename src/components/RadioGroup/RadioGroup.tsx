import React, { forwardRef } from 'react'

import BaseInput, { InputProps as BaseInputProps } from '@mui/base/Input'

type RadioGroupProps = {
  className?: string
  label: string
  error?: boolean
  errorMessage?: string
  children: React.ReactNode
}

export const RadioGroup = ({
  className,
  label,
  error = false,
  errorMessage,
  children,
}: RadioGroupProps) => {
  return (
    <fieldset className={className}>
      <legend>{label}</legend>
      {children}
    </fieldset>
  )
}

type RadioInputProps = BaseInputProps & {
  label: string
  value: string
}

export const RadioInput = forwardRef(function CustomRadioInput(
  { label, value, name, onChange }: RadioInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div>
      <BaseInput ref={ref} type="radio" id={value} name={name} value={value} onChange={onChange} />
      <label htmlFor={value}>{label}</label>
    </div>
  )
})
