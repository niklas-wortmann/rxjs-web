import { Observable, TeardownLogic } from 'rxjs';
import { NotSupportedException, FEATURE } from '../types/support.exception';

const hasPositionSupport = (): boolean => {
	return navigator != null && navigator.geolocation != null && navigator.geolocation.watchPosition != null;
};

/**
 * A RxJS operator for getting the results of the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API|Geolocation API}
 * @param options Geolocation options
 * @returns An Observable of current browser location
 */
export function observePosition(options?: PositionOptions): Observable<Position | never> {
	return new Observable(subscriber => {
		if (!hasPositionSupport()) {
			subscriber.error(new NotSupportedException(FEATURE.GEOLOCATION));
			return;
		} else {
			const watchId = navigator.geolocation.watchPosition(
				position => !subscriber.closed && subscriber.next(position),
				error => !subscriber.closed && subscriber.error(error),
				options
			);
			const teardown: TeardownLogic = () => navigator.geolocation.clearWatch(watchId);
			return teardown;
		}
	});
}
