import React from 'react'

const Joke = (props) => {
    // console.log(props);
    
    let question = '';
    let punchline = ``;
    if (props.question.length === 0) {
        question = ``;
        punchline = `Punchline: ${props.punchline}`;
    } else {
        question = `Question: ${props.question}`
        punchline = `Punchline: ${props.punchline}`;
    }
    return (
        <ul>
            <li key={props.id}>
                {props.id}
                <h3>{question}</h3>
                <p>{punchline}</p>
            </li>
        </ul>
    )
}
export default Joke