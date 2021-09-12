import React, {useEffect} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from "react-router-dom";
import {store, persistor } from "../redux/Store";
import {PersistGate} from "redux-persist/integration/react";
import Routes from "./Routes";
import {createBrowserHistory} from "history";
import "../../assets/sass/style.scss"



const App = ()=> {
    const history = createBrowserHistory()


    return(
        <Provider store={store}>
            <Router>
                <PersistGate persistor={persistor}>
                    <Routes history={history}/>
                </PersistGate>
            </Router>
        </Provider>
    )
}

export default App
