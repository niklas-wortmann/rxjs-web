import 'jest-environment-puppeteer';
import { take } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';
import { fromBluetooth } from './fromBluetooth';

xdescribe('fromBluetooth', () => {
	let requestDeviceSuccessCb: any;
	let requestDeviceSuccessCb: any;
	const gattServerMocked: Partial<BluetoothRemoteGATTServer> = {
		device: {
			name: '',
		} as any,
		connected: true,
	};

	beforeEach(() => {
		const requestDeviceMock = navigator.bluetooth.requestDevice as jest.Mock;
		requestDeviceMock.mockImplementation(() => {
			return gattServerMocked;
		});
	});

	it('should return an observable of a Position', done => {
		fromBluetooth()
			.pipe(take(1))
			.subscribe({
				next: gatt => expect(gatt).toBeTruthy(),
				complete: () => done(),
			});
		requestDeviceSuccessCb(gattServerMocked);
	});

	describe('marble tests', () => {
		it('should just work', () => {
			requestDeviceSuccessCb(gattServerMocked);
			const testScheduler = new TestScheduler((actual, expected) => {
				expect(actual).toEqual(expected);
			});
			testScheduler.run(helpers => {
				// const { expectObservable } = helpers;
				// expectObservable(fromBluetooth().pipe(take(2))).toBe(gattServerMocked);
			});
		});
	});
});
