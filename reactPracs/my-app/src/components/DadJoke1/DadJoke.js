import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Joke from './Joke'
import axios from "axios";
import "./DadJoke.css"
class DadJoke extends Component {
    static defaultProps = {
        startingJokeNum: 10
    };

    constructor(props) {
        super(props);
        this.state = {
            joke: null
        ,   jokes: JSON.parse(window.localStorage.getItem('jokes') || "[]")
        };
        this.handleVote = this.handleVote.bind(this);
        this.generateData = this.generateData.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.seenJoke = new Set(this.state.jokes.map(s => s.eachJokeData));
        console.log(this.seenJoke);
    }
    
    componentDidMount() {
        if (this.state.jokes.length === 0) {
            this.generateData();
        }
    }

    async generateData() {
        let jokes = [];
        while (jokes.length < this.props.startingJokeNum) {
            const eachJoke = await axios.get('https://icanhazdadjoke.com/',
            {
                headers: {
                    Accept: "application/json"
                }
            }
            );
            let eachJokeData = eachJoke.data.joke;
            if (!this.seenJoke.has(eachJokeData)) {
                jokes.push({id:uuidv4(), eachJokeData: eachJokeData, vote: 0});
            } else {
                console.log("Found Duplicate!");
                console.log(eachJokeData);
            }
            
        }
        console.log(jokes);
        this.setState(prevState => ({
            jokes: [...prevState.jokes, ...jokes]
        }));
        window.localStorage.setItem('jokes', JSON.stringify(jokes));
    }

    handleAdd() {
        this.generateData();
    }

    handleVote(id, delta) {
        // deleta represent number of vote
        this.setState(prevState => ({
            jokes: prevState.jokes.map(eachJoke => 
                eachJoke.id === id? {...eachJoke, vote: eachJoke.vote + delta }: eachJoke
            )
        }),
            // callback function for setState
            () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
        );
    }

    render() {
        return (
            <div className="jokeList">
                <div className="jokeList-sidebar">
                    <h1 className="jokeList-title">Dad Jokes</h1>
                    <img src="https://images.unsplash.com/photo-1562037283-5346e96c7ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1305&q=80" alt=""/>
                    <button onClick={this.handleAdd}>New Joke</button>
                </div>
                
                <div className="jokeList-joke">
                    {this.state.jokes.map(eachJoke => (
                        <Joke
                            key={eachJoke.id}
                            joke={eachJoke.eachJokeData}
                            vote={eachJoke.vote}
                            upVote={()=>this.handleVote(eachJoke.id, 1)}
                            downVote={()=>this.handleVote(eachJoke.id, -1)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default DadJoke;