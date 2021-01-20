import React, { Component } from 'react';
import './palette.style.css';
import ColorBox from '../colorbox/colorbox.component';
import Navbar from '../navbar/navbar.component';
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
                <Navbar level={level} changeLevel={this.changeLevel} />
                <div className='palette-color'>
                    {Colors}
                </div>
            </div>
        );
    }
}

export default palette;