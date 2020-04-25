import { fromMutationObserver } from './mutationObserver';

describe('fromMutationObserver', () => {
	it('should return an mutation observer', () => {
		const element = document.createElement('div');
		fromMutationObserver(element, { childList: true }).subscribe({
			next: ({ entries }) => {
				expect(entries).toBeInstanceOf(Array);
			},
		});
	});
});
