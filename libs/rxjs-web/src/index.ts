// Observer API
export { fromIntersectionObserver, IntersectionNotification } from './lib/observer/intersectionObserver';
export { fromMutationObserver, MutationNotification } from './lib/observer/mutationObserver';
export { fromPerformanceObserver, PerformanceNotification } from './lib/observer/performanceObserver';
export { fromResizeObserver, ResizeNotification } from './lib/observer/resizeObserver';
// util types
export { NotSupportedException } from './lib/types/support.exception';
// Dynamic Import API
export { fromImport } from './lib/web-api/fromImport';
// MediaListQuery API
export { fromMediaListQuery } from './lib/web-api/fromMediaListQuery';
// Network API
export { fromNetwork } from './lib/web-api/fromNetwork';
// Permission API
export { fromPermission } from './lib/web-api/fromPermission';
// Geolocation API
export { fromPosition } from './lib/web-api/fromPosition';
// Sensor API
export { fromSensor } from './lib/web-api/fromSensor';
// Web Speech API
export { listen, speak } from './lib/web-api/SpeechAPI';
