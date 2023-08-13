import { useForm } from 'react-hook-form'

import { render, screen } from '@/tests'

import { BILLING_DETAILS } from '../../../utils/constants'
import { CheckoutSchema } from '../../Checkout.schema'
import { BillingDetails } from './BillingDetails'

const BillingDetailsForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<CheckoutSchema>()

  return <BillingDetails register={register} errors={errors} />
}

const setup = () => {
  render(<BillingDetailsForm />)
}

describe('BillingDetails', () => {
  it('displays billing details text', () => {
    setup()

    const billingDetailsText = screen.getByRole('group', { name: BILLING_DETAILS })
    expect(billingDetailsText).toBeInTheDocument()
  })
})
