import { Observable } from 'rxjs';
import { PerformanceNotification } from '../types/observer';

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
    const performanceObserver = new PerformanceObserver(
      (entries, observer) => {
        subscriber.next({ entries, observer });
      });
    performanceObserver.observe(options);
    return () => performanceObserver.disconnect();
  });
}
