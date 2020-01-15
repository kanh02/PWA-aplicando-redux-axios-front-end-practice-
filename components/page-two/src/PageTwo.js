import { html, css, LitElement } from 'lit-element';
import { ajax } from'@lion/ajax';

////////redux//////
import { connect } from 'pwa-helpers';
import { store } from '../../my-app/src/redux/store';
import { fetchGet,fetchSuccess } from '../../my-app/src/redux/actions/actions';
//////////////
import {  callData }from'../../my-app/src/ajaxCall';

export class PageTwo extends connect(store) (LitElement) {

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
      items:{type: Array},
      appName:{type:String},
      state:{type: Object},
      url:{type:String}
    };
  }

  constructor() {
    super();
    this.title = 'Axios page';
    this.url = 'https://jsonplaceholder.typicode.com/todos';
  }

  
    render(){
      
    return html`
         <h5>${this.title}</h5>
         <button @click="${this.callAxiosDesglosed}">axios call directly Desglosed</button>
       
         <button @click="${this.callAxios}">axios using render HTML</button>
         
         <button @click="${this.llamada}">ajax example redux method</button>
         
         <div class="scopediv">Listado de Items de la API</div>`;
   }
   
   
   
   callAxiosDesglosed(){
     //forma manual de acceder al shadowRoot
       ajax.get(this.url)
           .then(response =>{

             let acces = this.shadowRoot.querySelector('.scopediv');
             acces.attachShadow({mode:"open"});

             this.state = response.data;
             this.items = this.state;
               this.items.map(post=>{ 

                 let d = document.createElement('div');
                 d.textContent=post.id;
                 d.style.backgroundColor='grey';
                 d.style.alignContent='center';

                 let s = document.createElement('span');
                 s.textContent=post.title;
                 s.style.marginLeft='10px';
                 s.style.color='white';

                 let p = document.createElement('p');
                 p.textContent=post.completed;
                 p.style.marginLeft='20px';
                 p.style.color='blue';
                 
                 s.appendChild(p);
                 d.appendChild(s);

                   return acces.shadowRoot.appendChild(d);
                  
                  })
                })
     }
    
    callAxios(){
       ajax.get(this.url)
       .then(response =>{
         this.state = response.data;
         this.items = this.state;
         let acces = this.shadowRoot.querySelector('.scopediv');
         acces.attachShadow({mode:"open"}); 
        //para poder acceder al shadowRoot toca catarlo con un par de methodos, este es uno, que imprime a la inversa
        // recordad siempre crear un remove() o sino el arbol de HTML queda ocupado y no se puede volver a acceder
          this.items.map(post=>{ 
            return acces.insertAdjacentHTML('afterend',`
                <div>
                   <div>${post.id}
                     <span>${post.title}</span>
                     <p>${post.completed}</p>
                   </div>
                </div>`);
               
                })
              })
      }


   

   llamada(){
     console.log(callData());//llamado desde fetch externo inyectado por componente
     console.log(store.getState());
     console.log(store.dispatch(fetchSuccess(fetchGet())));
  }
}


