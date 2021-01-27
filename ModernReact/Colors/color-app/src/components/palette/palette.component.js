import React, { Component } from 'react';
import './palette.style.css';
import ColorBox from '../colorbox/colorbox.component';
import Navbar from '../navbar/navbar.component';
class palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        }
        this.changeLevel = this.changeLevel.bind(this);
        this.formatChange = this.formatChange.bind(this);
    }

    formatChange(newFormat) {
        this.setState({
            format: newFormat
        });
    }

    changeLevel(level) {
        console.log(level);
        this.setState({
            level: level
        });
    }

    render() {
        const { level, format } = this.state;
        const { colors, emoji, paletteName, id } = this.props.palette; 
        const Colors = colors[level].map( eachColor => (
            <ColorBox 
                key={eachColor.id} 
                background={eachColor[format]} 
                name={eachColor.name} 
                id={eachColor.id}
                eachPaletteId={id}
            />
        ))
        // console.log(this.props.palette);
        return (
            <div className='palette'>
                <Navbar level={level} changeLevel={this.changeLevel} formatChange={this.formatChange} />
                <div className='palette-color'>
                    {Colors}
                </div>
                <footer className='palette-footer'>
                    {paletteName}
                    <span className='emoji'>{emoji}</span>
                </footer>
            </div>
        );
    }
}

export default palette;
