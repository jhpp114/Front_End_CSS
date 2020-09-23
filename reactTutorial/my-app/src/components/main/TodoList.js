import React from 'react'
import TodoItem from './TodoItem'
import todoData from './todoData'
import '../../App.css'

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoJson: todoData
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(id) {
        // find the data using filter that matches id
        // change isComplete data
        // return state
        console.log("Hello Chekced", id);
        this.setState( (prevState) => {
            const updatedTodo = prevState.todoJson.map( (data) => {
                if (data.id === id) {
                    data.completed = !data.completed;
                }
                // return data to store in updatedTodo
                return data;
            });
            //console.log(updatedTodo);
            return {
                todoJson: updatedTodo
            }
        })
    }
    render() {
        const todos = this.state.todoJson.map( (todo) => {
            return (
            <TodoItem
                key={todo.id}
                id={todo.id}
                content={todo.text}
                isComplete={todo.completed}
                handleChange = {this.handleChange}
            />
            )
        });
        return (
            <ul className="todo_Container">
                {todos}
            </ul>
        )
    }
}

// const TodoList = () => {
//     const listsOfTodo = todoData.map( (todo) => {
//         return (
//             <TodoItem
//                 key = {todo.id}
//                 content = {todo.text}
//                 isComplete = {todo.completed}
//             />
//         )
//     })
//     return (
//         <ul className="todo_Container">
//             {listsOfTodo}
//         </ul>
//     )
// }

export default TodoList