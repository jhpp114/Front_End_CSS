import React, {Component} from 'react'

class NumberBtnItem extends Component {
    constructor(props) {
        super(props);
        this.removeHelper = this.removeHelper.bind(this);
    }
    removeHelper() {
        this.props.utilFunc(this.props.value);
    }
    render(){
        return(
            <li>
                {this.props.value}
                <button onClick={this.removeHelper}>Remove</button>
            </li>
        )
    }
}
export default NumberBtnItem;