import { Observable, defer, from, ObservedValueOf, throwError } from 'rxjs';

/**
 * operator for dynamic imports.
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import}
 * @param module path to the module to import
 */
export function fromImport<T extends PromiseLike<unknown>>(importFn: () => T): Observable<ObservedValueOf<T>> {
	return defer(() => {
		try {
			const modulePromise = importFn();
			return from(modulePromise);
		} catch (error) {
			return throwError(error);
		}
	});
}
