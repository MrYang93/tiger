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

  purchaseArr(purchase,products){
    console.log('ccccccccccc');
    let purchaseId = purchase;
    console.log('ddddddddd',purchaseId);
    let newProducts = products;
    let purchaseList = [];
    for (var i = 0; i < purchaseId.length; i++) {
      for (var j = 0; j < newProducts.length; j++) {
        if (purchaseId[i]==newProducts[j]._id) {
          purchaseList.push(newProducts[j])
        }
      }
    }
    return purchaseList
  }

  render(){
    let purchaseArr = this.purchaseArr(this.props.purchase,this.props.products).map(item=>
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
