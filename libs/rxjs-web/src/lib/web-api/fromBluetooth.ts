import { Observable, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FEATURE, NotSupportedException } from '../types/support.exception';
import { fromPermission } from './fromPermission';

const hasBluetoothSupport = (): boolean => {
	return globalThis.navigator != null && globalThis.navigator.bluetooth != null;
};

const requestDevice = (options?: RequestDeviceOptions): Observable<BluetoothRemoteGATTServer> =>
	new Observable(subscriber => {
		(async () => {
			let gattServer: BluetoothRemoteGATTServer | undefined;

			try {
				const device = await navigator.bluetooth.requestDevice(options);
				gattServer = await device?.gatt?.connect();

				if (!subscriber.closed) {
					subscriber.next(gattServer);
				}
			} catch (error) {
				if (!subscriber.closed) {
					subscriber.error(error);
				}
			}

			return () => gattServer?.disconnect();
		})();
	});

/**
 * This Exception is thrown when the user didn't grant permission for the
 * Web Bluetooth API.
 * see {@link fromBluetooth}
 */
export class BluetoothPermissionNotGrantedException extends Error {
	public status: PermissionStatus;

	constructor(status: PermissionStatus, message = 'Permission not granted') {
		super(message);
		this.status = status;
	}
}

/**
 * A RxJS operator for getting the results of the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API|Web_Bluetooth_API}
 * @param options RequestDeviceOptions options
 * @returns An Observable of the selected GATT Server
 */
export function fromBluetooth(options?: RequestDeviceOptions): Observable<BluetoothRemoteGATTServer> {
	if (!hasBluetoothSupport()) {
		return throwError(new NotSupportedException(FEATURE.BLUETOOTH));
	}
	return fromPermission({ name: 'bluetooth' }).pipe(
		switchMap((status: PermissionStatus) => {
			if (status.state === 'granted') {
				return requestDevice(options);
			} else {
				return throwError(new BluetoothPermissionNotGrantedException(status));
			}
		})
	);
}
