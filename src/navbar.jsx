import React, { Component } from 'react';
import {Navbar, Logo, NavItem, NavItem1, NavItem2, NavItem3, NavItem4, NavItem5, NavItem7,Button, Background} from './navbarStyle';
import logo from './img/Logo.png';
//import back from './img/Decore.png';
export default class navbar extends Component {
    render() {
        return (
       <Navbar>
           <NavItem>
           <Logo src={logo}/>
           <NavItem1>Desitnations</NavItem1>
           <NavItem2>Hotels</NavItem2>
           <NavItem3>Flights</NavItem3>
           <NavItem4>Bookings</NavItem4>
           <NavItem5>Login</NavItem5>
           <Button>Sign Up</Button>
           <NavItem7>Eng </NavItem7>
           </NavItem>
           
           {/* <Background src={back}/> */}

       </Navbar>
        )
    }
}
