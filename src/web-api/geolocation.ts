import { Observable } from 'rxjs';

export function observePosition(options?: PositionOptions): Observable<Position> {
  return new Observable(subscriber => {
    if (navigator && navigator.geolocation && navigator.geolocation.watchPosition) {
      const watchId = navigator.geolocation.watchPosition(
        position => {
          if (!subscriber.closed) {
            subscriber.next(position);
          }
        },
        error => {
          if (!subscriber.closed) {
            subscriber.error(error);
          }
        },
        options
      );
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      subscriber.error();
      return;
    }
  });
}
