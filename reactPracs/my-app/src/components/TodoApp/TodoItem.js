import React, { Component } from 'react';


class TodoItem extends Component {
    render() {
        return (
            <li>
                {this.props.name}
                <button>Edit</button>
                <button>Delete</button>
            </li>
        );
    }
}

export default TodoItem;