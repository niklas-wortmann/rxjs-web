import { Observable, throwError } from 'rxjs';
import { ObserverNotification } from '../types/observer';
import { NotSupportedException, FEATURE } from '../types/support.exception';

const hasMutationObserverSupport = () => {
	return ['MutationObserver', 'MutationRecord'].every(feature => feature in globalThis);
};

/**
 * Mutation Notification
 */
export type MutationNotification = ObserverNotification<MutationRecord, MutationObserver>;

/**
 * A RxJS operator for getting results from the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver|MutationObserver API}
 * This observable will emit a {@link FeatureNotFullySupportedException} when the browser does not support Mutation Observer
 * Do note: that MutationObserver requires at least of the following properties for the MutationObserverInit options:
 * 'childList', 'attributes', 'chartacterData', otherwise it would throw a runtimeError
 * @param target The target element to observe
 * @param options `MutationObserver` options
 * @returns An Observable containing a list of `MutationRecord` items and the `MutationObserver`
 */
export function fromMutationObserver(
	target: Node,
	options: RequireAtLeastOne<MutationObserverInit, 'childList' | 'attributes' | 'characterData'>
): Observable<MutationNotification> {
	if (!hasMutationObserverSupport()) {
		return throwError(new NotSupportedException(FEATURE.MUTATION_OBSERVER));
	}
	return new Observable(subscriber => {
		const mutationObserver = new MutationObserver((entries, observer) => {
			subscriber.next({ entries, observer });
		});
		mutationObserver.observe(target, options);
		return mutationObserver.disconnect;
	});
}
