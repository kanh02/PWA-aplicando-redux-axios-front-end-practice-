import { html, css, LitElement } from 'lit-element';
import { items }from '../../my-app/src/users.js';
import '@lion/tabs/lion-tabs.js';
import 'dile-input/dile-input'


////////redux//////
import { connect } from 'pwa-helpers';
import { store } from '../../my-app/src/redux/store';
import { cambiarAppName } from '../../my-app/src/redux/actions/actions';
import {ReduxLitelementApp} from '../../my-app/src/redux-litelement-app';
//////////////

export class PageOne extends connect(store) (LitElement) {
  static get styles() {
    return css`
      :host {
        --page-one-text-color: #000;
        display: block;
        padding: 25px;
        color: var(--page-one-text-color);
      }
      .title{
        margin-top:2px;
        background-color:gray;
      }
      .body{
        list-style-type: none;
      }
    `;
  }

  static get properties() {
    return {
      title:{ type: String },
      counter:{ type: Number },
      items:{type: Array},
      appName:{type: String},
      counter:{type:Number}
    };
  }


  constructor() {
    super();
    this.title = 'list of items from external data';
  }

  render() {
    return html`
        <lion-tabs id="appendtabs">
          <button slot="tab" @click='${this._handleTabs}'>Info</button>
          <button slot="tab">About</button>
            <p slot="panel">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi odit cumque, enim aut
              assumenda itaque quis voluptas est quos fugiat unde labore reiciendis saepe, iure, optio
              officiis obcaecati quibusdam.
            </p>
          <div slot="panel">
            <p>About text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi odit cumque, enim aut
              assumenda itaque quis voluptas est quos fugiat unde labore reiciendis saepe, iure, optio
              officiis obcaecati quibusdam.
            </p>
          </div>
        </lion-tabs>

        <!-- redux method -->
        <dile-input .value="${this.appName}" @input="${this.appNameChanged}"></dile-input>
        <button @click="${this.save}">Guardar</button>
        <redux-litelement-app></redux-litelement-app>
        <!-- redux methodo -->

        <h4>${this.title}</h4>
        <ul>
          ${items.map(item=> html`
            <li class="title">${item.title}</li>
            <li class="body">${item.body}</li>
          `)}
        </ul>
        `;
  }


  _handleTabs(){
    const tabsElement = this.shadowRoot.querySelector('#appendtabs');
    console.log(tabsElement);
  }

///////redux//////////
  stateChanged(state){
    this.appName = state.appName;
    console.log(state);
  }

  appNameChanged(e){
    this.appName = e.target.value;
    console.log(e.target.value +'-'+'appnamechanged');

  }
  save(){
    store.dispatch(cambiarAppName(this.appName));
    console.log(store.dispatch(cambiarAppName(this.appName)));
  }
/////////////////////////////////////////////
}
