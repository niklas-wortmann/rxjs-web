import { fromMediaListQuery } from './matchMedia';

describe('fromMediaListQuery', () => {
  let mediaQueryList: any;

  beforeEach(() => {
    mediaQueryList = {
      addEventListener: (name: string, handler: any) =>
        handler({ matches: true }),
      removeEventListener: () => {}
    };
  });

  it('should return an mutation observer', () => {
    fromMediaListQuery(mediaQueryList).subscribe({
      next: ({ matches }) => {
        expect(matches).toBeTruthy();
      }
    });
  });
});
