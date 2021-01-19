import React, { Component } from 'react';
import './colorbox.style.css';

class colorbox extends Component {
    render() {
        const { background, name } = this.props;
        return (
            <div style={{backgroundColor: background}} className='colorbox'>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                <span className='see-more'>More</span>
            </div>
        );
    }
}

export default colorbox;