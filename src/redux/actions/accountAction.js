import axios from 'axios';

//登陆的action
export function _accountName(data,userId) {
  return {
   type: 'SIGNIN',
   userName: data.username,
   userId: userId
 }
}

//点击登陆时执行
export function accountName(data) {
  return dispatch => {
    axios.post(`http://tiger.haoduoshipin.com/user/${data.sig}`,data)
      .then( res => {
        alert(res.data.msg),
        localStorage.setItem('userId', res.data.userId),
        localStorage.setItem('userName',res.data.user),
        dispatch(_accountName(data,res.data.userId))
      }
    ).catch( err =>
      {
        if (err.response) { //后台返回了 2xx 以外的错误码
          alert(err.response.data.msg);
        }else{
          console.log(err)
        }
      }
    )
  }
}

//注销action
export function _accountOut() {
  return {
   type: 'OUT'
 }
}

//点击注销时执行
export function accountOut() {
  return dispatch => {
    axios.get('http://tiger.haoduoshipin.com/user/logout')
    .then(res =>{
      localStorage.user = '';
      localStorage.userId = '';
      dispatch(_accountOut())
    })
  }
}


//页面刷新加载时 action
export function _accountRefresh(res) {
  return {
    type: 'REFREFSH',
    userName: res.data.user.username
 }
}

//页面刷新加载时执行
export function accountRefrefsh(userId) {
  return dispatch => {
    axios.get(`http://tiger.haoduoshipin.com/user/${userId}`)
    .then(res =>{
      dispatch(_accountRefresh(res))
    })
  }
}


// 获取商品
export function accountProducts(products){
  return dispatch => {
    axios.get('http://tiger.haoduoshipin.com/products')
    .then( res => {
      dispatch({type: 'PRODUCTS', products: res.data.products})
    })
  }
}


//添加到购物车
export function accountCart(products){
  return dispatch => {
    alert('添加成功')
    dispatch({type: 'CART', products: products})
  }
}

//点击购买
function _accountBuy(products){
  let arr = []
  for (var i = 0; i < products.length; i++) {
    arr.push(products[i]._id)
  }
  return arr
}
export function accountBuy(data){
  return dispatch => {
    axios.post('http://tiger.haoduoshipin.com/order/new',{userId:data.userId,'products':_accountBuy(data.products)})
    .then( res => {
      console.log(res);
      alert('购买成功');
      dispatch({type:'BUY'})
    })
  }
}



//已购商品
function _accountPurchase(arr){
  let id = localStorage.userId
  let newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].userId==id) {
      newArr = [...newArr,...arr[i].products]
    }
  }
  return newArr
}
export function accountPurchase(){
  return dispatch => {
    axios.get('http://tiger.haoduoshipin.com/orders')
    .then( res => {
      console.log('bbbbbbbbbbbbb')
      dispatch({type: 'PURCHASE', purchase: _accountPurchase(res.data.orders)})
    })
  }
}
