import { fromPerformanceObserver } from '../src/observer/performanceObserver';

describe('fromPerformanceObserver', () => {
  it('should return an performance observer', () => {
    fromPerformanceObserver().subscribe({
      next: ({ entries, observer }) => {
        expect(entries.getEntries).toBeTruthy();
      }
    });
  });
});
