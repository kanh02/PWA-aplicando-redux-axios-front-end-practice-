import { html } from 'lit-html';
 

export const templateAbout = html`
  <div>
    <h2>About Component</h2>
    <ul>
      <li>3x web components (app, main page, page one)</li>
      <li>1x external template (about page)</li>
      <li>
        Simple page switcher (for production see 
          <a href="https://open-wc.org/developing/routing.html">routing recommendations</a>)
      </li>
      <li>Follows all open-wc recommendations</li>
    </ul>
  </div>
`;