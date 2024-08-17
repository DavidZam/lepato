module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/cypress'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/app/components/$1',
    '^@models/(.*)$': '<rootDir>/src/app/core/models/$1',
    '^@services/(.*)$': '<rootDir>/src/app/core/services/$1',
    '^@pages/(.*)$': '<rootDir>/src/app/pages/$1',
  },
  restoreMocks: true,
};
