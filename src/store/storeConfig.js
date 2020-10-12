import {createStore, combineReducers} from 'redux'
import numerosReducer from './reducers/reducerNumeros'

const reducers = combineReducers({
    numeros: numerosReducer,
    //novoReducer: reducerImportado
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig