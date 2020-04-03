import { fromResizeObserver } from './resizeObserver';

describe('fromResizeObserver', () => {
	it('should return an resize observer', () => {
		const element = document.createElement('div');
		fromResizeObserver(element).subscribe({
			next: ({ entries }) => {
				expect(entries).toBeInstanceOf(Array);
			},
		});
	});
});
