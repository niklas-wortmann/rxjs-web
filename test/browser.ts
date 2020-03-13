const { JSDOM } = require('jsdom');
const dom = new JSDOM();

class GenericObserver {
	constructor(fn: any) {
		fn([], {});
	}

	observe() {}
}

class MockPerformanceObserver {
	constructor(fn: any) {
		fn({
			getEntries: () => [],
			getEntriesByName: (name: string) => [],
			getEntriesByType: (type: string) => [],
		});
	}

	observe() {}
}

Object.assign(global, { document: dom.window.document });
Object.assign(global, { window: dom.window });
Object.assign(global, {
	navigator: {
		...dom.window.navigator,
		geolocation: {
			watchPosition: (success: any, faulure: any) => {
				success({ timestamp: Date.now });
			},
			clearWatch: () => {},
		},
		connection: {
			addEventListener: (name: string, handler: any) => handler({ event: true }),
			removeEventListener: () => {},
		},
	},
});
Object.assign(global, {
	IntersectionObserver: GenericObserver,
	MutationObserver: GenericObserver,
	ResizeObserver: GenericObserver,
	PerformanceObserver: MockPerformanceObserver,
});
