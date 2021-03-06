import { html, css, LitElement } from 'lit-element';

export class PageLogin extends LitElement {
  static get styles() {
    return css`
    :host {
      color: #333333;
      font: 16px Arial, sans-serif;
    }

    p {
      margin: 0;
    }

    p + p {
      margin-top: 30px;
    }

    a {
      color: #1f66e5;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    input[type="text"],
    input[type="password"] {
      background-color: #eaeaea;
      border: 1px solid grey;
      border-radius: 4px;
      box-sizing: border-box;
      color: inherit;
      font: inherit;
      padding: 10px 10px;
      width: 100%;
    }

    input[type="submit"] {
      font: 16px/1.6 Arial, sans-serif;
      color: white;
      background: cornflowerblue;
      border: 1px solid #1f66e5;
      border-radius: 4px;
      padding: 10px 10px;
      width: 100%;
    }

    .container {
      max-width: 300px;
      padding: 50px;
      border: 1px solid grey;
      margin-top:25px;
    }

    .footnote {
      text-align: center;
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
  }

  render() {
    return html`
        <div class="container">
          <form action="#">
            <p>
              <label for="username">User Name</label>
              <input type="text" id="username" name="username" >
            </p>
            <p>
              <label for="password">Password</label>
              <input type="password" id="password" name="password">
            </p>
            <p>
              <input type="submit" value="Login">
            </p>
            <p class="footnote">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
        `;
  }

}
