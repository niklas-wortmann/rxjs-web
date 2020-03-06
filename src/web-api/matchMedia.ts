import { fromEventPattern, Observable } from 'rxjs';

function fromMediaListQuery(mediaQueryList: MediaQueryList): Observable<MediaQueryListEvent> {
  return fromEventPattern(
    handler => mediaQueryList.addListener(handler),
    handler => mediaQueryList.removeListener(handler)
  );
}
