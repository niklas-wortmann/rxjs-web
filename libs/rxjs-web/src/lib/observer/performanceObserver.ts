import { Observable } from 'rxjs';
import { NotSupportedException, FEATURE } from '../types/support.exception';

const hasPerformanceObserverSupport = (): boolean => {
	return ['PerformanceObserver', 'PerformanceObserverEntryList'].every(feature => feature in window);
};

/**
 * Performance Observer notification
 */
export interface PerformanceNotification {
	/**
	 * A performance observer entry list
	 */
	entries: PerformanceObserverEntryList;
	/**
	 * The Performance Observer
	 */
	observer: PerformanceObserver;
}

/**
 * A RxJS operator for getting results from the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver|PerformanceObserver API}
 * This observable will emit a {@link FeatureNotFullySupportedException} when the browser does not support Performance Observer
 * @param options `PerformanceObserver` options
 * @returns An Observable of a {@link https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserverEntryList|PerformanceObserverEntryList}
 * and the `PerformanceObserver`
 */
export function fromPerformanceObserver(
	options?: PerformanceObserverInit
): Observable<PerformanceNotification | never> {
	return new Observable(subscriber => {
		if (!hasPerformanceObserverSupport()) {
			subscriber.error(new NotSupportedException(FEATURE.PERFORMANCE_OBSERVER));
			return;
		} else {
			const performanceObserver = new PerformanceObserver((entries, observer) => {
				subscriber.next({ entries, observer });
			});
			performanceObserver.observe(options);
			return performanceObserver.disconnect;
		}
	});
}
