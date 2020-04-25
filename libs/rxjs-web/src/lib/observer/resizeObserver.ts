import { Observable, TeardownLogic, throwError } from 'rxjs';
import { ObserverNotification } from '../types/observer';
import { NotSupportedException, FEATURE } from '../types/support.exception';

const hasResizeObserverSupport = (): boolean => {
	return ['ResizeObserver', 'ResizeObserverEntry'].every(feature => feature in globalThis);
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
export function fromResizeObserver(target: Element, options?: ResizeObserverOptions): Observable<ResizeNotification> {
	if (!hasResizeObserverSupport()) {
		return throwError(new NotSupportedException(FEATURE.RESIZE_OBSERVER));
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
