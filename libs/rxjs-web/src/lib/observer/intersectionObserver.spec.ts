import { fromIntersectionObserver } from './intersectionObserver';

describe('fromIntersectionObserver', () => {
	it('should return an interaction observer', () => {
		const element = document.createElement('div');
		fromIntersectionObserver(element).subscribe({
			next: ({ entries }) => {
				expect(entries).toBeInstanceOf(Array);
			},
		});
	});
});
