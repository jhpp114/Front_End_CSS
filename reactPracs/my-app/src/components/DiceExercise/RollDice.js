import React, {Component} from 'react'
import Die from './Die.js'
import './RollDice.css'
class RollDice extends Component {
    constructor() {
        super();
        this.state = {
            dice1State: "fas fa-dice-one"
        ,   dice2State: "fas fa-dice-one"
        ,   isRolling: false
        }
    }
    
    handleClick = () => {
        console.log("clicked");
        const randomDice1 = Math.floor(Math.random() * 6);
        const randomDice2 = Math.floor(Math.random() * 6);
        const numberInLetters = ["one", "two", "three", "four", "five", "six"];
        
        this.setState({
            dice1State: `fas fa-dice-${numberInLetters[randomDice1]}`
        ,   dice2State: `fas fa-dice-${numberInLetters[randomDice2]}`
        ,   isRolling: true
        })
        setTimeout(() => {
            this.setState({
                isRolling: false
            })
        }, 2000);
    }

    render() {
        console.log(this.state.isRolling);
        let isRolling = this.state.isRolling? "Rolling...." : "Roll"
        return(
            <div className="rolldice-container">
                <Die
                    dice1={this.state.dice1State}
                    dice2={this.state.dice2State}
                    isRolling={this.state.isRolling}/>
                <button 
                    // className={this.state.isRolling? "disableBtn" : "rollBtn"} 
                    className="rollBtn"
                    disabled={this.state.isRolling}
                    onClick={this.handleClick}>
                        {isRolling}
                </button>
            </div>
        )
    }
}
export default RollDice;
