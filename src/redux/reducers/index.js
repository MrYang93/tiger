import { combineReducers } from 'redux';

import accountReducer from './account.js';
import cartReducer from './cart.js';
import productsReducer from './products.js';
import purchaseReducer from './purchase.js';



const rootReducer = combineReducers({ //通过redux中的combinReducers功能 把多个 reducer 合成一个,
  account: accountReducer,
  cart: cartReducer,
  products: productsReducer,
  purchase: purchaseReducer
});

export default rootReducer;
