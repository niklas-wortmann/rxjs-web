import { Observable } from 'rxjs';

export interface IntersectionNotification {
  entries: IntersectionObserverEntry[];
  observer: IntersectionObserver;
}

export function fromIntersectionObserver(
  target: Element,
  options?: IntersectionObserverInit
): Observable<IntersectionNotification> {
  return new Observable(subscriber => {
    const insersectionObserver = new IntersectionObserver((entries, observer) => {
      subscriber.next({ entries, observer });
    }, options);

    insersectionObserver.observe(target);
    return () => insersectionObserver.unobserve(target);
  });
}
