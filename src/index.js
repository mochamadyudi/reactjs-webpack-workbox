import React from 'react'
import ReactDOM from 'react-dom'
import App from "./inc/main/App";

import serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render( <App/>, document.getElementById('root'))

serviceWorkerRegistration();