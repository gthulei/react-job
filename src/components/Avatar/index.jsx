import React, {Component} from 'react';
import {Grid} from 'antd-mobile';

import { avatarList } from 'static/js/const'

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  componentWillMount() {
    this.setState({
      icon:this.props.avatar
    })
  }

  onSelect(e){
    this.props.onChangeInput('avatar',e.icon);
  }
  render() {
    const list = avatarList.split(',').map((k) => ({
      icon: require(`static/img/${k}.png`),
      text:k
    }));
    return (
      <section>
        请选择用户头像：{this.props.avatar?<img src={this.props.avatar} alt="avatar" style={{width: '20px',height: '20px'}}/>:''}
        <Grid data={list} columnNum={5} onClick={this.onSelect}></Grid>
      </section>
    );
  }
}

export default Avatar;
