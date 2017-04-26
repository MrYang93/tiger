import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {accountName} from '../redux/actions/accountAction.js';
import '../css/login.css'


class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      action:'signin',  //登陆注册表单的选项
    }
  }

  signinClick(){
    this.setState({action: "signin"})
  }

  signupClick(){
    this.setState({action: "signup"})
  }

  handleSubmit(e){
    e.preventDefault();
    let data = {username: this.refs.name.value,password: this.refs.password.value, sig: this.state.action};
    this.props.accountName(data);
    this.context.router.push(`/`);
  }

  render(){
    return(
      <div className='login'>
        <div className='login-inner'>
          <span style={{color: this.state.action==="signin" ? "red" : "#000"}} onClick={this.signinClick.bind(this)} >登陆</span> /
          <span style={{color: this.state.action==="signin" ? "#000" : "red"}} onClick={this.signupClick.bind(this)} > 注册</span>

          <form className='form' onSubmit={this.handleSubmit.bind(this)}>
            <lable>账号 :</lable> <input ref="name" type="text" />
            <br />
            <lable>密码 :</lable> <input ref="password" type="password" />
            <br />
            <button className='submit'>确定</button>
          </form>
        </div>
      </div>
    )
  }
}

//重定向,切换路由 ↓ + this.context.router.push(`/`) 实现单页面切换
//↓ 这个就是吧router拿到这个组件中, 是  react-router 的底层知识
//还可以用 browserHistory
//import { browserHistory } from 'react-router'   browserHistory.push()
Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

// export default Login;
function mapStateToProps(state){
  return {
    state: state
  }
}

export default connect(mapStateToProps,{accountName})(Login);
