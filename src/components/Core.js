import React from 'react';
import {connect} from 'react-redux';
import {accountPurchase} from '../redux/actions/accountAction.js';



class Core extends React.Component{
  constructor(){
    super();

  }

  componentWillMount(){
    console.log('aaaaaaaaa');
    this.props.accountPurchase();
  }

  purchaseArr(){
    console.log('ccccccccccc');
    let purchaseId = this.props.purchase;
    console.log('ddddddddd',purchaseId);
    let products = this.props.products;
    let purchaseList = [];
    for (var i = 0; i < purchaseId.length; i++) {
      for (var j = 0; j < products.length; j++) {
        if (purchaseId[i]==products[j]._id) {
          purchaseList.push(products[j])
        }
      }
    }
    return purchaseList
  }

  render(){
    let purchaseArr = this.purchaseArr().map(item=>
       <li key={Math.random()}>
         <p>{item.name}</p>
         <img src={item.poster} alt="" />
         <p>{item.summary}</p>
       </li>)
    return(
      <div>
        Core 个人中心
        <ul className='productsList'>
          {purchaseArr}
        </ul>
      </div>
    )
  }
}
// export default Core;
function mapStateToProps(state){
  return{
    purchase: state.purchase,
    products: state.products
  }
}

export default connect(mapStateToProps,{accountPurchase})(Core);
