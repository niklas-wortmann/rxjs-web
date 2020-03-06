import { fromIntersectionObserver } from '../src/observer/intersectionObserver';

describe('fromIntersectionObserver', () => {
  let element: Element;

  beforeEach(() => {
    element = document.createElement('div');
  });

  it('should return an interaction observer', () => {
    fromIntersectionObserver(element).subscribe({
      next: ({ entries, observer }) => {
        expect(entries).toBeInstanceOf(Array);
      }
    });
  });
});
