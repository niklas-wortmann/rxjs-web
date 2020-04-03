import { fromNetwork } from './fromNetwork';

describe('observeNetwork', () => {
	it('should return a network event', () => {
		fromNetwork().subscribe({
			next: event => {
				expect(event).toBeTruthy();
			},
		});
	});
});
