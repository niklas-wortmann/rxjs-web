// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

// Observer API
export {
  MutationNotification,
  fromMutationObserver as observeMutation
} from './lib/observer/mutationObserver';
export {
  ResizeNotification,
  fromResizeObserver as observeResize
} from './lib/observer/resizeObserver';
export { PerformanceNotification } from './lib/types/observer';
export { fromPerformanceObserver as observePerformance } from './lib/observer/performanceObserver';
export {
  IntersectionNotification,
  fromIntersectionObserver as observeIntersection
} from './lib/observer/intersectionObserver';

// Geolocation API
export { observePosition } from './lib/web-api/geolocation';

// Network API
export { observeNetwork } from './lib/web-api/network';
