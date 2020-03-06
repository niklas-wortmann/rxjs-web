import { observePosition } from '../src/web-api/geolocation';
import { take } from 'rxjs/operators';
import 'jest-environment-puppeteer';

describe('observePosition', () => {

  it('should return an observable of a Position', (done) => {
    observePosition().pipe(
      take(1)
    ).subscribe({
      next: position => expect(position.timestamp).toBeTruthy(),
      complete: () => done()
    });
  });
});
