import { defer, fromEventPattern, Observable } from 'rxjs';
import { finalize, share } from 'rxjs/operators';
import { fromError } from '../types/errorObservable';

/**
 * This will wrap the Sensor API in an Observable. It doesn't check if one has permission for a sensor or
 * if it is supported by the browser. For the permissioncheck take a look at {@link fromPermission}.
 * Additionally you can specify wether you want to subscribe to the `reading` event or the `activate` event.
 * @param sensor
 * @param event
 * @param useCapture
 */
export const fromSensor = (
	sensor: Sensor,
	event: 'reading' | 'activate' = 'reading',
	useCapture?: boolean
): Observable<Event | never> => {
	const obs = defer(() => {
		if (sensor) {
			sensor.start();
			return fromEventPattern<Event>(
				handler => sensor.addEventListener(event, handler, useCapture),
				handler => sensor.addEventListener('error', handler, useCapture)
			);
		} else {
			return fromError(new Error('passed sensor reference is undefined'));
		}
	});
	return obs.pipe(
		finalize(() => {
			if (sensor) {
				sensor.stop();
			}
		}),
		share()
	);
};
