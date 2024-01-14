/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: '.coverage',
  coverageThreshold: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: -10,
  },
};
