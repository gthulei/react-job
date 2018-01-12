import React, {Component} from 'react';
import {List, TextareaItem, InputItem } from 'antd-mobile';

class BoosInfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(key,val){
   this.props.onChangeInput(key,val);
  }

  render() {
    return (
      <List>
        <InputItem placeholder="招聘职位" onChange={v => this.onChangeInput('position',v)}>招聘职位</InputItem>
        <InputItem placeholder='公司名称' onChange={v => this.onChangeInput('company',v)}>公司名称</InputItem>
        <InputItem placeholder='职位薪资' onChange={v => this.onChangeInput('salary',v)}>职位薪资</InputItem>
        <TextareaItem
          title="职位要求"
          placeholder="职位要求"
          onChange={v => this.onChangeInput('decs',v)}
          autoHeight
        />
      </List>
    );
  }
}

export default BoosInfo;
