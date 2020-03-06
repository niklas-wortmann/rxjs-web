// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

// Observer API
export {
  MutationNotification,
  fromMutationObserver as observeMutation
} from './observer/mutationObserver';
export { ResizeNotification, fromResizeObserver as observeResize } from './observer/resizeObserver';
export {
  PerformanceNotification,
} from './types/observer';
export { fromPerformanceObserver as observePerformance } from './observer/performanceObserver'
export {
  IntersectionNotification,
  fromIntersectionObserver as observeIntersection
} from './observer/intersectionObserver';

// Geolocation API
export { observePosition } from './web-api/geolocation';

// Network API
export { observeNetwork } from './web-api/network';
