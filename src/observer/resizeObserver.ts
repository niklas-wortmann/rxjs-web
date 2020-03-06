import { Observable } from 'rxjs';
import { ObserverNotification } from '../types/observer';

export type ResizeNotification = ObserverNotification<ResizeObserverEntry, ResizeObserver>;

/**
 * A RxJS operator for getting results from the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver|ResizeObserver API}
 * @param target The target element to observe
 * @param options `ResizeObserver` options
 * @returns An Observable containing a list of `ResizeObserverEntry` items and the `ResizeObserver`
 */
export function fromResizeObserver(
  target: Element,
  options?: ResizeObserverOptions
): Observable<ResizeNotification> {
  return new Observable(subscriber => {
    const resizeObserver = new ResizeObserver((entries, observer) => {
      subscriber.next({ entries, observer });
    });
    resizeObserver.observe(target, options);
    return () => resizeObserver.unobserve(target);
  });
}
