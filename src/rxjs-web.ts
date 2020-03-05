// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

// Observer API
export { MutationNotification, observeMutation } from './observer/mutationObserver';
export { ResizeNotification, observeResize } from './observer/resizeObserver';
export { PerformanceNotification, observePerformance } from './observer/performanceObserver';
export { IntersectionNotification, observeIntersection } from './observer/intersectionObserver';

// Geolocation API
export { observePosition } from './web-api/geolocation';

// Network API
export { observeNetwork } from './web-api/network';
