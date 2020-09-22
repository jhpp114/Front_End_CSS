import React from 'react'
import TodoItem from './TodoItem'
import todoData from './todoData'
import '../../App.css'

const TodoList = () => {
    const listsOfTodo = todoData.map( (todo) => {
        return (
            <TodoItem
                key = {todo.id}
                content = {todo.text}
                isComplete = {todo.completed}
            />
        )
    })
    return (
        <ul className="todo_Container">
            {listsOfTodo}
        </ul>
    )
}

export default TodoList