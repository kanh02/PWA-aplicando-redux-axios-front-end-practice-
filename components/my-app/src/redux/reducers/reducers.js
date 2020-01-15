
const estadoInicial = {
    counter:0,
    appName:'frase a guardar',

    pending:false,
    items:[],
    error:null
    
};

export const reducer = (state = estadoInicial,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                counter:state.counter +1
            }
        case 'DECREMENT':
            return{
                ...state,
                counter:state.counter -1
            }
        case 'CHANGE_APP_NAME':
            return {
                ...state,
                appName:action.name
            }
        case 'FETCH_PENDING':
            return{
                ...state,
                pending:true
            }
        case 'FETCH_SUCCESS':
            return{
                ...state,
                pending:false,
                products:action.items
            }
        case 'FETCH_ERROR':
            return{
                ...state,
                pending:false,
                error:action.error
            }
        default:
            return state;
    }
};