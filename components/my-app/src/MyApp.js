import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import '../../page-main/page-main.js';
import '../../page-one/page-one.js';
import '../../page-two/page-two.js';
import '../../page-login/page-login.js';
import '../../contact-me/contact-me.js';
import { templateAbout } from './templateAbout.js';


import { store } from './redux/store';
import { connect } from 'pwa-helpers';


export class MyApp extends connect(store) (LitElement) {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
      selected : { type: String },
      appName:{type: String},
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
      }

      header {
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #ccc;
      }

      header ul {
        display: flex;
        justify-content: space-around;
        min-width: 400px;
        margin: 0 auto;
        padding: 0;
      }

      header ul li {
        display: flex;
      }

      header ul li a {
        color: #5a5c5e;
        text-decoration: none;
        font-size: 18px;
        line-height: 36px;
      }

      header ul li a:hover,
      header ul li a.active {
        color: blue;
      }

      main {
        flex-grow: 1;
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.page = 'pageLogin';    
  }


  render() {
    return html`
      <header>
        <ul>
          <li>
            <a href="#pageLogin" class=${this.__navClass('pageLogin')} @click=${this.__onNavClicked}>
              LogIn
            </a>
          </li>
          <li>
            <a href="#main" class=${this.__navClass('main')} @click=${this.__onNavClicked} >
              Main
            </a>
          </li>
          <li>
            <a href="#pageOne" class=${this.__navClass('pageOne')} @click=${this.__onNavClicked} >
              Items
            </a>
          </li>
          <li>
            <a href="#pageTwo" class=${this.__navClass('pageTwo')} @click=${this.__onNavClicked} >
              Form
            </a>
          </li>
          <li>
            <a href="#about" class=${this.__navClass('about')} @click=${this.__onNavClicked} >
              About
            </a>
          </li>
          <li>
            <a href="#contact-me" class=${this.__navClass('contact-me')} @click=${this.__onNavClicked}  >
              Contact Me!!
            </a>
          </li>
        </ul>
      </header>

      <main>
        ${this._renderPage()}
      </main>

      <p class="app-footer">
        <button @click="${this.prueba}">prueba</button>
        🚽 Made with love by
        <a target="_blank" rel="no pain no gain!!" href="https://github.com/open-wc">open-wc</a>.
      </p>
    `;
  }

  _renderPage() {
    switch (this.page) {
      case 'main':
        return html`
          <page-main></page-main>
        `;
      case 'pageOne':
        return html`
          <page-one></page-one>
        `;
      case 'pageTwo':
        return html`
          <page-two></page-two>
        `;
      case 'about':
        return templateAbout;
      case 'pageLogin':
        return html`
          <page-login></page-login>
        `;
      case 'contact-me':
        return html `
          <contact-me></contact-me>`;
      default:
        return html`
          <p>Page not found try going to <a href="#main">Main</a></p>
        `;
    }
  }

  prueba(){
    console.log('hola desde el login');
    //console.log(login);
    console.log(login.getTemplateElement);

  }

  __onNavClicked(ev) {
    ev.preventDefault();
    this.page = ev.target.hash.substring(1);
  }

  __navClass(page) {
    return classMap({ active: this.page === page });
  }
}
