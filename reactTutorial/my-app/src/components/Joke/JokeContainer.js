import React from 'react'
import Joke from './Joke'
import jokeData from './JokeData'

const JokeContainer = () => {
    const jokeComponenet = jokeData.map( (jokes) => {
        return (
            <Joke 
                key = {jokes.id}
                question = {jokes.question}
                punchline = {jokes.punchline}
            />
        )
    });
    return (
        <div>
            {jokeComponenet}
        </div>
    )
}

export default JokeContainer