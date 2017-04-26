import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {accountBuy} from '../redux/actions/accountAction.js';
import '../css/cart.css'


class Cart extends React.Component{
  constructor(){
    super();

  }

  handleSubmit(e){
    e.preventDefault();
    let products = this.props.cart;
    let userId = localStorage.userId;
    let data = {
      userId: userId,
      products: products
    }

    this.props.accountBuy(data);

    this.context.router.push(`/core`);
  }

  render(){
    console.log(this.props);
    let productsList = this.props.cart.map( item =>
      <li key={Math.random()} >
        <p className='name'>{item.name}</p>
        <img src={item.poster} alt="" />
        <p className='introduce' >{item.summary}</p>
        <p className='price' >价格:{item.price}</p>
      </li>)
    return(
      <div>
        Cart 购物车
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul className='productsList'>
            {productsList}
          </ul>
          <div className='clearfix'></div>
          <button className='submit'>结算</button>
        </form>
      </div>
    )
  }
}
// export default Cart;
Cart.contextTypes = {
  router: React.PropTypes.object.isRequired
}


function mapStateToProps(state){
  return {
    cart: state.cart,
    account: state.account
  }
}

export default connect(mapStateToProps,{accountBuy})(Cart);
