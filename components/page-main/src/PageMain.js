import { html, css, LitElement } from 'lit-element';

export class PageMain extends LitElement {
  static get styles() {
    return css`
      :host {
        --page-main-text-color: #000;
        display: block;
        padding: 25px;
        color: var(--page-main-text-color);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      modelValue:{type :Boolean}
    
    };
  }
 
  constructor() {
    super();
    this.title = 'Babel Academy';
  }

  render() {
    return html`
      <h2>${this.title}!</h2>
      <img src="https://picsum.photos/400/200">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      `;
  }
  
}
