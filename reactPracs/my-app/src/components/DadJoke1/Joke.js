import React, { Component } from 'react';
import "./Joke.css"
class Joke extends Component {
    getColor() {
        if (this.props.vote >= 10) {
            return "#4CAF50";
        } else if (this.props.vote >= 8) {
            return "#8BC34A";
        } else if (this.props.vote >= 5) {
            return "#CDDC39";
        } else if (this.props.vote >= 3) {
            return "#FFC107";
        } else if (this.props.vote >= 0) {
            return "#FF9800";
        } else {
            return "#f44336";
        }
    }

    render() {
        return (
            <div className="joke-each-item">
                <div className="joke-vote-btn">
                    <i className="fas fa-arrow-up" onClick={this.props.upVote}></i>
                    <span style={{borderColor: this.getColor()}} className="joke-vote-value">{this.props.vote}</span>
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