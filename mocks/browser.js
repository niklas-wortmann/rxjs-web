const {JSDOM} = require('jsdom');
const dom = new JSDOM();

class GenericObserver {
  constructor(fn) {
    fn([], {});
  }

  observe() {
  }
}

class PerformanceObserver {
  constructor(fn) {
    fn({
      getEntries: () => [],
      getEntriesByName: name => [],
      getEntriesByType: type => []
    });
  }

  observe() {
  }
}

Object.assign(global, {document: dom.window.document});
Object.assign(global, {window: dom.window});
Object.assign(global, {
  navigator: {
    ...dom.window.navigator,
    geolocation: {
      watchPosition: (success, faulure) => {
        success({timestamp: Date.now});
      },
      clearWatch: () => {
      }
    },
    connection: {
      addEventListener: (name, handler) => handler({event: true}),
      removeEventListener: () => {
      }
    }
  }
});
Object.assign(global, {
  IntersectionObserver: GenericObserver,
  MutationObserver: GenericObserver,
  ResizeObserver: GenericObserver,
  PerformanceObserver
});
