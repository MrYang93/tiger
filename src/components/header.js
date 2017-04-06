import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import '../css/header.css';
import {accountOut} from '../redux/actions/accountAction.js';
import {accountRefrefsh} from '../redux/actions/accountAction.js';


class header extends React.Component{
  constructor(){
    super();
    this.state = {

  }
}
  componentWillMount(){
    if (localStorage.userId) {
      let userId = localStorage.userId;
      this.props.accountRefrefsh(userId)
    }
  }

  logoutClick(){
    this.props.accountOut()
  }

  render(){
    return(
      <div>
        <div className="header">
          <div className="user">
            <Link to = '/'>首页</Link>
            <Link to = {this.props.user.userName=='请登录' ? '/login' : '/core'} >{this.props.user.userName}</Link>
            <span onClick={this.logoutClick.bind(this)}>
              { this.props.user.out }
            </span>
          </div>
          <ul>
            <li><Link to = {this.props.user.userName=='请登录' ? '/pagenotfound' : '/cart'}>购物车</Link></li>
            <li><Link to = {this.props.user.userName=='请登录' ? '/pagenotfound' : '/core'}>个人中心</Link></li>
            <li><Link to = {this.props.user.userName=='请登录' ? '/pagenotfound' : '/collection'}>收藏</Link></li>
          </ul>
        </div>

      </div>
    )
  }
}
// export default header;
function mapStateToProps(state){
  return{
  user: state.account
  }
}

export default connect(mapStateToProps,{accountOut,accountRefrefsh})(header);
