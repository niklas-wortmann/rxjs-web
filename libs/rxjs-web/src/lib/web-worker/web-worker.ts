import { Observable } from 'rxjs';

/**
 * Provide an observable web worker
 * @param worker
 * @param postMessage
 */
export function observeWebWorker(worker: Worker) {
  return new Observable(subscriber => {
    worker.onmessage = function(message) {
      subscriber.next(message);
    };

    worker.onerror = function(error) {
      subscriber.error(error);
    };

    return () => worker.terminate();
  });
}
