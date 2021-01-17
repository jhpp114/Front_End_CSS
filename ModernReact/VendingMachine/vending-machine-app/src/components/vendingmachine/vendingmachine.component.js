import React, { Component } from 'react';
import './vendingmachine.style.css';
import { Route, Link, Switch } from 'react-router-dom';
import Drink from '../drinks/drink.component';
import Snacks from '../snacks/snacks.component';

class VendingMachine extends Component {
    render() {
        return (
            <div className='vending-machine' style={{
                backgroundImage: `url("https://image.shutterstock.com/image-vector/vintage-vending-machine-food-drinks-260nw-434004316.jpg")`
                ,backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                
                <h1>Vending Machine</h1>
                
            </div>
        )
    }
}

export default VendingMachine;
