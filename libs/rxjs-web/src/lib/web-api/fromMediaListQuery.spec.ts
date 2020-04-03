import { fromMediaListQuery } from './fromMediaListQuery';

describe('fromMediaListQuery', () => {
	it('should return an mutation observer', () => {
		const mediaQueryList = window.matchMedia('(min-width: 1px)');
		fromMediaListQuery(mediaQueryList).subscribe({
			next: ({ matches }) => {
				expect(matches).toBeTruthy();
			},
		});
	});
});
