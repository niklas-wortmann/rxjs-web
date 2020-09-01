import { fromSensor } from './fromSensor';
import { TestScheduler } from 'rxjs/testing';

xdescribe('fromSensor', () => {
	it('should return an Event observer based on the Sensor', () => {
		const sensor = new Accelerometer({ frequency: 60 });
		fromSensor(sensor).subscribe({
			next: event => {
				expect(event).toBeDefined();
			},
		});
	});
});
