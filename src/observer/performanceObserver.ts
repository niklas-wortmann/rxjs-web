import { Observable } from 'rxjs';

export interface PerformanceNotification {
  entries: PerformanceObserverEntryList;
  observer: PerformanceObserver;
}

export function observePerformance(
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
