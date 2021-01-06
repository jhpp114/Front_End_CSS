import React, { Component } from 'react';
import './board.style.css';
import Coin from '../coin/coin.component';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHead: null
        ,   head: 0
        ,   tail: 0
        };
    }

    handleClick = (event) => {
        this.setState( prevState => ({
            isHead: Math.round(Math.random())
        }), () => {
            // console.log(this.state.isHead);
            if (this.state.isHead) {
                this.setState(prevState => ({
                    head: prevState.head + 1
                }))
            } else {
                this.setState(prevState => ({
                    tail: prevState.tail + 1
                }))
            }
        })
    }

    render() {
        // console.log(this.state.head);
        // console.log(this.state.tail);
        return (
            <div>
                <button onClick={this.handleClick}>Flip me</button>
                { this.state.isHead !== null? <Coin isHead={this.state.isHead}/>:<div></div>}
                <div>
                    <h2>Total Count: {this.state.head + this.state.tail}</h2>
                    <p>Head: {this.state.head}</p>
                    <p>Tail: {this.state.tail}</p>
                </div>
            </div>
        )
    }
}

export default Board;
