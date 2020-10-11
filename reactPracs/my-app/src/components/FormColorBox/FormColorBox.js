import React, { Component } from 'react';

class FormColorBox extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.removeBox(this.props.id);
    }
    render() {
        return (
            <div>
                <div style={{
                    width:`${this.props.width}px`
                ,   height:`${this.props.height}px`
                ,   backgroundColor: `${this.props.color}` 
                }}>    
                </div>
               
                <button onClick={this.handleClick}>Remove this box</button>
                <br/><br/>
            </div>
        );
    }
}

export default FormColorBox;