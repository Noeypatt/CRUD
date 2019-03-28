import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import Bear from './Bear'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './Reducer/Reduc'
import CRUD from './CRUD'


export const store = createStore(rootReducer, applyMiddleware(logger,thunk))


// ======== wrap root element by Provider with Store ========
class App extends Component {
   render() {
       return <Provider store={store}><Bear/><CRUD/></Provider>
   }
}

export default App