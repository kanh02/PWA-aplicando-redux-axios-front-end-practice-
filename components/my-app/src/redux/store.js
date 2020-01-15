import { createStore } from 'redux';
import { reducer } from './reducers/reducers';

export const store = createStore(
    reducer,
    Window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUXDEVTOOLS_EXTENSION()//para activar el devtools en la consola de el navegador
    
    );