import React from 'react';
import ReactDOM from 'react-dom';
import Routers from "./routers.js";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import store from './redux/store.js';
import {Provider} from 'react-redux';
import './css/index.css'


ReactDOM.render(
    <Provider store={store}><Routers /></Provider>, document.getElementById('root'));
