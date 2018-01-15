import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import {userInfoAction} from 'reduxs/action'

@withRouter
@connect(
  state=>state.userinfo,
  {userInfoAction}
)
class AuthRouter extends Component {
  constructor(props){
    super(props);

  }
  componentWillMount() {
    console.log(this.props);
    const url = ['/login','/register'];
    const {pathname} = this.props.location;
    if(url.indexOf(pathname)>-1)return;
    this.props.userInfoAction();
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default AuthRouter;
