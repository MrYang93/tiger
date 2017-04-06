import { createStore,applyMiddleware, compose  } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

let account = {
  userName: '请登录',
  out: '',
  userId: ''
}

let cart = []

let products = []

let purchase = []

const defaultState = {
  account:account,
  cart:cart,
  products:products,
  purchase:purchase
}
const store = createStore(rootReducer,defaultState, compose(applyMiddleware(thunk)));

export default store;
