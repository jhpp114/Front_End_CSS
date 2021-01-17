import React, { Component } from 'react';
import About from './about.component';
import Contact from './contact.component';

import { Route, Switch, Link } from 'react-router-dom';


class RouterDOM extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <nav>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
                <Switch>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/contact' component={Contact}/>
                </Switch>     
            </div>
           
        )
    }
}

export default RouterDOM;
