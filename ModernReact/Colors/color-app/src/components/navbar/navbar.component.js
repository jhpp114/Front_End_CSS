import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './navbar.style.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleChange(event) {
        this.setState({
            format: event.target.value,
            open: true
        });
        this.props.formatChange(event.target.value);
    }

    closeSnackbar() {
        this.setState({
            open: false
        });
    }

    render() {
        const { level, changeLevel } = this.props;
        return (
            <nav className='navbar'>
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
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                    autoHideDuration={3000}
                    message={<span id='message-id'>Format Changed!</span>}
                    open={this.state.open}
                    ContentProps = {
                        {"aria-describedby": "message-id"}
                    }
                    onClose={this.closeSnackbar}
                    action={
                        [
                            <IconButton
                                onClick={this.closeSnackbar}
                                key='close'
                                aria-label='close'
                                color='inherit'
                            >
                                <CloseIcon/>
                            </IconButton>
                        ]
                    }
                />
            </nav>
        );
    }
}

export default navbar;
