
const url= 'https://jsonplaceholder.typicode.com/todos';

export const incrementarContador = () => {
    return{
        type:'INCREMENT'
    }
};

export const decrementarContador = () => {
    return{
        type:'DECREMENT'
    }
};

export const cambiarAppName = () => {
    return {
        type:'CHANGE_APP_NAME',
        name
    }
};
/////////////////////redux method///////////////////////
export const fetchPending = ()=> {
    return {
        type: 'FETCH_PENDING'
    }
};

export const fetchSuccess = ()=> {
    return {
        type: 'FETCH_SUCCESS',
       // payload: items
    }
};

export const fetchError = (error)=> {
    return {
        type: 'FETCH_ERROR',
        error: error
    }
};

//las fetch o axios call, deben ir en los actions, para poder acceder a ellos de forma mas limpia
export const fetchGet = ()=>{
    return dispatch=>{
        dispatch(fetchSuccess())
        return ajax.get(url)
            .then(response =>{
                console.log('inside ajax'+response);
            })
            .catch(err =>{
                dispatch(fetchError(err));
            })
        }
    };

 
