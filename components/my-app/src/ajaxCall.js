import { ajax } from'@lion/ajax';
import { fetchPending,fetchSuccess,fetchError } from '../src/redux/actions/actions';


const url= 'https://jsonplaceholder.typicode.com/todos';


  export const callData = ()=>{
    ajax.get(url)
     .then(response =>{
       if(response.status === 200){
         console.log(response.data);
         return response.data;
         }
        })
     .catch(err =>{
       console.log(err);
     })
  }

export const fetchGet=()=>{
   return dispatch=>{
     //dispatch(fetchPending());
      ajax.get(url)
        .then(response =>{
            //  if(response.status === 200){
            console.log('inside ajax'+response);
            console.log(dispatch(fetchSuccess(response.data)));
            //  }
          })
        .catch(err =>{
            console.log(err);
            // dispatch(fetchError(err));
      })
    }
}

