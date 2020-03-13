import { Observable } from 'rxjs';

/**
 * A RxJS operator for getting the results of the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API|Geolocation API}
 * @param options Geolocation options
 * @returns An Observable of current browser location
 */
export function observePosition(
  options?: PositionOptions
): Observable<Position> {
  return new Observable(subscriber => {
    if (
      navigator &&
      navigator.geolocation &&
      navigator.geolocation.watchPosition
    ) {
      const watchId = navigator.geolocation.watchPosition(
        position => !subscriber.closed && subscriber.next(position),
        error => !subscriber.closed && subscriber.error(error),
        options
      );
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      subscriber.error(new Error(`Geolocation API not available`));
      return;
    }
  });
}
