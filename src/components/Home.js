import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {accountProducts} from '../redux/actions/accountAction.js';
import {accountCart} from '../redux/actions/accountAction.js';
import '../css/home.css'
accountCart


class Home extends React.Component{
  constructor(){
    super();

  }

  componentWillMount(){
    this.props.accountProducts();
  }

  handleClick(products){
    this.props.accountCart(products);
  }

  render(){
    let productsList = this.props.products.map( item =>
      <li key={Math.random()} >
        <p>{item.name}</p>
        <img src={item.poster} alt="" />
        <p>{item.summary}</p>
        <span onClick = {this.handleClick.bind(this,item)}>购买</span>
      </li>)
    return(
      <div>
        <p className='test'>所有商品</p>
        <div className='test_'></div>
        <ul className='productsList'>
          {productsList}
        </ul>
      </div>
    )
  }
}
// export default Home;
function mapStateToProps(state){
  return {
    products: state.products
  }
}

export default connect(mapStateToProps,{accountProducts,accountCart})(Home);
