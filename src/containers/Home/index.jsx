import React, {Component} from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {FINDINFOMATION} from 'api/user.api'

@withRouter
@connect(
  state => state.workinfo
)
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.decs ? '':<Redirect to={`/userInfo/${this.props.match.params.id}`}></Redirect>}
        HOME
      </div>
    );
  }
}

export default Home;
