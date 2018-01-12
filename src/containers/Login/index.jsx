import React, {Component} from 'react';
import {WingBlank, WhiteSpace, InputItem, Button} from 'antd-mobile';
import {withRouter} from 'react-router-dom'

import Logo from "components/Logo";

@withRouter
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      msg:''
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onGoback = this.onGoback.bind(this);
  }

  onChangeInput(key,val){
    this.setState({
      [key]: val,
    });
  }

  onSubmit(){
    if(this.state.username == ''){
      this.setState({
        msg: '请输入帐号'
      });
      return;
    }else if(this.state.password == ''){
      this.setState({
        msg: '请输入密码'
      });
     return;
    }
    this.setState({
      msg: ''
    });
   const {msg,...parameter} = this.state;
    console.log(parameter);
  }

  onGoback(){
    this.props.history.push('/register');
  }

  render() {
    return (
      <div>
        <Logo></Logo>
        <WingBlank>
          <h1 className={'f18'}>用户登录</h1>
          <WhiteSpace/>
          {this.state.msg?<div className={'error f14'}>{this.state.msg}</div>:''}
          <InputItem
            type="type"
            placeholder="请输入帐号"
            onChange={v => this.onChangeInput('username',v)}
            maxLength={11}
          >帐号
          </InputItem>
          <WhiteSpace/>
          <InputItem
            type="password"
            placeholder="请输入密码"
            onChange={v => this.onChangeInput('password',v)}
            maxLength={16}
          >密码
          </InputItem>
          <WhiteSpace/>
          <Button type="primary" onClick={this.onSubmit}>登录</Button>
          <WhiteSpace/>
          <Button type="primary" onClick={this.onGoback}>注册</Button>
        </WingBlank>
      </div>);
  }
}

export default Login;
