import { fromEventPattern, Observable, throwError } from 'rxjs';
import { NotSupportedException, FEATURE } from '../types/support.exception';

/**
 * A RxJS operator for getting the results of the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection|Navigator Connection API}
 * @returns An Observable of events from the media query
 */
export function fromNetwork(): Observable<Event> {
	if (!(navigator && navigator.connection)) {
		return throwError(new NotSupportedException(FEATURE.NETWORK));
	} else {
		const connection = navigator.connection;
		return fromEventPattern(
			handler => connection.addEventListener('change', handler),
			handler => connection.removeEventListener('change', handler)
		);
	}
}
