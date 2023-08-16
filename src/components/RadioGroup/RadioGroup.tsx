import styled from '@emotion/styled'
import {
  Radio,
  RadioGroup as MUIRadioGroup,
  RadioGroupProps as MUIRadioGroupProps,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material'

interface RadioGroupOption {
  label: string
  value: string
}

type RadioGroupProps = MUIRadioGroupProps & {
  className?: string
  label: string
  error?: boolean
  errorMessage?: string
  options: RadioGroupOption[]
}

export const RadioGroup = ({
  className,
  label,
  error = false,
  errorMessage,
  options,
  ...radioGroupProps
}: RadioGroupProps) => {
  return (
    <FormControl className={className}>
      <label htmlFor={radioGroupProps.id}>{label}</label>
      <MUIRadioGroup {...radioGroupProps}>
        {options.map(({ label, value }) => (
          <FormControlLabel key={value} label={label} value={value} control={<Radio />} />
        ))}
      </MUIRadioGroup>
    </FormControl>
  )
}
