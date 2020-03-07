import { observeNetwork } from './network';

describe('observeNetwork', () => {
  it('should return a network event', () => {
    observeNetwork().subscribe({
      next: event => {
        expect(event.event).toBeTruthy();
      }
    });
  });
});
