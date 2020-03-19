import { Observable, Subject } from 'rxjs';

/**
 * Provides a tuple that contains an Observable of worker messages
 * and a subject to provide messages to the worker
 * @param worker
 */
export function observeWebWorker<T = any>(
  worker: Worker | string
): [Observable<MessageEvent>, Subject<T>] {

  /**
   * Internal subject to allow messages to be posted to a web worker
   */
  const postMessage = new Subject<T>();

  /**
   * Worker provided by the user, or created using the passed path
   */
  const innerWorker = typeof worker === 'string' ? new Worker(worker) : worker;

  /**
   * Observable of the worker messages
   */
  const observableWorker = new Observable<MessageEvent>(subscriber => {
    innerWorker.onmessage = function(message) {
      subscriber.next(message);
    };

    innerWorker.onerror = function(error) {
      subscriber.error(error);
    };
    const subscription = postMessage.subscribe(message =>
      innerWorker.postMessage(message)
    );

    return () => {
      subscription.unsubscribe();
      innerWorker.terminate();
    };
  });

  return [observableWorker, postMessage];
}
