import { ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

import { MantineRegistry } from '@/lib'

type RootWrapperProps = {
  children?: React.ReactNode
}

const RootWrapper = ({ children }: RootWrapperProps) => {
  return <MantineRegistry>{children}</MantineRegistry>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
  render(ui, { wrapper: RootWrapper, ...options })

export * from '@testing-library/react'

export { customRender as render }
