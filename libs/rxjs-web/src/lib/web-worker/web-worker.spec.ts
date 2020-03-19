import { Subject } from 'rxjs';
import { observeWebWorker } from './web-worker';

describe('observeWebWorker', () => {
  it('should support posting a message via string worker', done => {

    const [worker, postMessage] = observeWebWorker('./worker.js')

    worker.subscribe(response => {
      expect(response).toBe('THIS IS A TEST');
      done();
    });

    postMessage.next('this is a test');
  });

  it('should support posting a message via passed worker', done => {
    const outerWorker = new Worker('./worker.js');
    const [worker, postMessage] = observeWebWorker(outerWorker)
    worker.subscribe(response => {
      expect(response).toBe('THIS IS A TEST');
      done();
    });

    postMessage.next('this is a test');
  });
});
