import { Observable } from 'rxjs';
import { MutationNotification, ObserverNotification } from '../types/observer';

/**
 * A RxJS operator for getting results from the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver|MutationObserver API}
 * @param target The target element to observe
 * @param options `MutationObserver` options
 * @returns An Observable containing a list of `MutationRecord` items and the `MutationObserver`
 */
export function fromMutationObserver(
  target: Node,
  options?: MutationObserverInit
): Observable<MutationNotification> {
  return new Observable(subscriber => {
    const mutationObserver = new MutationObserver((entries, observer) => {
      subscriber.next({ entries, observer });
    });
    mutationObserver.observe(target, options);
    return () => mutationObserver.disconnect();
  });
}
