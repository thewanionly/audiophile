import { render, screen } from '@/tests'
import { NavMenu } from './NavMenu'

describe('NavMenu', () => {
  it('displays the nav items', () => {
    render(<NavMenu />)
  })
})
