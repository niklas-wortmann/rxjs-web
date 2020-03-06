const {defaults} = require('jest-config');

module.exports = {

  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  globalSetup: 'jest-environment-puppeteer/setup',
  globalTeardown: 'jest-environment-puppeteer/teardown',
  testEnvironment: 'jest-environment-puppeteer',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/'
  ],
  coverageThreshold: {
    'global': {
      'branches': 90,
      'functions': 95,
      'lines': 95,
      'statements': 95
    }
  },
  collectCoverageFrom: [
    'src/*.{js,ts}'
  ],
  globals: {
    window: {},
    navigator: {
      geolocation: {
        watchPosition: (success, faulure) => {
          success({timestamp: Date.now});
        },
        clearWatch: () => {
        },
      }
    }
  }
};
