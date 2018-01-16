import React, {Component} from 'react';
import {NavBar, WhiteSpace, Button , Toast} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios'

import {FINDINFOMATION, SAVEINFOMATION} from 'api/user.api'
import Avatar from "components/Avatar";
import GeniusInfo from "../../components/GeniusInfo";
import BoosInfo from "../../components/BoosInfo";
import { workInfoAction } from 'reduxs/action'

@withRouter
@connect(
  state => state.userinfo,
  {workInfoAction}
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
    axios.post(FINDINFOMATION, {userid: this.props.match.params.id})
      .then(_res => {
        if (_res.succeed) {
          const {update_time,create_time,...result} = _res.data;
          this.setState(result);
          this.props.workInfoAction(result);
          this.props.history.push(`/home/${this.props.match.params.id}`);
        }
      })
  }

  onChangeInput(key, val) {
    this.setState({
      [key]: val
    })
  }

  submit() {
    let parameter = Object.assign({}, this.state, {userid: this.props.match.params.id});
    delete parameter._id;
    axios.post(SAVEINFOMATION,parameter)
      .then(_res => {
        if(_res.succeed){
          Toast.success(_res.errorMessage, 1);
          this.setState(_res.data);
          this.props.workInfoAction(parameter);
          this.props.history.push(`/home/${this.props.match.params.id}`);
        }else {
          Toast.fail(_res.errorMessage, 1);
        }
      })
  }

  render() {
    return (
      <div>
        <NavBar mode='dark'>{this.props.type == 'boos' ? 'boos完善资料页' : '牛人完善资料页'}</NavBar>
        <Avatar onChangeInput={this.onChangeInput} avatar = {this.state.avatar}></Avatar>
        <WhiteSpace></WhiteSpace>
        {this.props.type == 'boos' ? <BoosInfo onChangeInput={this.onChangeInput} {...this.state}/> : <GeniusInfo onChangeInput={this.onChangeInput} {...this.state}/>}
        <WhiteSpace></WhiteSpace>
        <Button type="primary" onClick={this.submit}>保存</Button>
      </div>
    );
  }
}

export default UserInfo;
