import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/index'

const compose = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(rootReducer, compose)