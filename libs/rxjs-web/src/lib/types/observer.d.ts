/**
 * A generic notification type for rxjs-web
 */
export interface ObserverNotification<T extends any, O extends any> {
	/**
	 * An array of entries returned from the notification API
	 */
	entries: ReadonlyArray<T>;
	/**
	 * The Observer from the notification API
	 */
	observer: Readonly<O>;
}
