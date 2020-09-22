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
    }
    render() {
        const todos = this.state.todoJson.map( (todo) => {
            return (
            <TodoItem
                key={todo.id}
                content={todo.text}
                isComplete={todo.completed}
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