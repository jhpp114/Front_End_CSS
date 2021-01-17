import React, { Component } from 'react';
import './drink.style.css';
import { Link } from 'react-router-dom';


class Drink extends Component {
    render() {
        return (
            <div>
                <p>Soda page</p>
                <Link exact to='/'>Go Back</Link>
            </div>
        )
    }
}

export default Drink;
