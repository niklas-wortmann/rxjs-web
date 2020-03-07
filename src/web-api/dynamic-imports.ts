import { Observable, defer, from } from 'rxjs';

/**
 * operator for dynamic imports.
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import}
 * @param module path to the module to import
 */
export function fromImport<R extends PromiseLike<any>>(importFn: () => R): Observable<R> {
  return defer(() => {
    const modulePromise = importFn();
    return from(modulePromise);
  });
}
