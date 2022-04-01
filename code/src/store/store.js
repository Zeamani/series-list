import {createStore} from 'redux'
import initialState from './initalState'
import rootReducer from './reducers/rootReducer.js' 

const store = createStore(rootReducer, initialState);

export default store;