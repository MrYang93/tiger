import React from 'react';
import { Link } from 'react-router'

class PageNotFound extends React.Component{
  constructor(){
    super();

  }

  render(){

    return(
      <div>
        请先<Link to = '/login'>登陆</Link>在查看
      </div>
    )
  }
}
export default PageNotFound;
