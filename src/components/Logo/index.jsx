import React, { Component } from 'react';

import logo from './logo.png'
import './index.css'

class Logo extends Component {
  render() {
    return (
     <section className={'logo'}>
       <img src={logo} alt="logo" className={'logo'}/>
     </section>
    );
  }
}

export default Logo;
