import React, { Component } from 'react';
import './boxlist.style.css';
import NewBoxForm from '../newBoxForm/newBoxForm.component';
import Box from '../box/box.component';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
        this.createNewBox = this.createNewBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    createNewBox(newBox) {
        console.log(newBox);
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }

    removeBox(id) {
        this.setState({
            boxes: this.state.boxes.filter(eachBox => eachBox.id !== id)
        });
    }

    render() {
        return (
            <div>
                <NewBoxForm createNewBox={this.createNewBox}/>
                {
                    this.state.boxes.map( eachBox => (
                        <Box 
                            key={eachBox.id}
                            id={eachBox.id}
                            backgroundColor={eachBox.backgroundColor}
                            width={eachBox.width}
                            height={eachBox.height}
                            removeBox={this.removeBox}
                        />
                    ))
                }
            </div>
        )
    }
}

export default BoxList;
