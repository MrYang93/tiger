import React from 'react';
import {
    Router,
    Route,
    browserHistory,
    Redirect,
    IndexRoute
} from 'react-router';
import {connect} from 'react-redux';


import App from './App.js';
import Set from './components/Set.js';
import Home from './components/Home.js';
import Login from './components/login.js';
import Commodity from './components/Commodity.js';
import Cart from './components/Cart.js';
import Collection from './components/Collection.js';
import Core from './components/Core.js';
import PageNotFound from './components/PageNotFound.js';


class Routers extends React.Component{
  constructor(){
    super();

  }

  render(){

    return(
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='/set' component={Set}/>
          <Route path='/login' component={Login}/>
          <Route path='/core' component={Core}/>
          <Route path='/commodity' component={Commodity}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/collection' component={Collection}/>
          <Route path='/pagenotfound' component={PageNotFound}/>
        </Route>
      </Router>
    )
  }
}
export default Routers;
