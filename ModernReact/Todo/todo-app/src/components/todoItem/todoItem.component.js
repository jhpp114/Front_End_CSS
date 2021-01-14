import React, { Component } from 'react';
import './todoItem.style.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            todo: this.props.todoData
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleClick(event) {
        this.props.removeItem(this.props.id);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleEdit() {
        this.setState({
            isEditing: !(this.state.isEditing)
        })
    }

    handleUpdate(event) {
        event.preventDefault();
        this.props.updateItem(this.props.id, this.state.todo);
        this.setState({
            isEditing: false
        });
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <form>
                    <input
                        type='text'
                        name='todo'
                        value={this.state.todo}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleUpdate}>Save</button>
                </form>
            )
        } else {
            result = (
                <div>
                    <li>{this.props.todoData}</li>
                    <button onClick={this.handleClick}>Remove</button>
                    <button onClick={this.handleEdit}>Edit</button>
                </div>
            )
        }
        return result;
    }
}

export default TodoItem;
