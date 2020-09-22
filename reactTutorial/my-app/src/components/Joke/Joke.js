import React from 'react'

const Joke = (props) => {
    console.log(props.joke);
    let question = '';
    let punchline = ``;
    if (props.joke.question.length === 0) {
        question = ``;
        punchline = `Punchline: ${props.joke.punchline}`;
    } else {
        question = `Question: ${props.joke.question}`
        punchline = `Punchline: ${props.joke.punchline}`;
    }
    return (
        <ul>
            <li>
                <h3>{question}</h3>
                <p>{punchline}</p>
            </li>
        </ul>
    )
}
export default Joke