import { observeWebWorker } from './web-worker';

describe('observeWebWorker', () => {
  let worker: Worker;

  beforeEach(() => {
    worker = new Worker('./worker.js');
  });

  it('should support posting a message via passed worker', done => {
    observeWebWorker(worker).subscribe(response => {
      expect(response).toBe('THIS IS A TEST');
      done();
    });

    worker.postMessage('this is a test');
  });
});
