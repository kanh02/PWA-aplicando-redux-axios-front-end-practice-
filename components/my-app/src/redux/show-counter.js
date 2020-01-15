import { LitElement, html } from 'lit-element';

export class ShowCounter  extends LitElement {


  static get properties() {
    return {
        counter:{type:Number}
    };
  }


  render() {
    return html`
      <p>Counter vale: ${this.counter}</p>
    `;
  }
}

customElements.define('show-counter', ShowCounter);