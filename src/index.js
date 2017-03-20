import React from 'react';
import ReactDOM from 'react-dom';
import Routers from "./routers.js";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <Routers/>, document.getElementById('root'));
