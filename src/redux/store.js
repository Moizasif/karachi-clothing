import {createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger];


//createStore is afunction that takes rootReducer and Middlware
const store  = createStore(rootReducer,applyMiddleware(...middlewares))

export default store