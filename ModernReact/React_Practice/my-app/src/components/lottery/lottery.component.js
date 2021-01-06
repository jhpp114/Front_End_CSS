import React, { Component } from 'react';
import Ball from '../lottery_ball/ball.component';
import './lottery.style.css';

class Lottery extends Component {
    static defaultProps = {
        title: '8 balls lottery',
        maxBall: 6,
        maxNum: 40
    };
    
    constructor(props) {
        super(props);
        this.state = {
            nums: new Array(this.props.maxBall).fill(null)
        };
    }

    generateRandom() {
        // console.log(this.state.nums);
        this.setState( prevState => ({
            nums: prevState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
        }), () => {
            console.log(this.state.nums)
        })
    }

    handleClick = (event) => {
        this.generateRandom();
    }

    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <div className='lottery'>
                    {
                        this.state.nums.map( (eachNumber, index) =>
                            (<Ball key={index} num={eachNumber}/>)
                        )
                    }
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}
export default Lottery;
