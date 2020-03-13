import { fromPerformanceObserver } from './performanceObserver';

describe('fromPerformanceObserver', () => {
	it('should return an performance observer', () => {
		fromPerformanceObserver().subscribe({
			next: ({ entries }) => {
				expect(entries.getEntries).toBeTruthy();
			},
		});
	});
});
