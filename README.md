# RxJS Web Library

This library aims to provide an `observable` based api, that wraps the web api. This also includes experimental, non-standard and not well supported apis. Polyfills need to be provided by the user of this library if necessary.

This library uses the Observable implementation of [rxjs >= 6](https://www.npmjs.com/package/rxjs).

The public API surface of this library can be affected by breaking changes within the experimental API used.

## Supported API Roadmap

| API                                                                                                               | Implemented | Tested  | Experimental/not well supported |
| ----------------------------------------------------------------------------------------------------------------- | ----------- | ------- | ------------------------------- |
| [Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)                               | &#9744;     | &#9744; | &#9745;                         |
| [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)                   | &#9744;     | &#9744; | &#9744;                         |
| [File and Directory Entries API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API) | &#9744;     | &#9744; | &#9745;                         |
| [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation)                         | &#9745;     | &#9744; | &#9744;                         |
| [Image Capture API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API)               | &#9744;     | &#9744; | &#9745;                         |
| [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)                | &#9745;     | &#9744; | &#9745;                         |
| [MutationObserver](https://developer.mozilla.org/de/docs/Web/API/MutationObserver)                                | &#9745;     | &#9744; | &#9744;                         |
| [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation)                    | &#9745;     | &#9744; | &#9745;                         |
| [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)                       | &#9745;     | &#9744; | &#9745;                         |
| [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)                                             | &#9744;     | &#9744; | &#9745;                         |
| [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)                                 | &#9745;     | &#9744; | &#9745;                         |
| [Sensor APIs](https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs)                                       | &#9744;     | &#9744; | &#9745;                         |
| [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)                                   | &#9744;     | &#9744; | &#9745;                         |
| [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)                               | &#9744;     | &#9744; | &#9744;                         |

## Credits

This project is build upon the [typescript library starter](https://github.com/alexjoverm/typescript-library-starter). Kudos to [@alexjoverm](https://twitter.com/alexjoverm) and every contributor of this amazing project!
