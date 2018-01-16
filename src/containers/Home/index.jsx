import React, {Component} from 'react';
import axios from 'axios'
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {FINDINFOMATION} from 'api/user.api'

@withRouter
@connect(
  state => state.userinfo
)
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    axios.post(FINDINFOMATION, {userid: this.props.userid})
      .then(_res => {
        if (!_res.succeed) {
          this.props.history.push('/userInfo');
        }
      })
  }


  render() {
    return (
      <div>Home</div>
    );
  }
}

export default Home;
