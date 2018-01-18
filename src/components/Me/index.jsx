import React, {Component} from 'react';
import {Result, List, Button, WhiteSpace, Modal, Toast} from 'antd-mobile'
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import axios from 'axios'

import {FINDINFOMATION, ESC_LOGIN} from 'api/user.api'
import {clearUserinfAction} from 'reduxs/action'

const alert = Modal.alert;

@withRouter
@connect(
  state => state.userinfo,
  {clearUserinfAction}
)
class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      decs: '',
      company: ''
    }

    this.showAlert = this.showAlert.bind(this)
  }

  showAlert(){
    alert('提示', '是否退出登录???', [
      { text: '取消'},
      { text: '确认', onPress: () => {
        axios.post(ESC_LOGIN)
          .then(_res => {
            if (_res.succeed) {
              this.props.clearUserinfAction({});
              this.props.history.push('/login');
            }
          })
        } },
    ]);
  }

  componentWillMount() {
    setTimeout(() => {
      axios.post(FINDINFOMATION, {userid: this.props._id})
        .then(_res => {
          if (_res.succeed) {
            this.setState(_res.data)
          } else {
            Toast.fail(_res.errorMessage, 1);
          }
        })
    }, 0)

  }

  render() {
    const Item = List.Item
    const Brief = Item.Brief
    return (
      <section>
        <Result
          img={<img src={this.state.avatar} style={{width: 50}}/>}
          title={this.props.username}
          message={this.props.type === 'boss' ? this.state.company : ''}
        ></Result>
        <WhiteSpace/>
        <List renderHeader={() => '简介'}>
          <Item>
            {this.state.decs.split('\n').map(v => <Brief key={v}>{v}</Brief>)}
          </Item>
        </List>
        <WhiteSpace />
        <Button onClick={this.showAlert}>退出登录</Button>
        <WhiteSpace />
        用户中心
      </section>
    );
  }
}

export default Me;
