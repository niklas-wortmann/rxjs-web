import { fromEventPattern, Observable } from 'rxjs';

/**
 * A RxJS operator for getting the results of the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList|Media Query API}
 * @param mediaQueryList The media query list to observe
 * @returns An Observable of events from the media query
 */
function fromMediaListQuery(mediaQueryList: MediaQueryList): Observable<MediaQueryListEvent> {
  return fromEventPattern(
    handler => mediaQueryList.addEventListener('change', handler),
    handler => mediaQueryList.removeEventListener('change', handler)
  );
}
