import { fromEventPattern, Observable } from 'rxjs';

/**
 * A RxJS operator for getting the results of the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection|Navigator Connection API}
 * @returns An Observable of events from the media query
 */
export function observeNetwork(): Observable<any> {
  return fromEventPattern(
    handler =>
      navigator.connection &&
      navigator.connection.addEventListener('change', handler),
    handler =>
      navigator.connection &&
      navigator.connection.removeEventListener('change', handler)
  );
}
