import { useForm } from 'react-hook-form'

import { render, screen } from '@/tests'

import { BILLING_DETAILS } from '../../../utils/constants'
import { BillingDetails } from './BillingDetails'

type Inputs = {
  name: string
}

const TestEnv = () => {
  const { register } = useForm<Inputs>()

  return <BillingDetails register={register} />
}

const setup = () => {
  render(<TestEnv />)
}

describe('BillingDetails', () => {
  it('displays billing details text', () => {
    setup()

    const billingDetailsText = screen.getByRole('group', { name: BILLING_DETAILS })
    expect(billingDetailsText).toBeInTheDocument()
  })
})
