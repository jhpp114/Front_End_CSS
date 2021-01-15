import React, { Component } from 'react';
import './jokelist.style.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
import Joke from '../joke/joke.component';

class JokeList extends Component {
    static defaultProps = {
        numberOfJokesEachTime: 10
    };

    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem('jokes') || "[]")
        }
        this.hasSeen = new Set(this.state.jokes.map(eachJoke => eachJoke.joke));
        this.getJokes = this.getJokes.bind(this);
    }

    componentDidMount() {
        console.log(this.state.jokes.length);
        if (this.state.jokes.length === 0) {
            this.getJokes();
        }
    }

    async getJokes() {
        try {
            console.log("Got into getJoke()");
            const jokesURL = `https://icanhazdadjoke.com`;
            let newJokes = [];
            while (newJokes.length < this.props.numberOfJokesEachTime) {
                const response = await axios.get(jokesURL, {
                    headers: {Accept: "application/json"}
                });
                // console.log(response.data);
                let newJoke = response.data.joke;
                // if it does not exist
                if (!this.hasSeen.has(newJoke)) {
                    newJokes.push({
                        id: uuidv4(),
                        joke: response.data.joke,
                        vote: 0
                    });
                } else {
                    console.log("Duplicate Joke Appeared");
                    console.log(newJoke);
                    console.log("=======================");
                }
            }
            this.setState((prevState) => ({
                jokes: [...prevState.jokes, ...newJokes]
            }))
            window.localStorage.setItem('jokes', JSON.stringify(newJokes));
        } catch (error) {
            alert(error);
        }
    }

    handleVote(id, delta) {
        this.setState( prevState => ({
            jokes: prevState.jokes.map(eachJoke => (
                eachJoke.id === id ? { ...eachJoke, vote: eachJoke.vote + delta } : eachJoke
            ))
        }), ()=> {
            window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
        })
    }

    render() {
        return (
            <div className='jokelist-container'>
                <div className='jokelist-leftside'>
                    <h1 className='jokelist-leftside-title'>Dad's Jokes</h1>
                    <div className='jokelist-leftside-icon-container'>
                        <i className='joke-list-rightside-smile far fa-grin-squint-tears'></i>
                    </div>
                    <div>
                        <button className='joke-list-rightside-btn' onClick={this.getJokes}>Get new jokes</button>
                    </div>
                </div>
                <div className='jokelist-rightside'>
                    <div>
                        {/* lists of jokes */}
                        <h3>Lists of Jokes</h3>
                        <div className='jokelist-rightside-jokelists'>
                            {
                                this.state.jokes.map( eachJoke => (
                                    <Joke
                                        key={eachJoke.id}
                                        id={eachJoke.id}
                                        joke={eachJoke.joke}
                                        vote={eachJoke.vote}
                                        upVote={() => this.handleVote(eachJoke.id, 1)}
                                        downVote={() => this.handleVote(eachJoke.id, -1)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JokeList;
