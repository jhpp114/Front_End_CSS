import React, { Component } from 'react';

import Button from '../button_number/button_number.component';

class Number extends Component {
    constructor() {
        super();
        this.state = {
            number: 1
        };
    }
    handleClick = (event) => {
        const MaxLength = 10;
        let randomNumber = Math.floor(Math.random() * MaxLength) + 1;
        console.log(randomNumber);
        this.setState( {
            number: randomNumber
        }, () => {
            console.log(this.state);
        } );
    }

    render() {
        return (
            <div>
                <h1>Current Number {this.state.number}</h1>
                {
                    this.state.number === 7? 
                    <h2>You Won</h2>
                        :<Button clickHandler={this.handleClick}/>
                }
                
            </div>
        )
    }
}

export default Number;
