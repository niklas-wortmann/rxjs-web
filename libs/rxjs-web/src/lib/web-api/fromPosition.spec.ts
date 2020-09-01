import { fromPosition } from './fromPosition';
import { take } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';
import 'jest-environment-puppeteer';

xdescribe('fromPosition', () => {
	let watchPositionSuccessCb: any;
	let watchPositionErrorCb: any;

	beforeEach(() => {
		const watchPositionMock = navigator.geolocation.watchPosition as jest.Mock;
		watchPositionMock.mockImplementation((successCb, errorCb) => {
			console.log('call mock implementation in before each');
			watchPositionSuccessCb = successCb;
			watchPositionSuccessCb = errorCb;
		});
	});

	it('should return an observable of a Position', done => {
		fromPosition()
			.pipe(take(1))
			.subscribe({
				next: position => expect(position.timestamp).toBeTruthy(),
				complete: () => done(),
			});
		watchPositionSuccessCb({ timestamp: new Date() });
	});

	describe('marble tests', () => {
		it('should just work', () => {
			const iId = setInterval(val => watchPositionSuccessCb(val), 10);
			const testScheduler = new TestScheduler((actual, expected) => {
				expect(actual).toEqual(expected);
			});
			testScheduler.run(helpers => {
				const { expectObservable } = helpers;
				const expected = '9ms 0 9ms 1|';
				expectObservable(fromPosition().pipe(take(2))).toBe(expected);
				clearInterval(iId);
			});
		});
	});
});
