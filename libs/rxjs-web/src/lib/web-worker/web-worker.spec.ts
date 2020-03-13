import { Subject } from 'rxjs';
import { observeWebWorker } from './web-worker';

describe('observeWebWorker', () => {
  it('should support posting a message via string worker', done => {
    const postMessage = new Subject<any>();

    observeWebWorker('./worker.js', postMessage).subscribe(response => {
      expect(response).toBe('THIS IS A TEST');
      done();
    });

    postMessage.next('this is a test');
  });

  it('should support posting a message via passed worker', done => {
    const worker = new Worker('./worker.js');
    observeWebWorker(worker).subscribe(response => {
      expect(response).toBe('THIS IS A TEST');
      done();
    });

    worker.postMessage('this is a test');
  });
});
