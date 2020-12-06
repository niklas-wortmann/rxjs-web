<div align="center">

<img src="https://github.com/niklas-wortmann/rxjs-web/raw/development/docs/assets/rxjs-web-logo.svg" alt="RxJS Web Logo" width="86" height="86">

<h1>
rxjs-web

<br/>
<sup><sub>Observables for the Browser API</sub></sup>
<br/>

<a href="https://www.npmjs.com/package/rxjs-web"><img src="https://img.shields.io/npm/v/rxjs-web" alt="NPM"></a> <a href="https://bundlephobia.com/result?p=rxjs-web@latest"><img src="https://img.shields.io/bundlephobia/minzip/rxjs-web?label=gzipped" alt="Bundlephobia"></a> <a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/npm/l/rxjs-web" alt="MIT license"></a>

<br/>
</h1>

</div>

This library aims to provide [Observable](http://rxjs.dev/) based APIs, that wrap Web APIs.

---

**⚠️ A word of warning:**

Some of the Web APIs covered here are experimental, non-standard, and/or not well-supported. If necessary, polyfills need to be provided by the user of this library.

The public API surface of this library can be affected by breaking changes within the experimental API used.

Additionally, the implementation of this library makes use of [globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) which breaks ie <= 11! There is no plan to add support for IE 11 in this library.

## 📦 Install

`rxjs-web` is available [via npm](https://www.npmjs.com/package/rxjs-web):

```
npm i rxjs-web
```

_N.B.: This library relies on [RxJS >= 6](http://rxjs.dev/) and expects you already have it installed in your project._

## 🔧 API Reference

**General hint**: usually promise-based APIs are eager, while Observable-based APIs of this library are lazy (executed/started upon subscription). This design decision was made due to the general specification of RxJS Observables.

### fromIntersectionObserver

_📖 [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)_ | _🔬 experimental_

_..._

### fromMutationObserver

_📖 [MutationObserver](https://developer.mozilla.org/de/docs/Web/API/MutationObserver)_

_..._

### fromPerformanceObserver

_📖 [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)_ | _🔬 experimental_

_..._

### fromResizeObserver

_📖 [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)_ | _🔬 experimental_

_..._

### fromImport

_📖 [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)_    

_..._

### fromMediaListQuery
_📖 [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)_    

_..._

### fromNetwork

_📖 [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation)_ | _🔬 experimental_

_..._

### fromPermission

_📖 [Permission API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions)_ | _🔬 experimental_

_..._

### fromPosition

_📖 [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation)_    

_..._

### fromSensor

_📖 [Sensor APIs](https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs)_ | _🔬 experimental_

_..._

### speak _(Text to Speech)_

_📖 [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)_ | _🔬 not well tested_    

`speak` provides handy interface for chaining and aborting synthesis.

#### Usage

```js
import { speak } from 'rxjs-web';

speak('Hello!').subscribe();
```

#### Chained

```js
import { speak } from 'rxjs-web';

concat(
    speak('Hello, mom!'),
    speak('How are you?'),
    speak('I miss you.'),
).subscribe();
```

#### Advanced usage

```js
import { of, merge, concat, timer } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { speak, SpeechSynthesisUtteranceConfig } from 'rxjs-web';

const a: string = 'Hello, mom!';

const b: SpeechSynthesisUtteranceConfig = {
  text: 'How are you?',
  lang: 'en-UK',
  pitch: 1,
  rate: 1,
  volume: 1,
};

const c = new SpeechSynthesisUtterance('I miss you');
c.rate = 1;
c.lang = 'en-US';
c.pitch = 1;
c.rate = 1;
c.volume = 1;

concat(speak(a), speak(b), speak(c)).subscribe((e: SpeechSynthesisEvent) => {
  console.log(e.name);
  console.log(e.type);
});
```

### listen _(Speech to Text)_

_📖 [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)_ | _🔬 not well tested_    

Handy interface for continuous speech recognition.

#### simple example

```ts
import { listen } from 'rxjs-web';

listen({ lang: 'en' })
  .subscribe(e => {
    if (e.type == 'result') {
      console.log(e.results[0][0].transcript);
    }
  });
```

## 🛸 Not yet supported APIs

These APIs are not yet supported by this library, and might be included later:

| Name / Link                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- |
| [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)                                   |
| [Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)                               |
| [File and Directory Entries API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API) |
| [Image Capture API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API)               |
| [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)                                             |
| [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)                   |

## 🤝 Want to contribute to this project?

That will be awesome!

Please create an issue before submitting a PR — we'll be able to discuss it first!

Thanks!

## Credits

This project is build upon the [typescript library starter](https://github.com/alexjoverm/typescript-library-starter). Kudos to [@alexjoverm](https://twitter.com/alexjoverm) and every contributor of this amazing project!

Many thanks also goes to [Sascha](https://twitter.com/_tidusIO) for creating this fantastic logo!


## Enjoy 🙂
