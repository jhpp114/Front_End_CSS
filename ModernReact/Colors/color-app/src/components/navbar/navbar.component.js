import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './navbar.style.css';

class navbar extends Component {
    render() {
        const { level, changeLevel } = this.props;
        return (
            <div className='navbar'>
                <div className='logo'>
                    <a href="#">ReactColorApp</a>
                </div>
                <div class='nav-container'>
                    <span>Level: {level}</span>
                    <div className='slider'>
                        
                        <Slider
                            min={100} 
                            max={900} 
                            step={100} 
                            defaultValue={level}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default navbar;