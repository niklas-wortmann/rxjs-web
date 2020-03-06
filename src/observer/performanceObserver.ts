import { Observable } from 'rxjs';
import { ObserverNotification } from '../types/observer';

export type PerformanceNotification = ObserverNotification<PerformanceObserverEntryList, PerformanceObserver>;

/**
 * A RxJS operator for getting results from the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver|PerformanceObserver API}
 * @param options `PerformanceObserver` options
 * @returns An Observable containing a list of `PerformanceObserverEntryList` items and the `PerformanceObserver`
 */
export function fromPerformanceObserver(
  options?: PerformanceObserverInit
): Observable<PerformanceNotification> {
  return new Observable(subscriber => {
    const performanceObserver = new PerformanceObserver(
      (entries: PerformanceObserverEntryList, observer: PerformanceObserver) => {
        subscriber.next({ entries, observer });
      }
    );

    performanceObserver.observe(options);

    return () => {
      performanceObserver.disconnect();
    };
  });
}
