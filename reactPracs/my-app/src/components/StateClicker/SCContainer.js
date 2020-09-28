import React, {Component} from 'react'
import './SCC.css'
class SCContainer extends Component {
    constructor() {
        super();
        this.state = {
            number: 1
        }
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick = (e) => {
        console.log("hello"); 
        const randonNumber = Math.floor(Math.random() * 10) + 1;
        this.setState( {
            number: randonNumber
        })
    }
    render() {
        return (
            <div>
                <main>
                    {this.state.number}                    
                </main>
                {this.state.number === 7? 
                <p>
                    You Are winner
                </p>
                :
                <button onClick={this.handleClick}>
                    Button
                </button>}
            </div>
        )
    }

}
export default SCContainer;