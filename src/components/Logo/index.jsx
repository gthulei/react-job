import React, { Component } from 'react';

import logo from './logo.png'
import './index.css'

class Logo extends Component {
  render() {
    return (
     <section className={'logo-wrap'}>
       <img src={logo} alt="logo" className={'logo-img'}/>
     </section>
    );
  }
}

export default Logo;
