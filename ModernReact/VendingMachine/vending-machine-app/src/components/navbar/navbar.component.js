import React, { Component } from 'react';
import './navbar.style.css';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return(
            <nav className='vending-machine-nav'>
                <NavLink exact activeClassName='activeLink' to='/'>Vending Machine</NavLink>
                <NavLink exact activeClassName='activeLink' to='/drink'>Drink</NavLink>
                <NavLink exact activeClassName='activeLink' to='/snacks'>Snacks</NavLink>
            </nav>
        )
    }
}

export default Navbar;
