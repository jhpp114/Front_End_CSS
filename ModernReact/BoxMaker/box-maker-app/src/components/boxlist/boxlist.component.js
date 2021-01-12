import React, { Component } from 'react';
import './boxlist.style.css';
import NewBoxForm from '../newBoxForm/newBoxForm.component';
import Box from '../box/box.component';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                {width: 50, height: 100, backgroudColor: "purple"},
                {width: 100, height: 50, backgroudColor: "blue"}
            ]
        }
        this.createNewBox = this.createNewBox.bind(this);
    }

    createNewBox(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        }, () => {
            console.log("A new box had been added");
        })
    }

    render() {
        return (
            <div>
                <NewBoxForm createNewBox={this.createNewBox}/>
                {
                    this.state.boxes.map( eachBox => (
                        <Box 
                            backgroundColor={eachBox.backgroudColor}
                            width={eachBox.width}
                            height={eachBox.height}
                        />
                    ))
                }
            </div>
        )
    }
}

export default BoxList;
