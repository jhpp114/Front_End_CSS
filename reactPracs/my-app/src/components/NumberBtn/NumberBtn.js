import React, {Component} from 'react'
import NumberBtnItem from './NumberBtnItem'
class NumberBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [
                1,2,3,4,5
            ]
        };
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(number) {
        this.setState(prevState => ({
            numbers: prevState.numbers.filter(n => n !== number)
        }))
    }
    render() {
        let numsList = this.state.numbers.map(n => 
            <NumberBtnItem 
                key={n}
                value={n} 
                utilFunc={this.removeItem}
            />
        )
        return(
            <div>
                <h1>The Number Lists</h1>
                <ul>
                    {numsList}
                </ul>
            </div>
        )
    }
}
export default NumberBtn;
