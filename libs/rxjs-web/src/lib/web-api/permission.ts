import { Observable, defer, from } from 'rxjs';
import { NotSupportedException, FEATURE } from '../types/support.exception';
import { fromError } from '../types/errorObservable';

const hasPermissionSupport = (): boolean => {
	return window != null && window.navigator != null && window.navigator.permissions != null;
};

type PermissionQuery =
	| PermissionDescriptor
	| DevicePermissionDescriptor
	| MidiPermissionDescriptor
	| PushPermissionDescriptor;

/**
 *
 * @param query
 */
export const fromPermission = (query: PermissionQuery): Observable<PermissionStatus | never> => {
	if (!hasPermissionSupport()) {
		return fromError(new NotSupportedException(FEATURE.PERMISSION));
	} else {
		return defer(() => from(navigator.permissions.query(query)));
	}
};
