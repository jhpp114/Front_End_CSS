import React, { Component } from 'react';
import './randomButton.style.css';

class RandomButton extends Component {
    static defaultProps = {
        colors: [
            "#e056fd",
            "#eb4d4b",
            "#badc58",
            "#f0932b"
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            color: "cyan"
        };
    }

    changeColor(newColor) {
        this.setState( {
            color: newColor
        } )
    }

    render() {
        return (
            <div className='randomButton' style={{backgroundColor: this.state.color}}>
                {
                    this.props.colors.map((eachColor) => {
                        return <button style={{backgroundColor: eachColor}} onClick={this.changeColor.bind(this, eachColor)}>Click me</button>
                    })
                }
            </div>
        )
    }
}

export default RandomButton;
