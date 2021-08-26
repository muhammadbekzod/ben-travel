import React, { Component } from 'react'
import { Wrapper } from './style';
import Navbar from './navbar.jsx';
import Body from './body.jsx';

export default class App extends Component {
  render() {
    return (
     <Wrapper>  
       <Navbar />
       <Body />


     </Wrapper>
    )
  }
}
