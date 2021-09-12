import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistStore} from 'redux-persist'

import thunk from 'redux-thunk'
import rootReducers from './reducers/index'

const initialState = {}

const middleware = [thunk]

export const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)
