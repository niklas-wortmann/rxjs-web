export const enum FEATURE {
	INTERSECTION_OBSERVER = 'IntersectionObserver',
	MUTATION_OBSERVER = 'MutationObserver',
	PERFORMANCE_OBSERVER = 'PerformanceObserver',
	RESIZE_OBSERVER = 'ResizeObserver',
	GEOLOCATION = 'Geolocation API',
	NETWORK = 'Network API',
	PERMISSION = 'Permission API',
}

export class NotSupportedException extends Error {
	constructor(public feature: FEATURE, message = 'is not fully supported') {
		super(`${feature} ${message}`);
	}
}
