import React, {Component} from 'react';
import {WingBlank, WhiteSpace, InputItem, Button, Radio} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Logo from "components/Logo";
import {registerAction} from 'reduxs/action'

const RadioItem = Radio.RadioItem;

@withRouter
@connect(
  state=>state.userinfo,
  {registerAction}
)
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPass: '',
      type: 'genius',
      msg: ''
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onGoback = this.onGoback.bind(this);

  }

  onChangeInput(key, val) {
    this.setState({
      [key]: val
    });
  }

  onSubmit() {
    if (this.state.username == '') {
      this.setState({
        msg: '请输入帐号'
      });
      return;
    } else if (this.state.password == '') {
      this.setState({
        msg: '请输入密码'
      });
      return;
    } else if (this.state.confirmPass !== this.state.password) {
      this.setState({
        msg: '2次密码不一致'
      });
      return;
    }
    this.setState({
      msg: ''
    });
    const {msg, confirmPass, ...parameter} = this.state;
    this.props.registerAction(parameter);
  }

  onGoback() {
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <Logo></Logo>
        <WingBlank>
          <h1 className={'f18'}>用户注册</h1>
          <WhiteSpace/>
          {this.state.msg ? <div className={'error f14'}>{this.state.msg}</div> : ''}
          <InputItem
            type="type"
            placeholder="请输入帐号"
            onChange={v => this.onChangeInput('username', v)}
          >帐号
          </InputItem>
          <WhiteSpace/>
          <InputItem
            type="password"
            placeholder="请输入密码"
            onChange={v => this.onChangeInput('password', v)}
          >密码
          </InputItem>
          <WhiteSpace/>
          <InputItem
            type="password"
            placeholder="确认密码"
            onChange={v => this.onChangeInput('confirmPass', v)}
          >确认密码
          </InputItem>
          <WhiteSpace/>
          <RadioItem checked={this.state.type == 'genius'} onChange={() => this.onChangeInput('type', 'genius')}>牛人</RadioItem>
          <RadioItem checked={this.state.type == 'boos'} onChange={() => this.onChangeInput('type', 'boos')}>BOOS</RadioItem>
          <WhiteSpace/>
          <Button type="primary" onClick={this.onSubmit}>注册</Button>
          <WhiteSpace/>
          <Button type="primary" onClick={this.onGoback}>登录</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Register;
