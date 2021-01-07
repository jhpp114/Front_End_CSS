import React from 'react';
import './colorBoard.style.css';
import Box from '../box/box.component';

class ColorBoard extends React.Component {
    static defaultProps = {
        maxNum: 10
    };
    constructor(props) {
        super(props);
        this.state = {
            numBoxes: new Array(this.props.maxNum).fill(null)
        }
    }
    render() {
        return (
            <div className='color-board'>
                {
                    this.state.numBoxes.map(s => (<Box/>))
                }
            </div>
        )
    }
}

export default ColorBoard;