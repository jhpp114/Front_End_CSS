import React, {Component} from 'react';
import FormColorBoxForm from './FormColorBoxForm';
import FormColorBox from './FormColorBox';

class FormBoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
            ]
        }
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    addBox(newBox) {
        console.log("Adding")
        this.setState(curState => ({
            boxes: [...curState.boxes, newBox]
        }))
    }

    removeBox(id) {
        this.setState(curState => ({
            boxes: curState.boxes.filter(box => box.id !== id)
        }))
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <FormColorBox
                key={box.id}   
                id={box.id} 
                width={box.width}
                height={box.height}
                color={box.color}
                removeBox={this.removeBox}
            />
        ))
        return(
            <div>
                <FormColorBoxForm
                    addBox={this.addBox}
                />
                <br/>
                {boxes}
            </div>
        )
    }
}
export default FormBoxList;