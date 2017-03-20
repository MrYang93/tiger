import React from 'react';
import Header from './components/Header.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';


class App extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }

  render(){

    return(
      <div>
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
        <Link to="/login" > login</Link>
        <Link to="/" > home</Link>
         { this.props.children }
      </div>
    )
  }
}
export default App;
