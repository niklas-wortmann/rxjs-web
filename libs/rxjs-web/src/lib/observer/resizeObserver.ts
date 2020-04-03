import { Observable, TeardownLogic } from 'rxjs';
import { ObserverNotification } from '../types/observer';
import { NotSupportedException, FEATURE } from '../types/support.exception';
import { fromError } from '../types/errorObservable';

const hasResizeObserverSupport = (): boolean => {
	return ['ResizeObserver', 'ResizeObserverEntry'].every(feature => feature in window);
};

/**
 * Resize Observer Notification
 */
export type ResizeNotification = ObserverNotification<ResizeObserverEntry, ResizeObserver>;

/**
 * A RxJS operator for getting results from the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver|ResizeObserver API}
 * This observable will emit a {@link FeatureNotFullySupportedException} when the browser does not support Resize Observer
 * @param target The target element to observe
 * @param options `ResizeObserver` options
 * @returns An Observable containing a list of `ResizeObserverEntry` items and the `ResizeObserver`
 */
export function fromResizeObserver(
	target: Element,
	options?: ResizeObserverOptions
): Observable<ResizeNotification | never> {
	if (!hasResizeObserverSupport()) {
		return fromError(new NotSupportedException(FEATURE.RESIZE_OBSERVER));
	}
	return new Observable(subscriber => {
		const resizeObserver = new ResizeObserver((entries, observer) => {
			subscriber.next({ entries, observer });
		});
		resizeObserver.observe(target, options);
		const teardown: TeardownLogic = () => resizeObserver.unobserve(target);
		return teardown;
	});
}
