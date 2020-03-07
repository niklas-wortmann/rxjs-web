import './app.element.scss';

import { observePosition } from 'rxjs-web';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'rxjs-web-demo';

    observePosition().subscribe(position => {
      this.innerHTML = `${position.coords.latitude}, ${position.coords.longitude}`;
    });
  }
}

customElements.define('rxjs-web-root', AppElement);
