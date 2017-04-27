import React from 'react';
import axios from 'axios';



class Set extends React.Component{
  constructor(){
    super();
    this.state = {
      cats:[],
      proName: "",
      proSummary:"",
      proPrice: 0,
      proPoster: "",
      product: {}
    }

  }
  setSubmit(e){
    e.preventDefault();
    let category = {name: this.refs.category.value}
    axios.post('https://tiger.haoduoshipin/category',category)
      .then( res => {this.getSubmit(),this.refs.category.value=""} )

  }
  componentWillMount(){
    this.getSubmit()
  }
  getSubmit(){
    axios.get('https://tiger.haoduoshipin.com/cats')
      .then( res =>
        this.setState({cats: res.data.cats})
      )
      .catch(err=>console.log(err))
  }

  rmClick(_id){
    let index = this.state.cats.findIndex(item => item._id===_id)
    axios.delete(`https://tiger.haoduoshipin.com/category?id=${_id}`)
    .then( res =>
      {this.state.cats.splice(index,1),
      this.setState( {cats: this.state.cats})}
    )
  }

  productSubmit(e){
    e.preventDefault();
      let proObj = {
        name: this.refs.proName.value,
        summary: this.refs.proSummary.value,
        price: Number(this.refs.proPrice.value),
        poster: this.refs.proPoster.value,
        cat: this.refs.proId.value
      }
      axios.post('http://tiger.haoduoshipin.com/product/new',proObj)
        .then(res => {
          console.log(res),
          this.setState({product: res.data.product})
          console.log(this.state.product);
          this.refs.proName.value="",
          this.refs.proSummary.value="",
          this.refs.proPrice.value="",
          this.refs.proPoster.value=""
          }
        )
        .catch(err=>console.log(err))
  }

  render(){
    let catList = this.state.cats.map(
      (item)=> <li key={item._id}>分类名称: { item.name }
        <button onClick={this.rmClick.bind(this,item._id)}>删除分类</button> </li>
    )
    let productList = this.state.cats.map(
      (item)=> <option key={item._id} name="fenlei" value={item._id}>{item.name}</option>
    )

    return(
      <div>
        添加分类:
        <form onSubmit={this.setSubmit.bind(this)}>
          <input ref='category' type="text" />
          <button>添加</button>
        </form>

        <ul>
          {catList}
        </ul>

        <form onSubmit={this.productSubmit.bind(this)}>
          商品名称:
          <input ref="proName" type='text' /> <br/>
          商品介绍:
          <input ref="proSummary" type='text' /> <br/>
          商品价格:
          <input ref="proPrice" type='text' /> <br/>
          商品展示:
          <input ref="proPoster" type='text' /> <br/>
          商品分类:
          <select ref="proId" name='fenlei'>
            {productList}
          </select>
          <input type="submit" />
        </form>
      </div>
    )
  }
}
export default Set;
