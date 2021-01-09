import React, { Component } from 'react';
import './cell.style.css';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.flipCellsAroundMe();
    }

    render() {
        let classes = "Cell" + (this.props.isLit? " Cell-lit" : "");
        return (
            <td className={classes} onClick={this.handleClick}/>
        )
    }
}

export default Cell;
