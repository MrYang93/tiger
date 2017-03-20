import React from 'react';
import {
    Router,
    Route,
    browserHistory,
    Redirect,
    IndexRoute
} from 'react-router';
import App from './App.js';
import Home from './components/Home.js';
import Login from './components/login.js';


class Routers extends React.Component{
  constructor(){
    super();

  }

  render(){

    return(
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component = {Home} />
          <Route path='/login' component = {Login} />
        </Route>
      </Router>
    )
  }
}
export default Routers;
