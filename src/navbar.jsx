import React, { Component } from 'react';
import {Navbar, Logo, NavItem1, NavItem2, NavItem3, NavItem4, NavItem5, NavItem7,Button} from './navbarStyle';
import logo from './img/Logo.png';

export default class navbar extends Component {
    render() {
        return (
       <Navbar>
           <Logo src={logo}/>
           <NavItem1>Desitnations</NavItem1>
           <NavItem2>Hotels</NavItem2>
           <NavItem3>Flights</NavItem3>
           <NavItem4>Bookings</NavItem4>
           <NavItem5>Login</NavItem5>
           <Button>Sign Up</Button>
           <NavItem7>Eng </NavItem7>

       </Navbar>
        )
    }
}
