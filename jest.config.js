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
    '/test/',
    '/src/rxjs-web.ts'
  ],
  coverageThreshold: {
    'global': {
      'branches': 60,
      'functions': 60,
      'lines': 75,
      'statements': 75
    }
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts}'
  ],
  setupFiles: [
    './mocks/browser.js'
  ]
};
