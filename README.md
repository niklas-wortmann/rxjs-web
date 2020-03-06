# RxJS Web Library

This library aims to provide an `observable` based api, that wraps the web api. This also includes experimental, non-standard and not well supported apis. Polyfills need to be provided by the user of this library if necessary.

This library uses the Observable implementation of [rxjs >= 6](https://www.npmjs.com/package/rxjs).

The public API surface of this library can be affected by breaking changes within the experimental API used.

## Supported API Roadmap

| API                                                                                                               | Implemented | Tested | Experimental/not well supported |
| ----------------------------------------------------------------------------------------------------------------- | ----------- | ------ | ------------------------------- |
| [Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)                               | []          | []     | [x]                             |
| [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)                   | []          | []     | []                              |
| [File and Directory Entries API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API) | []          | []     | [x]                             |
| [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation)                         | [x]         | []     | []                              |
| [Image Capture API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API)               | []          | []     | [x]                             |
| [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)                | [x]         | []     | [x]                             |
| [MutationObserver](https://developer.mozilla.org/de/docs/Web/API/MutationObserver)                                | [x]         | []     |                                 |
| [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation)                    | [x]         | []     | [x]                             |
| [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)                       | [x]         | []     | [x]                             |
| [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)                                             | []          | []     | [x]                             |
| [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)                                 | [x]         | []     | [x]                             |
| [Sensor APIs](https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs)                                       | []          | []     | [x]                             |
| [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)                                   | []          | []     | [x]                             |
| [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)                               | []          | []     | []                              |

## Credits

This project is build upon the [typescript library starter](https://github.com/alexjoverm/typescript-library-starter). Kudos to [@alexjoverm](https://twitter.com/alexjoverm) and every contributor of this amazing project!
