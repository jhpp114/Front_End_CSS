import React, { Component } from 'react';

class FormColorBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{
                width:`${this.props.width}px`
            ,   height:`${this.props.height}px`
            ,   backgroundColor: `${this.props.color}` 
            }}>    
            </div>
        );
    }
}

export default FormColorBox;