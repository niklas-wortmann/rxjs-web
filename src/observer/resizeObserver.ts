import { Observable } from 'rxjs';

export interface ResizeNotification {
  entries: ReadonlyArray<ResizeObserverEntry>;
  observer: Readonly<ResizeObserver>;
}

export function observeResize(
  target: Element,
  options?: ResizeObserverOptions
): Observable<ResizeNotification> {
  return new Observable(subscriber => {
    const resizeObserver = new ResizeObserver((entries, observer) => {
      subscriber.next({ entries, observer });
    });

    resizeObserver.observe(target, options);

    return () => {
      resizeObserver.unobserve(target);
    };
  });
}
