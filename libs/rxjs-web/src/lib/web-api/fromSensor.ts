import { defer, fromEventPattern, Observable, throwError } from 'rxjs';
import { finalize, share } from 'rxjs/operators';

/**
 * This will wrap the Sensor API in an Observable. It doesn't check if one has permission for a sensor or
 * if it is supported by the browser. For the permissioncheck take a look at {@link fromPermission}.
 * Additionally you can specify wether you want to subscribe to the `reading` event or the `activate` event.
 * By passing the sensor reference the user of this api has to check if this
 * api is available at runtime. One can use {@link fromImport} to load a polyfill.
 * @param sensor instance used to listen to events
 * @param event determines wether to subscribe to the `activate` or the `reading` event
 * @param useCapture will be passed to `addEventListener`
 */
export const fromSensor = (
	sensor: Sensor,
	event: 'reading' | 'activate' = 'reading',
	useCapture?: boolean
): Observable<Event> => {
	const sensorEvent$ = defer(() => {
		if (!sensor) {
			return throwError(new Error('passed sensor reference is undefined'));
		}
		sensor.start();
		return fromEventPattern<Event>(
			handler => sensor.addEventListener(event, handler, useCapture),
			handler => sensor.addEventListener('error', handler, useCapture)
		);
	});
	return sensorEvent$.pipe(
		finalize(() => {
			if (sensor) {
				sensor.stop();
			}
		}),
		share()
	);
};
