import React, { Component } from 'react';
import {withRouter , Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios'

import {USERINFO} from 'api/user.api'
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
    const url = ['/login','/register'];
    const {pathname} = this.props.location;
    if(url.indexOf(pathname)>-1)return;
    axios.post(USERINFO)
      .then(_res => {
        if (_res.succeed) {
          console.log("1")
          this.props.userInfoAction(_res.data);
        }else {
          this.props.history.push('/login');
        }
      })
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default AuthRouter;
