import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [
                
            ]
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }

    addTodo(newTodo) {
        this.setState(curState => ({
            todoItems: [...curState.todoItems, newTodo]
        }));
    }

    removeTodo(id) {
        console.log("Remove Todo Invoked");
        this.setState(curState => ({
            todoItems: curState.todoItems.filter(item => item.id !== id) 
        }))
    }

    editTodo(id, newData) {
        const listTodos = this.state.todoItems.map(todo => {
            if (todo.id === id) {
                return {...todo, name: newData};
            } else {
                return todo;
            }
        })
        this.setState(({
            todoItems: listTodos
        }))
    }

    render() {
        const todoItems = this.state.todoItems.map((todo) => (
            <TodoItem 
                key={todo.id}
                id={todo.id}
                name={todo.name}
                done={todo.done}
                removeTodo={this.removeTodo}
                editTodo={this.editTodo}
            />
        ))
        
        return (
            <div>
                <ul>
                    {todoItems}
                </ul>    
                <br/>
                <TodoAdd
                    addTodo={this.addTodo}
                />
            </div>
            
        );
    }
}

export default Todo;
