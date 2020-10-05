<div align="center">
  <h1>
    <br/>
    👂
    <br/>
    <sub><sub>Web API Speech recognition with RxJS</sub></sub>
    <br/>
    <br/>
  </h1>
</div>

A RxJS wrapper of browser native [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

## Use

```js
import { listen } from 'rxjs-web';

listen({ lang: 'en' })
  .subscribe(e => {
    if (e.type == 'result') {
      console.log(e.results[0][0].transcript);
    }
  });
```

## Enjoy 🙂
