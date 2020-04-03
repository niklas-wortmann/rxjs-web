module.exports = {
	testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
	transform: {
		'^.+\\.(ts|js|html)$': 'ts-jest',
	},
	globalSetup: 'jest-environment-puppeteer/setup',
	globalTeardown: 'jest-environment-puppeteer/teardown',
	testEnvironment: 'jest-environment-puppeteer',
	resolver: '@nrwl/jest/plugins/resolver',
	moduleFileExtensions: ['ts', 'js', 'html'],
	coverageReporters: ['html'],
	rootDir: 'libs/rxjs-web/',
	testURL: 'http://localhost/',
	coverageThreshold: {
		global: {
			branches: 60,
			functions: 60,
			lines: 75,
			statements: 75,
		},
	},
	setupFiles: ['<rootDir>../../test/browser.ts'],
	globals: {
		'ts-jest': {
			diagnostics: false,
		},
	},
};
