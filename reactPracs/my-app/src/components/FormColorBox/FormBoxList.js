import React, {Component} from 'react';
import FormColorBoxForm from './FormColorBoxForm';
import FormColorBox from './FormColorBox';

class FormBoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                {
                    width: 10
                ,   height: 10
                ,   color: "purple"
                }
            ]
        }
        this.addBox = this.addBox.bind(this);
    }

    addBox(newBox) {
        console.log("Adding")
        this.setState(curState => ({
            boxes: [...curState.boxes, newBox]
        }))
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <FormColorBox
                width={box.width}
                height={box.height}
                color={box.color}
              
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