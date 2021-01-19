import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.style.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className='navbar'>
                <NavLink activeClassName='selectedLink' exact to='/'>Home</NavLink>
                <NavLink activeClassName='selectedLink' exact to='/dogs'>Dogs</NavLink>
                {
                    this.props.dogs.map(eachDogsLink => (
                        
                        <NavLink activeClassName='selectedLink' exact to={`/dogs/${eachDogsLink.name}`}>{eachDogsLink.name}</NavLink>
                    ))
                }
            </nav>
        )
    }
}

export default Navbar;
