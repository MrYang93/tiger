import React from 'react';
import axios from 'axios';



class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      cats:[]
    }

  }
  setSubmit(e){
    e.preventDefault();
    let category = {name: this.refs.category.value}
    axios.post('http://api.duopingshidai.com/category',category)
      .then( res => {this.getSubmit(),this.refs.category.value=""} )

  }
  componentWillMount(){
    this.getSubmit()
  }
  getSubmit(){
    axios.get('http://api.duopingshidai.com/category')
      .then( res =>
        this.setState({cats: res.data.categories})
      )
      .catch(err=>console.log(err))
  }
  rmClick(_id){
    axios.delete(`http://api.duopingshidai.com/category?id=${_id}`).then( res => this.getSubmit())
  }

  render(){
    let catList = this.state.cats.map(
      (item)=> <li key={item._id}> { item.name }
        <button onClick={this.rmClick.bind(this,item._id)}>删除</button> </li>
    )

    return(
      <div>
        <ul>
          {catList}
        </ul>
        <form onSubmit={this.setSubmit.bind(this)}>
          <input ref='category' type="text" />
          <button>添加</button>
        </form>
      </div>
    )
  }
}
export default Home;
