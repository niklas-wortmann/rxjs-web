import { Observable, TeardownLogic, throwError } from 'rxjs';
import { NotSupportedException, FEATURE } from '../types/support.exception';
import { fromPermission } from './fromPermission';
import { switchMap } from 'rxjs/operators';

const hasPositionSupport = (): boolean => {
	return (
		globalThis.navigator != null &&
		globalThis.navigator.geolocation != null &&
		globalThis.navigator.geolocation.watchPosition != null
	);
};

const watchPermission = (options?: PositionOptions): Observable<Position> =>
	new Observable(subscriber => {
		const watchId = navigator.geolocation.watchPosition(
			position => !subscriber.closed && subscriber.next(position),
			error => !subscriber.closed && subscriber.error(error),
			options
		);
		const teardown: TeardownLogic = () => navigator.geolocation.clearWatch(watchId);
		return teardown;
	});

/**
 * This Exception is thrown when the user didn't grant permission for the
 * position API.
 * see {@link fromPosition}
 */
export class PositionPermissionNotGrantedException extends Error {
	public status: PermissionStatus;

	constructor(status: PermissionStatus, message = 'Permission not granted') {
		super(message);
		this.status = status;
	}
}

/**
 * A RxJS operator for getting the results of the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API|Geolocation API}
 * @param options Geolocation options
 * @returns An Observable of current browser location
 */
export function fromPosition(options?: PositionOptions): Observable<Position> {
	if (!hasPositionSupport()) {
		return throwError(new NotSupportedException(FEATURE.GEOLOCATION));
	}
	return fromPermission({ name: 'geolocation' }).pipe(
		switchMap((status: PermissionStatus) => {
			if (status.state === 'granted') {
				return watchPermission(options);
			} else {
				return throwError(new PositionPermissionNotGrantedException(status));
			}
		})
	);
}
