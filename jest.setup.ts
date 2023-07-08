import '@testing-library/jest-dom/extend-expect'

import { MockedImage } from '@/tests/__mocks__/imageCompontent'

jest.mock('next/image', () => ({
  __esModule: true,
  default: MockedImage,
}))
