import React, { Component } from 'react';
import './boxlist.style.css';
import NewBoxForm from '../newBoxForm/newBoxForm.component';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
    }
    render() {
        return (
            <div>
                <NewBoxForm/>
            </div>
        )
    }
}

export default BoxList;
