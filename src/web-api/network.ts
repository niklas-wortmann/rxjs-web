import { fromEvent, Observable } from 'rxjs';

export function observeNetwork(): Observable<any> {
  return fromEvent((navigator as any).connection, 'change');
}
