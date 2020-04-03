import { fromPosition } from './fromPosition';
import { take } from 'rxjs/operators';
import 'jest-environment-puppeteer';

describe('fromPosition', () => {
	it('should return an observable of a Position', done => {
		fromPosition()
			.pipe(take(1))
			.subscribe({
				next: position => expect(position.timestamp).toBeTruthy(),
				complete: () => done(),
			});
	});
});
