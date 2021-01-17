import React, { Component } from 'react';
import './snacks.style.css';

import { Link } from 'react-router-dom';
class Snacks extends Component {
    render() {
        return (
            <div>
                <p>Snacks</p>
                <Link exact to='/'>Go Back</Link>
            </div>
        )
    }
}

export default Snacks;
