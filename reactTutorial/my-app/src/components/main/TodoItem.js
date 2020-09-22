import React from 'react'
import '../../App.css'

function todoChecked() {
    console.log("checked");
}

const TodoItem = (props) => {
    //console.log(props)
    return (
        <li className= {props.isComplete? 'isComplete' : 'isNotComplete'}>
            <input type="checkbox" checked={props.isComplete} onChange={todoChecked}/>
            <span>{props.content}</span>
        </li>
    )
}
export default TodoItem