import { Observable } from 'rxjs';

export interface MutationNotification {
  mutations: ReadonlyArray<MutationRecord>;
  observer: Readonly<MutationObserver>;
}

export function fromMutationObserver(
  target: Node,
  options?: MutationObserverInit
): Observable<MutationNotification> {
  return new Observable(subscriber => {
    const mutationObserver = new MutationObserver(
      (mutations: MutationRecord[], observer: MutationObserver) => {
        subscriber.next({ mutations, observer });
      }
    );

    mutationObserver.observe(target, options);

    return () => {
      mutationObserver.disconnect();
    };
  });
}
