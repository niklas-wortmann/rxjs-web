import { Observable, throwError } from 'rxjs';
import { ObserverNotification } from '../types/observer';
import { NotSupportedException, FEATURE } from '../types/support.exception';

const hasMutationObserverSupport = () => {
	return ['MutationObserver', 'MutationRecord'].every(feature => feature in window);
};

/**
 * Mutation Notification
 */
export type MutationNotification = ObserverNotification<MutationRecord, MutationObserver>;

/**
 * A RxJS operator for getting results from the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver|MutationObserver API}
 * This observable will emit a {@link FeatureNotFullySupportedException} when the browser does not support Mutation Observer
 * @param target The target element to observe
 * @param options `MutationObserver` options
 * @returns An Observable containing a list of `MutationRecord` items and the `MutationObserver`
 */
export function fromMutationObserver(
	target: Node,
	options?: MutationObserverInit
): Observable<MutationNotification | never> {
	return new Observable(subscriber => {
		if (!hasMutationObserverSupport()) {
			subscriber.error(new NotSupportedException(FEATURE.MUTATION_OBSERVER));
			return;
		} else {
			const mutationObserver = new MutationObserver((entries, observer) => {
				subscriber.next({ entries, observer });
			});
			mutationObserver.observe(target, options);
			return mutationObserver.disconnect;
		}
	});
}
