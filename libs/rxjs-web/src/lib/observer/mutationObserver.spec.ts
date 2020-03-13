import { fromMutationObserver } from './mutationObserver';

describe('fromMutationObserver', () => {
	let element: Element;

	beforeEach(() => {
		element = document.createElement('div');
	});

	it('should return an mutation observer', () => {
		fromMutationObserver(element).subscribe({
			next: ({ entries }) => {
				expect(entries).toBeInstanceOf(Array);
			},
		});
	});
});
