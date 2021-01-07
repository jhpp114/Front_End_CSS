import React, { Component } from 'react';
import './box.style.css';
import { helper } from '../../helper/helper';

class Box extends Component {
    static defaultProps = {
        defaultColor: [
            '#b52f73'
        ,   '#2a7fd0'
        ,   '#ccf48a'
        ,   '#4e4dbd'
        ,   '#0a8011'
        ,   '#b656f3'
        ,   '#479ba8'
        ,   '#dfd627'
        ,   '#a4b8c1'
        ,   '#1072f4'
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            colors: helper(this.props.defaultColor)
        }
    }

    pickColor() {
        let newColor = helper(this.props.defaultColor);
        this.setState({
            colors: newColor
        })
    }
    handleClick = (event) => {
        this.pickColor();
    }

    render() {
        return (
            <div className='box' style={
                {backgroundColor: this.state.colors}
            } onClick={this.handleClick}></div>
        )
    }
}

export default Box;