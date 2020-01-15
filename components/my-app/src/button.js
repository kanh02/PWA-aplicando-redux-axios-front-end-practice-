import { html } from 'lit-html';

export const send = html`
<style>
    input[type=submit] {
    padding:5px 15px; 
    background:#ccc; 
    border:0 none;
    cursor:pointer;
    -webkit-border-radius: 5px;
    border-radius: 5px; 
}
</style>
  <input type="submit" value="Send">
`;
