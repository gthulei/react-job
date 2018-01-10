import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

@withRouter
class AuthRouter extends Component {
  constructor(props){
    super(props);

  }
  componentWillMount() {
    const url = ['/login','/register'];
    const {pathname} = this.props.location;
    if(url.indexOf(pathname)>-1)return;

  }

  render() {
    return (
      <div></div>
    );
  }
}

export default AuthRouter;
