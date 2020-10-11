import React, { Component } from 'react';

class FormColorBox extends Component {
    constructor(props) {
        super(props);
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
               
                <button type="">Remove this box</button>
                <br/><br/>
            </div>
        );
    }
}

export default FormColorBox;