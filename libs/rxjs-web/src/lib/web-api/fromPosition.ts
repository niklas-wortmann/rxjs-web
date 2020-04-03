import { Observable, TeardownLogic } from 'rxjs';
import { NotSupportedException, FEATURE } from '../types/support.exception';
import { fromError } from '../types/fromError';

const hasPositionSupport = (): boolean => {
	return navigator != null && navigator.geolocation != null && navigator.geolocation.watchPosition != null;
};

/**
 * A RxJS operator for getting the results of the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API|Geolocation API}
 * @param options Geolocation options
 * @returns An Observable of current browser location
 */
export function fromPosition(options?: PositionOptions): Observable<Position | never> {
	if (!hasPositionSupport()) {
		return fromError(new NotSupportedException(FEATURE.GEOLOCATION));
	}
	return new Observable(subscriber => {
		const watchId = navigator.geolocation.watchPosition(
			position => !subscriber.closed && subscriber.next(position),
			error => !subscriber.closed && subscriber.error(error),
			options
		);
		const teardown: TeardownLogic = () => navigator.geolocation.clearWatch(watchId);
		return teardown;
	});
}
