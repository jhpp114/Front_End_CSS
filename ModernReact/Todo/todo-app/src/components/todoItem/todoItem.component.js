import React, { Component } from 'react';
import './todoItem.style.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);
    
    }
    render() {
        return(
            <li>{this.props.todoData}</li>
        )
    }
}

export default TodoItem;
