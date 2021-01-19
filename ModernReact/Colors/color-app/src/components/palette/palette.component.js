import React, { Component } from 'react';
import './palette.style.css';
import ColorBox from '../colorbox/colorbox.component';
class palette extends Component {
    render() {
        const Colors = this.props.colors.map( eachColor => (
            <ColorBox background={eachColor.color} name={eachColor.name}/>
        ))
        return (
            <div className='palette'>
                <div className='palette-color'>
                    {Colors}
                </div>
            </div>
        );
    }
}

export default palette;