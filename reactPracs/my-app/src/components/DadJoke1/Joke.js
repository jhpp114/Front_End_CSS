import React, { Component } from 'react';

class Joke extends Component {
    render() {
        return (
            <div className="joke-each-item">
                <div className="joke-vote-btn">
                    <i className="fas fa-arrow-up" onClick={this.props.upVote}></i>
                    <span>{this.props.vote}</span>
                    <i className="fas fa-arrow-down" onClick={this.props.downVote}></i>
                </div>
                <div className="joke-text">
                    {this.props.joke}
                </div>
            </div>
        );
    }
}

export default Joke;