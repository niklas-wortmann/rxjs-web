import { Observable, TeardownLogic } from 'rxjs';
import { ObserverNotification } from '../types/observer';
import { NotSupportedException, FEATURE } from '../types/support.exception';
import { fromError } from '../types/errorObservable';

const hasIntersectionObserverSupport = (): boolean => {
	return ['IntersectionObserver', 'IntersectionObserverEntry'].every(feature => feature in window);
};

/**
 * Intersection observer Notification
 */
export type IntersectionNotification = ObserverNotification<IntersectionObserverEntry, IntersectionObserver>;

/**
 * A RxJS operator for getting results from the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API|IntersectionObserver API}
 * This observable will emit a {@link FeatureNotFullySupportedException} when the browser does not support Intersection Observer
 * @param target The target element to observe
 * @param options `IntersectionObserver` options
 * @returns An Observable containing a list of `IntersectionObserverEntry` items and the `IntersectionObserver`
 */
export function fromIntersectionObserver(
	target: Element,
	options?: IntersectionObserverInit
): Observable<IntersectionNotification | never> {
	if (!hasIntersectionObserverSupport()) {
		return fromError(new NotSupportedException(FEATURE.INTERSECTION_OBSERVER));
	}
	return new Observable(subscriber => {
		const intersectionObserver = new IntersectionObserver((entries, observer) => {
			subscriber.next({ entries, observer });
		}, options);
		intersectionObserver.observe(target);
		const teardown: TeardownLogic = () => intersectionObserver.unobserve(target);
		return teardown;
	});
}
