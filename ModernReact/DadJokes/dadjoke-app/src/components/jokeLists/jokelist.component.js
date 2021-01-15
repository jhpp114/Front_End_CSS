import React, { Component } from 'react';
import './jokelist.style.css';
import axios from 'axios';

class JokeList extends Component {
    static defaultProps = {
        numberOfJokesEachTime: 10
    };

    constructor(props) {
        super(props);
        this.state = {
            jokes: []
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
                console.log(response.data);
                let newJoke = response.data.joke;
                // if it does not exist
                if (!this.hasSeen.has(newJoke)) {
                    newJokes.push({
                        joke: response.data.joke
                    });
                } else {
                    console.log("Duplicate Joke Appeared");
                    console.log(newJoke);
                    console.log("=======================");
                }
            }
            this.setState(prevState => ({
                jokes: [...prevState.jokes, newJokes]
            }));
        } catch (error) {
            alert(error);
        }
    }

    render() {
        return (
            <div className='jokelist-container'>
                <div className='jokelist-leftside'>
                    <h1>Dad's Jokes</h1>
                    <div>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default JokeList;
