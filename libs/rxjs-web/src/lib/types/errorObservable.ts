import { Observable } from 'rxjs';

export const fromError = (error: Error): Observable<never> => new Observable(subscriber => subscriber.error(error));
