import React, {Component} from 'react';
import FormColorBox from './FormColorBox'
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
                {boxes}
            </div>
        )
    }
}
export default FormBoxList;