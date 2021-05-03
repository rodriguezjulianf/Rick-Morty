import {createStore, applyMiddleware} from 'redux'
//import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'
import mainReducer from '../Reducer'


//INVESTIGAR COMPOSE
//const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
const store = createStore(mainReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(), applyMiddleware(thunkMiddleware))

export default store