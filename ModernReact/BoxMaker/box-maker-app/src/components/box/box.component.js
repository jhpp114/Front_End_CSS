import React, { Component } from 'react';

class Box extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
                <div style={{
                backgroundColor: this.props.backgroundColor, 
                width: `${this.props.width}px`, 
                height: `${this.props.height}px`
                }}>
                </div>
                <button>X</button>
            </div>
        )
    }
}

export default Box;
