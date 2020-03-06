import { Observable, defer, from } from 'rxjs';

/**
 * operator for dynamic imports.
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import}
 * @param module path to the module to import
 */
export function fromImport<T extends any>(module: string): Observable<T> {
  return defer(() => from(import(module)));
}
