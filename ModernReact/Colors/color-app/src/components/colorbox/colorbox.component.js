import React, { Component } from 'react';

class colorbox extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.background}} className='colorbox'>
                <span>{this.props.name}</span>
                <span>More</span>
            </div>
        );
    }
}

export default colorbox;