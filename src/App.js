import React from 'react';
import Header from './components/header.js'
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {accountProducts} from './redux/actions/accountAction.js';



class App extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }

  componentWillMount(){
    this.props.accountProducts();
  }

  render(){
    return(
      <div>
        <Header />
         { this.props.children }
      </div>
    )
  }
}
// export default App;
function mapStateToProps(state){
  return {
    state: state
  }
}

export default connect(mapStateToProps,{accountProducts})(App);
