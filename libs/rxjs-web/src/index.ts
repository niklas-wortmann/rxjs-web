// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

// Observer API
export { fromMutationObserver as observeMutation } from './lib/observer/mutationObserver';
export { fromResizeObserver as observeResize } from './lib/observer/resizeObserver';
export { fromPerformanceObserver as observePerformance } from './lib/observer/performanceObserver';
export { fromIntersectionObserver as observeIntersection } from './lib/observer/intersectionObserver';

// Geolocation API
export { observePosition } from './lib/web-api/geolocation';

// Network API
export { observeNetwork } from './lib/web-api/network';
