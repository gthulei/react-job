import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom'

@withRouter
class TabBarLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'me'
    }
  }

  render() {
    return (
      <TabBar>
        {this.props.navList.map(item => {
          return <TabBar.Item
            icon={{uri:require(`./img/${item.icon}.png`)}}
            selectedIcon={{uri:require(`./img/${item.icon}-active.png`)}}
            key={item.path}
            title={item.text}
            selected={this.state.selectedTab === 'msg'}
            onPress={() => this.props.history.push(item.path)}
          />
        })}
      </TabBar>
    );
  }
}

export default TabBarLink;
