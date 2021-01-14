import React, { Component } from 'react';
import './todolist.style.css';

import TodoItem from '../todoItem/todoItem.component';
import NewTodoForm from '../newTodoForm/newTodoForm.component';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoLists: []
        };
        this.addNewTodo = this.addNewTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    addNewTodo(todoItem) {
        this.setState({
            todoLists: [...this.state.todoLists, todoItem]
        });
    }

    removeTodo(id) {
        this.setState({
            todoLists: this.state.todoLists.filter( eachTodo => eachTodo.id !== id )
        });
    }

    updateTodo(id, newTodo) {
        const updatedTodos = this.state.todoLists.map( eachTodo => {
            if (eachTodo.id === id) {
                eachTodo.todo = newTodo;
            }
            return eachTodo;
        });
        this.setState({
            todoLists: updatedTodos
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.todoLists.map( eachTodo => (
                            <TodoItem 
                                key={eachTodo.id}
                                id={eachTodo.id}
                                todoData={eachTodo.todo}
                                removeItem={this.removeTodo}
                                updateItem={this.updateTodo}
                            />
                        ))
                    }
                </ul>
                <div>
                    <h3>Add Todo Lists</h3>
                    <NewTodoForm
                        addNewTodo={this.addNewTodo}
                    />
                </div>
            </div>
        )
    }
}

export default TodoList;
