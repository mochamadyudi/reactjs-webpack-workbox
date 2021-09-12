import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'

import {persistReducer} from "redux-persist";
import Auth from "./Auth";

import Alerts from "./Alerts";

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['module']
}

const rootReducers = combineReducers({
    alert:Alerts,
    Auth,
})


export default persistReducer(persistConfig, rootReducers)
