import { Observable } from 'rxjs';

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
 * @param options `PerformanceObserver` options
 *
 * @returns An Observable of a {@link https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserverEntryList|PerformanceObserverEntryList}
 * and the `PerformanceObserver`
 */
export function fromPerformanceObserver(
  options?: PerformanceObserverInit
): Observable<PerformanceNotification> {
  return new Observable(subscriber => {
    const performanceObserver = new PerformanceObserver((entries, observer) => {
      subscriber.next({ entries, observer });
    });
    performanceObserver.observe(options);
    return () => performanceObserver.disconnect();
  });
}
