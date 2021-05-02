import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import mainReducer from '../Reducer'


//INVESTIGAR COMPOSE
const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
const store = createStore(mainReducer, composeEnhancer(applyMiddleware(thunk)))

export default store