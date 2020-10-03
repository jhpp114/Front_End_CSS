import React, {Component} from 'react'
import LottNumber from './LottNumber.js'
class Lottery extends Component {
    static defaultProps = {
        title: "Default Title"
    ,   ballNum: 3
    ,   ballMax: 10
    }
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: Array.from({length: props.ballNum})
        }
        this.handleClick = this.handleClick.bind(this);
        
    }
    generateRandom() {
        //const randomNumber = Math.floor(Math.random() * this.props.ballMax) + 1;
        this.setState(prevState => ({
            randomNumber: prevState.randomNumber.map(  
                (eachData) => Math.floor(Math.random() * this.props.ballMax) + 1
            )
        }));
    }
    handleClick() {
        this.generateRandom();
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                {this.state.randomNumber.map( (eachData, index) => (
                    <LottNumber key={index} num={eachData}/>
                ))}
                <br></br>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}
export default Lottery;
