import React from "react"

function RenderQuestion(prop) {
    return (
        <div>
            <p>Question: {prop.question}</p>
            <p>Answer: {prop.punch_line}</p>
        </div>
    )    
}

export default RenderQuestion;
