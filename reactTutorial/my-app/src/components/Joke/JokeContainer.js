import React from 'react'
import Joke from './Joke'

const JokeContainer = () => {
    return (
        <div>
            <Joke
                joke= {{
                    question: "My wife told me to stop acting like a flamingo."
                ,   punchline: "I had to put my foot down."
                }}
            />
            
            <Joke
                joke= {{
                    question:""
                ,   punchline: "Because he doesn’t want to be spotted."
                }}
            />
        </div>
    )
}

export default JokeContainer