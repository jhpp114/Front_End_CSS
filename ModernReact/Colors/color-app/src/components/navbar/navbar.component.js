import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './navbar.style.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            format: event.target.value
        });
        this.props.formatChange(event.target.value);
    }

    render() {
        const { level, changeLevel } = this.props;
        return (
            <div className='navbar'>
                <div className='logo'>
                    <a href="#">ReactColorApp</a>
                </div>
                <div className='nav-container'>
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
                <div className='select-container'>
                    <Select
                        value={this.state.format}
                        onChange={(event)=> this.handleChange(event)}
                    >
                        <MenuItem value="hex">
                            <em>HEX - Ex: #ffffff</em>
                        </MenuItem>
                        <MenuItem value="rgb">
                            <em>RGB - Ex: rgb(255,255,255)</em>
                        </MenuItem>
                        <MenuItem value="rgba">
                            <em>RGBA - Ex: rgba(255,255,255,1.0)</em>
                        </MenuItem>
                    </Select>
                </div>
            </div>
        );
    }
}

export default navbar;