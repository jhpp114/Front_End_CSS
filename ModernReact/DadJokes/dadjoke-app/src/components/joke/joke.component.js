import React, { Component } from 'react';
import './joke.style.css';

class Joke extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='joke'>
                <div className='joke-vote'>
                    <i className="far fa-thumbs-up" onClick={this.props.upVote}></i>
                    <span className='joke-each-vote'>{this.props.vote}</span>
                    <i className="far fa-thumbs-down" onClick={this.props.downVote}></i>
                </div>
                <div className='joke-jokeitem'>
                    {this.props.joke}
                </div>
                <div className='joke-emoji-container'>
                    <i className="joke-emoji far fa-grin-squint-tears"></i>
                </div>
            </div>
        )
    }
}

export default Joke;
