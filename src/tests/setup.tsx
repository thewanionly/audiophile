import { ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

import { StyleRegistry } from '@/lib'
import { GlobalStyles } from '@/styles'

type RootWrapperProps = {
  children?: React.ReactNode
}

const RootWrapper = ({ children }: RootWrapperProps) => {
  return (
    <StyleRegistry>
      <GlobalStyles />
      {children}
    </StyleRegistry>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
  render(ui, { wrapper: RootWrapper, ...options })

export * from '@testing-library/react'

export { customRender as render }
