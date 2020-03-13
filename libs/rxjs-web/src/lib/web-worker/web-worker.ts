import { Observable, Subscription } from 'rxjs';

/**
 * Provide an observable web worker
 * @param worker
 * @param postMessage
 */
export function observeWebWorker(
  worker: Worker | string,
  postMessage?: Observable<any>
): Observable<MessageEvent> {
  let subscription: Subscription;
  const innerWorker = typeof worker === 'string' ? new Worker(worker) : worker;

  return new Observable(subscriber => {
    innerWorker.onmessage = function(message) {
      subscriber.next(message);
    };

    innerWorker.onerror = function(error) {
      subscriber.error(error);
    };
    if (postMessage) {
      subscription = postMessage.subscribe(message =>
        innerWorker.postMessage(message)
      );
    }

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
      innerWorker.terminate();
    };
  });
}
