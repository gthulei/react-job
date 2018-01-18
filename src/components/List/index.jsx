import React, {Component} from 'react';
import {WingBlank, Card, WhiteSpace} from 'antd-mobile'
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import axios from 'axios'

import {FINDUSETLIST} from 'api/user.api'

@withRouter
@connect(
  state => state.userinfo
)
class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userlist:[]
    }
  }

  componentWillMount() {
    setTimeout(() => {
      const type = this.props.type == 'boss' ? 'genius' : 'boss';
      axios.post(FINDUSETLIST, {type})
        .then(_res => {
          if (_res.succeed) {
            this.setState({
              userlist: _res.data
            })
          } else {
            Toast.fail(_res.errorMessage, 1);
          }
        })
    }, 0)
  }

  render() {
    const Header = Card.Header
    const Body = Card.Body
    return (
      <WingBlank>
        <WhiteSpace></WhiteSpace>
        {
        this.state.userlist.map((v, i) => (v.avatar ? (<Card key={v._id}>
        <Header
        title={v.username}
        thumb={v.avatar}
        extra={<span>{v.title}</span>}>
        </Header>
        <Body>
        {v.type === 'boss' ? <div>公司：{v.company}</div> : ''}
        {v.decs.split('\n').map(v => <div key={v}>{v}</div>) }
        {v.type === 'boss' ? <div>薪资：{v.salary}</div> : ''}
        </Body>
        </Card>) : ''
        ))
        }
      </WingBlank>
    );
  }
}

export default List;
