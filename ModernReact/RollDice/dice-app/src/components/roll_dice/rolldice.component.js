import React, { Component } from 'react';
import './rolldice.style.css';
import Dice from '../die/die.component';


class RollDice extends Component {
    constructor() {
        super();
        this.state = {
            isRolling: false,
            die1: 'fas fa-dice-one dice',
            die2: 'fas fa-dice-two dice'
        }
    }
    
    roll = (event) => {
        let newDie1 = this.randomGenerate();
        let newDie2 = this.randomGenerate();
        this.setState( {
            isRolling: true,
        }, () => {
            setTimeout( () => {
                this.setState({
                    isRolling: false,
                    die1: newDie1,
                    die2: newDie2
                })
            }, 1500)
        })
    }

    randomGenerate = (event) => {
        const diceArray = [
            'fas fa-dice-one dice',
            'fas fa-dice-two dice',
            'fas fa-dice-three dice',
            'fas fa-dice-four dice',
            'fas fa-dice-five dice',
            'fas fa-dice-six dice'
        ]
        let randomIndex = Math.floor(Math.random() * diceArray.length);
        return diceArray[randomIndex];
    }

    render() {
        return (
            <div className='roll-dice'>
                <div className='roll-dice-dices'>
                    <Dice randomNumber={this.state.die1}/>
                    <Dice randomNumber={this.state.die2}/>
                </div>
                <div className='roll-buttons'>
                    {
                        this.state.isRolling
                        ? <button className='roll-rolling' disabled>Rolling...</button>
                        : <button className='roll-roll' onClick={this.roll}>Roll</button>
                    }    
                </div>
            </div>
        )
    }
}

export default RollDice;
