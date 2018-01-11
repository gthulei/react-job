import React, {Component} from 'react';
import {NavBar, WhiteSpace , Button} from 'antd-mobile';

import Avatar from "components/Avatar";
import GeniusInfo from "../../components/GeniusInfo";
import BoosInfo from "../../components/BoosInfo";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(key,val){
    this.setState({
      [key]:val
    })
  }

  submit(){
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <NavBar mode='dark'>{this.props.routerTo == 'genius' ? '牛人完善资料页' : 'boos完善资料页'}</NavBar>
        <Avatar></Avatar>
        <WhiteSpace></WhiteSpace>
        {this.props.routerTo == 'genius' ? <GeniusInfo onChangeInput={this.onChangeInput}/> : <BoosInfo onChangeInput={this.onChangeInput}/>}
        <WhiteSpace></WhiteSpace>
        <Button type="primary" onClick={this.submit}>保存</Button>
      </div>
    );
  }
}

export default UserInfo;
