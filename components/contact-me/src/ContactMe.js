import { html, css, LitElement } from 'lit-element';
import { send } from '../../my-app/src/button.js';
import '@lion/fieldset/lion-fieldset.js';
import '@lion/input/lion-input.js';
import '@lion/switch/lion-switch.js';
import '@lion/textarea/lion-textarea.js';
import '@lion/button/lion-button.js';


export class ContactMe extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
      }
      .container{
        background-color:#E0DBDB;
        width:500px;
        height: 300px;
        margin: 0;
      }
      #form{
        box-sizing:border-box;
        padding:1em;
        position:relative;
      }
      #form input,textarea{
        font    : .9em/1.5em "handwriting", cursive, sans-serif;
        border  : none;
        padding : 0 10px;
        margin  : 0;
        width   : 80%;
        background : none;
      }
    `;
  }

  static get properties() {
    return [send,this.name, this.text, this.email];
  }

  constructor() {
    super();
    this.name = 'your name here!';
    this.email = 'example@gmail.com';
    this.text = '';

    this.model = {
      firstName:'',
      lastName:'',
      description:'insert description'
    }
  }
  render() {
    return html`
      <h3>Contact</h3>
      <div class="container">
        <fieldset>
          <form id="form" method="POST">
            <div>
              <span>Name:</span>
              <input type="text" value="${this.name}">
            </div>
            <div>
              <span>Mail:</span>
              <input type="email" value="${this.email}">
            </div>
            <div>
              <span>your message:</span>
              <textarea type="text" value="${this.email}"></textarea>
            </div>
            <div class="boton">
              <button>${send}</button>
          </div>
          </form>
        </fieldset>
      </div>
      <br/>
      <div class="container">
        <lion-fieldset label="Client Data:" name="fullName">
          <lion-form>
            <lion-input label="First Name" name="firstName" .modelValue="${this.model.firstName}"></lion-input>
            <lion-input label="Last Name" name="lastName" .modelValue="${this.model.lastName}"></lion-input>
            <lion-textarea
                label="Description"
                name="description"
                .modelValue="${this.model.description}">
            </lion-textarea>
            <lion-button class="btn">enviar</lion-button>
          </lion-form>
        </lion-fieldset>
      </div>

      <br/>
      <div class="container">
        <h4>switch case</h4>
          <ul>
            <li><lion-switch name="airplaneMode" label="Airplane mode" checked></lion-switch></li>
            <li><lion-switch name="TriplaneMode" label="Triplane mode" checked></lion-switch></li>
            <li><lion-switch name="BiplaneMode" label="Biplane mode" checked></lion-switch></li>
          </ul>
      </div>
    `;
  }
}
