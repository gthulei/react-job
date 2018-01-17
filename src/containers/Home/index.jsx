import React, {Component} from 'react';
import {withRouter, Redirect, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {NavBar} from 'antd-mobile';

import {FINDINFOMATION} from 'api/user.api';
import TabBarLink from 'components/TabBarLink'
import List from "components/List";
import Msg from "components/Msg";
import Me from "components/Me";

import './index.css';

@withRouter
@connect(
  state => state.workinfo
)
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navList = [
      {path: '/list', text: 'boss', icon: 'job', title: 'boss列表', component: List},
      {path: '/msg', text: '消息', icon: 'msg', title: '消息列表', component: Msg},
      {path: '/me', text: '我', icon: 'user', title: '个人中心', component: Me}
    ]
    return (
      <div>
        <NavBar mode='dark'>home</NavBar>
        <section className={'tabBar-link'}>
          <TabBarLink navList={navList}></TabBarLink>
          <Switch>
            {
              navList.map(v => (
                <Route key={v.path} path={v.path} component={v.component}></Route>
              ))
            }
          </Switch>
        </section>
      </div>
    );
  }
}

export default Home;
