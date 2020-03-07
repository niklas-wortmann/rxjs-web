import { fromPerformanceObserver } from './performanceObserver';

describe('fromPerformanceObserver', () => {
  it('should return an performance observer', () => {
    fromPerformanceObserver().subscribe({
      next: ({ entries, observer }) => {
        expect(entries.getEntries).toBeTruthy();
      }
    });
  });
});
