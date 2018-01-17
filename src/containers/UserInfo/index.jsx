import React, {Component} from 'react';
import {NavBar, WhiteSpace, Button } from 'antd-mobile';
import {withRouter , Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {FINDINFOMATION, SAVEINFOMATION} from 'api/user.api'
import Avatar from "components/Avatar";
import GeniusInfo from "../../components/GeniusInfo";
import BoosInfo from "../../components/BoosInfo";
import {workAction} from 'reduxs/action'

@withRouter
@connect(
  state => ({userinfo:state.userinfo, workinfo: state.workinfo}),
  {workAction}
)
class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position:'',
      company:'',
      salary:'',
      decs:'',
      avatar:''
    }
    this.submit = this.submit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }
  componentWillMount() {
    const {position,company,salary,decs,avatar} = this.props.userinfo;
    this.setState({
      position: position,
      company: company,
      salary: salary,
      decs: decs,
      avatar:avatar
    })

  }

  onChangeInput(key, val) {
    this.setState({
      [key]: val
    })
  }

  submit() {
    let params = {...this.state,userid:this.props.userinfo._id};
    this.props.workAction(params);
  }

  render() {
    return (
      <div>
        {this.props.workinfo.avatar ? <Redirect to={this.props.workinfo.routerTo}></Redirect>:''}
        <NavBar mode='dark'>{this.props.userinfo.type == 'boos' ? 'boos完善资料页' : '牛人完善资料页'}</NavBar>
        <Avatar onChangeInput={this.onChangeInput} avatar = {this.state.avatar}></Avatar>
        <WhiteSpace></WhiteSpace>
        {this.props.userinfo.type == 'boos' ? <BoosInfo onChangeInput={this.onChangeInput} {...this.state}/> : <GeniusInfo onChangeInput={this.onChangeInput} {...this.state}/>}
        <WhiteSpace></WhiteSpace>
        <Button type="primary" onClick={this.submit}>保存</Button>
      </div>
    );
  }
}

export default UserInfo;
