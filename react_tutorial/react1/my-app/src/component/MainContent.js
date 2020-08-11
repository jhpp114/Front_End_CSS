import React from "react"
import "../App.css"

function MainContent() {
    const style = {
        fontSize: "2rem"
    };
    return (
        <div class="todo_container">
            <p className="todo_item">
                <span>
                    <input type="checkbox" name="" value=""></input>
                    Study React
                </span>
            </p>
            <p className="todo_item">
                <span>
                    <input type="checkbox" name="" value=""></input>
                    Study Android
                </span>
            </p>
            <p className="todo_item">
                <span>
                    <input type="checkbox" name="" value=""></input>
                    Exercise
                </span>
            </p>
        </div>
    )
}

export default MainContent;
