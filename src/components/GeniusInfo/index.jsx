import React, {Component} from 'react';
import { List, InputItem } from 'antd-mobile';

class GeniusInfo extends Component {
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
        <InputItem placeholder="求职职位" onChange={v => this.onChangeInput('position',v)}>招聘职位</InputItem>
        <TextareaItem
          title="职位要求"
          placeholder="职位要求"
          onChange={v => this.onChangeInput('requirements',v)}
          autoHeight
        />
      </List>
    );
  }
}

export default GeniusInfo;
