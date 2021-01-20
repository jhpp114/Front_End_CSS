import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './palette.style.css';
import ColorBox from '../colorbox/colorbox.component';
class palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        console.log(level);
        this.setState({
            level: level
        });
    }

    render() {
        const { level } = this.state;
        const { colors } = this.props.palette; 
        const Colors = colors[level].map( eachColor => (
            <ColorBox background={eachColor.hex} name={eachColor.name}/>
        ))
        return (
            
            <div className='palette'>
                <Slider 
                    min={100} 
                    max={900} 
                    step={100} 
                    defaultValue={level}
                    onAfterChange={this.changeLevel}
                />
                <div className='palette-color'>
                    {Colors}
                </div>
            </div>
        );
    }
}

export default palette;