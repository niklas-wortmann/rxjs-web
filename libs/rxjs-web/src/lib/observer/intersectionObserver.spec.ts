import { fromIntersectionObserver } from './intersectionObserver';
import { FEATURE } from '../types/support.exception';

describe('fromIntersectionObserver', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('should return an interaction observer', () => {
		const element = document.createElement('div');
		fromIntersectionObserver(element).subscribe({
			next: ({ entries }) => {
				expect(entries).toBeInstanceOf(Array);
			},
		});
	});

	it('should emit an error when there is no browser support', done => {
		const element = document.createElement('div');
		const observerRef = globalThis.IntersectionObserver;
		delete (globalThis as any).IntersectionObserver;
		fromIntersectionObserver(element).subscribe({
			error: e => {
				expect(e.feature).toBe(FEATURE.INTERSECTION_OBSERVER);
				globalThis.IntersectionObserver = observerRef;
				done();
			},
		});
	});

	describe('mocked', () => {
		let mockIntersectionObserver: IntersectionObserver;
		let intersectionObserverSpy: jest.SpyInstance<IntersectionObserver>;

		beforeEach(() => {
			mockIntersectionObserver = {
				observe: () => null,
				unobserve: () => null,
				disconnect: () => null,
				root: null,
				rootMargin: '',
				thresholds: [],
				takeRecords: () => [],
			};
			intersectionObserverSpy = jest
				.spyOn(globalThis, 'IntersectionObserver')
				.mockImplementation(() => mockIntersectionObserver);
		});

		it('should create an intersection observer on subscribe', () => {
			const element = document.createElement('div');
			const obs = fromIntersectionObserver(element);
			expect(intersectionObserverSpy).not.toHaveBeenCalled();
			const sub = obs.subscribe();
			expect(intersectionObserverSpy).toHaveBeenCalled();
			sub.unsubscribe();
		});

		it('should cleanup the intersectionObserver on unsubscribe', () => {
			jest.spyOn(mockIntersectionObserver, 'unobserve');
			const element = document.createElement('div');
			const obs = fromIntersectionObserver(element);
			const sub = obs.subscribe();
			sub.unsubscribe();
			expect(mockIntersectionObserver.unobserve).toHaveBeenCalledWith(element);
		});
	});
});
