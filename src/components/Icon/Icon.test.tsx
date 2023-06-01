import { render, screen } from '@/tests'

import { Icon, IconName } from './Icon'

describe('Icon', () => {
  describe('Layout', () => {
    it('displays the icon as indicated in the `name` prop', () => {
      const iconName = IconName.Cart
      render(<Icon name={iconName} />)

      const icon = screen.getByLabelText(`${iconName} icon`)

      expect(icon).toBeInTheDocument()
    })
  })
})
