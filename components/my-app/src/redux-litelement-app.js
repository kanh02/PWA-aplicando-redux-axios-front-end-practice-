import { LitElement, html } from 'lit-element';

import { connect } from 'pwa-helpers';
import { store } from './redux/store';

import './counter-user-interface';
import './redux/show-counter';

export class ReduxLitelementApp  extends connect(store) (LitElement) {

  static get properties() {
    return {
        appName:{ type:String},
        counter:{ type:Number}//////no llega parametro
    };
  }

  render() {
    return html`
        <h1>${this.appName}</h1>
        <show-counter counter="${this.counter}"></show-counter>
        <counter-user-interface></counter-user-interface>
    `,console.log(this.counter);
    
  }

  
}

customElements.define('redux-litelement-app', ReduxLitelementApp);