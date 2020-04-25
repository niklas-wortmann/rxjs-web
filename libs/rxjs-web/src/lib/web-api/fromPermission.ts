import { Observable, defer, from, throwError } from 'rxjs';
import { NotSupportedException, FEATURE } from '../types/support.exception';

const hasPermissionSupport = (): boolean => {
	return globalThis.navigator != null && globalThis.navigator.permissions != null;
};

type PermissionQuery =
	| PermissionDescriptor
	| DevicePermissionDescriptor
	| MidiPermissionDescriptor
	| PushPermissionDescriptor;

/**
 * This API requests permission to use certain permission-based APIs.
 * It will emit an error Event if the browser does not support the permission API.
 * @param query used for Permission Request
 */
export const fromPermission = (query: PermissionQuery): Observable<PermissionStatus> => {
	if (!hasPermissionSupport()) {
		return throwError(new NotSupportedException(FEATURE.PERMISSION));
	} else {
		return defer(() => from(navigator.permissions.query(query)));
	}
};
