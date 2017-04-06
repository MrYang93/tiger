import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';



import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import Snackbar from 'material-ui/Snackbar';


class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      open: false, //登陆注册表单的弹窗开关
      action:'signin',  //登陆注册表单的选项
      username:'',  //表单用户名
      password:'',  //表单密码
      isLogin: false, //登陆状态
      user: '', //登陆后台返回的用户名
      userId: '', //登陆后台返回的用户ID
      openMenu: true, //登陆后右上角弹出菜单的开关
      snackBar: false //登出弹窗的开关
    };
  }
  componentWillMount(){
    if (localStorage.user && localStorage.userId) {
      this.setState({isLogin: true, user: localStorage.user, userId: localStorage.userId})
    }
  }
  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };
  handleUsername(e,username){
    this.setState({username:username.trim()})
  }
  handlePassword(e,password){
    this.setState({password:password.trim()})
  }
  handleSubmit(){
    let data = {username: this.state.username,password: this.state.password};
    // console.log(data);
    axios.post(`http://api.duopingshidai.com/user/${this.state.action}`,data)
      .then( res => {this.setState({open: false , isLogin: true, user: res.data.user, userId:   res.data.userId });
      localStorage.setItem('user', res.data.user);
      localStorage.setItem('userId', res.data.userId);
      }
    )
      .catch( err =>
      {
        if (err.response) { //后台fanhui le  2xx 以外的错误码
          alert(err.response.data.msg);
        }else{
          console.log(err)
        }
      }
    )
  };
  openMenu(){
    thsi.setState({openMenu: true})
  }
  handleOnRequestChange(value){
     this.setState({
       openMenu: value,
     });
   };
  handleMenuItem(e,child){
     if (child.props.value==="3") this.logout();
  }
  logout(){
    axios.get('http://api.duopingshidai.com/user/logout').then(()=>{
      this.setState({isLogin: false, user: "", userId: "", snackBar: true})
      localStorage.user = '';
      localStorage.userId = "";
    })
  }
  render(){
    console.log(store.getState());
    const styles = {
      title: {
          cursor: 'pointer',

      }
    };
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit.bind(this)}
      />,
    ];
    let rightIco =this.state.isLogin ?
      <IconMenu
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        iconButtonElement={<IconButton><AccountCircle /></IconButton>}
        open={this.state.openMenu}
        onRequestChange={this.handleOnRequestChange.bind(this)}
        onItemTouchTap={this.handleMenuItem.bind(this)}
      >
      <MenuItem value="1" primaryText={this.state.user} />
        <MenuItem value="2" primaryText="个人中心" />
        <MenuItem value="3" primaryText="注销" />
      </IconMenu> :
      <FlatButton label="登陆/注册" onTouchTap={this.handleOpen.bind(this)} />
    return(
      <div>
        <AppBar
          title={<span style={styles.title}>标题</span>}
          iconElementLeft={<IconButton>
            <Link to="/" ><ActionHome /></Link>
          </IconButton>}
          iconElementRight={rightIco}
        />
        <Dialog
          title="登陆/注册"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          >
          <FlatButton label="登陆" primary={this.state.action=='signin' ? true : false } onTouchTap={()=>this.setState({action:'signin'})}/>
          <FlatButton label="注册" primary={this.state.action=='signup' ? true:false } onTouchTap={()=>this.setState({action:'signup'})}/>

          <br />
          <TextField hintText="Full width" fullWidth={true} hintText="账号" onChange={this.handleUsername.bind(this)}/><br />
          <TextField hintText="Full width" fullWidth={true} type="password" hintText="密码"onChange={this.handlePassword.bind(this)}/><br />
        </Dialog>
        <Snackbar
          open={this.state.snackBar}
          message="登出成功"
          autoHideDuration={2000}
          onRequestClose={()=>this.setState({snackBar: false})}
          bodyStyle={{textAlign: 'center'}}
        />
      </div>
    )
  }
}

export default Header
