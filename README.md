# RxJS Web Library

This library aims to provide an `observable` based api, that wraps the web api. This also includes experimental, non-standard and not well supported apis. Polyfills need to be provided by the user of this library if necessary.

This library uses the Observable implementation of [rxjs >= 6](https://www.npmjs.com/package/rxjs).

The public API surface of this library can be affected by breaking changes within the experimental API used.

## Supported API Roadmap

| API                                                                                                               | Implemented        | Tested             | Experimental/not well supported |
| ----------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ | ------------------------------- |
| [Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)                               | :white_check_mark: | :white_check_mark: | :heavy_check_mark:              |
| [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)                   | :white_check_mark: | :white_check_mark: | :white_check_mark:              |
| [File and Directory Entries API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API) | :white_check_mark: | :white_check_mark: | :heavy_check_mark:              |
| [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation)                         | :heavy_check_mark: | :white_check_mark: | :white_check_mark:              |
| [Image Capture API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API)               | :white_check_mark: | :white_check_mark: | :heavy_check_mark:              |
| [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)                | :heavy_check_mark: | :white_check_mark: | :heavy_check_mark:              |
| [MutationObserver](https://developer.mozilla.org/de/docs/Web/API/MutationObserver)                                | :heavy_check_mark: | :white_check_mark: | :white_check_mark:              |
| [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation)                    | :heavy_check_mark: | :white_check_mark: | :heavy_check_mark:              |
| [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)                       | :heavy_check_mark: | :white_check_mark: | :heavy_check_mark:              |
| [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)                                             | :white_check_mark: | :white_check_mark: | :heavy_check_mark:              |
| [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)                                 | :heavy_check_mark: | :white_check_mark: | :heavy_check_mark:              |
| [Sensor APIs](https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs)                                       | :white_check_mark: | :white_check_mark: | :heavy_check_mark:              |
| [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)                                   | :white_check_mark: | :white_check_mark: | :heavy_check_mark:              |
| [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)                               | :white_check_mark: | :white_check_mark: | :white_check_mark:              |

## Credits

This project is build upon the [typescript library starter](https://github.com/alexjoverm/typescript-library-starter). Kudos to [@alexjoverm](https://twitter.com/alexjoverm) and every contributor of this amazing project!
