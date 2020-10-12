import React, { Component } from 'react';


class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            name: this.props.name
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleDelete() {
        this.props.removeTodo(this.props.id)
    }

    handleEdit() {
        this.setState(curState => ({
            isEdit: !curState.isEdit
        }))
    }

    handleChange(event) {
        this.setState(({
            [event.target.name]: event.target.value
        }))
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.editTodo(this.props.id, this.state.name);
        this.setState(curState => ({
            isEdit: !curState.isEdit
        }));
    }

    render() {
        let result;
        if (this.state.isEdit) {
            result = (
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="edit">Edit</label>
                    <input
                        type="text"
                        name="name"
                        id="edit"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <button>Save</button>
                </form>
            )
        } else {
            result = (
                <li>
                    {this.props.name}
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </li>
            )
        }
        return (
            result
        );
    }
}

export default TodoItem;