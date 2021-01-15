import React, { Component } from 'react';
import './joke.style.css';

class Joke extends Component {
    /*
        LISTS OF COLORS
        #4CAF50
        #8BC34A
        #CDDC39
        #FFEB3B
        #FFC107
        #FF9800
        #F44336
    */
    getColor() {
        if (this.props.vote >= 15) {
            return "#4CAF50";
        } else if (this.props.vote >= 12) {
            return "#8BC34A";
        } else if (this.props.vote >= 9) {
            return "#CDDC39";
        } else if (this.props.vote >= 6) {
            return "#FFEB3B";
        } else if (this.props.vote >= 3) {
            return "#FFC107";
        } else if (this.props.vote >= 0) {
            return "#FF9800";
        } else {
            return "#F44336";
        }
    }

    /*
            <i class="far fa-grin-squint-tears"></i>
            <i class="fas fa-grin-squint"></i>
            <i class="fas fa-laugh-beam"></i>
            <i class="far fa-grin-beam"></i>
            <i class="fas fa-grin-wink"></i>
            <i class="far fa-angry"></i>
            <i class="far fa-tired"></i>
        */
    getEmoji() {
        if (this.props.vote >= 15) {
            return "far fa-grin-squint-tears";
        } else if (this.props.vote >= 12) {
            return "fas fa-grin-squint";
        } else if (this.props.vote >= 9) {
            return "fas fa-laugh-beam";
        } else if (this.props.vote >= 6) {
            return "far fa-grin-beam";
        } else if (this.props.vote >= 3) {
            return "fas fa-grin-wink";
        } else if (this.props.vote >= 0) {
            return "far fa-angry";
        } else {
            return "far fa-tired";
        }
    }

    render() {
        return (
            <div className='joke'>
                <div className='joke-vote'>
                    <i className="far fa-thumbs-up" onClick={this.props.upVote}></i>
                    <span style={{borderColor: this.getColor()}}  className='joke-each-vote'>{this.props.vote}</span>
                    <i className="far fa-thumbs-down" onClick={this.props.downVote}></i>
                </div>
                <div className='joke-jokeitem'>
                    {this.props.joke}
                </div>
                <div className='joke-emoji-container'>
                    <i className={`joke-emoji ${this.getEmoji()}`}></i>
                </div>
            </div>
        )
    }
}

export default Joke;
