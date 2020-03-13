import { observeNetwork } from './network';

describe('observeNetwork', () => {
	it('should return a network event', () => {
		observeNetwork().subscribe({
			next: event => {
				console.log(event);
				expect(event).toBeTruthy();
			},
		});
	});
});
