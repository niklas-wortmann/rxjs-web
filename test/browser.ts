const { JSDOM } = require('jsdom');
const dom = new JSDOM();

class GenericObserver {
	constructor(fn: any) {
		fn([], {});
	}

	observe() {
		return undefined;
	}
}

class MockPerformanceObserver {
	constructor(fn: any) {
		fn({
			getEntries: () => [],
			getEntriesByName: (name: string) => [],
			getEntriesByType: (type: string) => [],
		});
	}

	observe() {
		return undefined;
	}
}

const observerMocks = {
	IntersectionObserver: GenericObserver,
	IntersectionObserverEntry: () => undefined,
	MutationObserver: GenericObserver,
	MutationRecord: () => undefined,
	PerformanceObserver: MockPerformanceObserver,
	PerformanceObserverEntryList: () => undefined,
	ResizeObserver: GenericObserver,
	ResizeObserverEntry: () => undefined,
};

Object.assign(global, { document: dom.window.document });
Object.assign(global, { window: dom.window }, { window: observerMocks });
Object.assign(global, {
	navigator: {
		...dom.window.navigator,
		geolocation: {
			watchPosition: (success: any, failure: any) => {
				success({ timestamp: Date.now });
			},
			clearWatch: () => undefined,
		},
		connection: {
			addEventListener: (name: string, handler: any) => handler({ event: true }),
			removeEventListener: () => undefined,
		},
		permissions: {
			query: () => new Promise(res => res({ state: 'granted' })),
		},
	},
});
Object.assign(global, observerMocks);
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // deprecated
		removeListener: jest.fn(), // deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});
