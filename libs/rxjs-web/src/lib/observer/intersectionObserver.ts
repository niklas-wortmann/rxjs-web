import { Observable, TeardownLogic } from 'rxjs';
import { ObserverNotification } from '../types/observer';

/**
 * Intersection observer Notification
 */
export type IntersectionNotification = ObserverNotification<IntersectionObserverEntry, IntersectionObserver>;

/**
 * A RxJS operator for getting results from the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API|IntersectionObserver API}
 * @param target The target element to observe
 * @param options `IntersectionObserver` options
 * @returns An Observable containing a list of `IntersectionObserverEntry` items and the `IntersectionObserver`
 */
export function fromIntersectionObserver(
	target: Element,
	options?: IntersectionObserverInit
): Observable<IntersectionNotification> {
	return new Observable(subscriber => {
		const intersectionObserver = new IntersectionObserver((entries, observer) => {
			subscriber.next({ entries, observer });
		}, options);
		intersectionObserver.observe(target);
		const teardown: TeardownLogic = () => intersectionObserver.unobserve(target);
		return teardown;
	});
}
