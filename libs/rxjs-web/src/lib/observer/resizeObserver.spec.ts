import { fromResizeObserver } from './resizeObserver';

describe('fromResizeObserver', () => {
	let element: Element;

	beforeEach(() => {
		element = document.createElement('div');
	});

	it('should return an resize observer', () => {
		fromResizeObserver(element).subscribe({
			next: ({ entries }) => {
				expect(entries).toBeInstanceOf(Array);
			},
		});
	});
});
