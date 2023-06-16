import nextJest from 'next/jest.js'
import type { Config } from '@jest/types'

const customJestConfig: Config.InitialOptions = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
}

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)()

  return {
    ...nextJestConfig,
    // Set up this way to fix svgr issue in Jest. Source: https://github.com/vercel/next.js/discussions/42535#discussion-4542627
    moduleNameMapper: {
      '\\.svg$': '<rootDir>/src/tests/__mocks__/svg.ts',
      ...nextJestConfig.moduleNameMapper,
    },
  }
}

export default jestConfig
