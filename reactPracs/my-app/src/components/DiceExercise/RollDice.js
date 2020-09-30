import React, {Component} from 'react'
import Die from './Die.js'
class RollDice extends Component {
    constructor() {
        super();
        this.state = {
            diceState: ""
        ,   isRolling: false
        }
    }
    
    handleClick() {
        const randomDice = Math.floor(Math.random() * 6) + 1;
    }

    render() {

        return(
            <div>
                <Die
                    dice={this.state.diceState}/>
                <button id="rollBtn">Roll</button>
            </div>
        )
    }
}
export default RollDice;
