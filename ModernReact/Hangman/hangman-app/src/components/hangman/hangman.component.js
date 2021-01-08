import React, { Component } from 'react';
import './hangman.style.css';
import img0 from '../../0.jpg';
import img1 from '../../1.jpg';
import img2 from '../../2.jpg';
import img3 from '../../3.jpg';
import img4 from '../../4.jpg';
import img5 from '../../5.jpg';
import img6 from '../../6.jpg';


class Hangman extends Component {
    static defaultProps = {
        imgs: [img0, img1, img2, img3, img4, img5, img6]
    }
    constructor(props) {
        super(props);
        this.state = {
            numberWrong: 0
        ,   guessedWord: new Set()
        ,   answer: 'apple'
        }
    }

    guessword() {
        return this.state.answer.split("").map( eachLetter => (this.state.guessedWord.has(eachLetter)? eachLetter: "_") )
    }

    handleGuess = (event) => {
        let letter = event.target.value;
        this.setState( (prevState) => ({
            guessedWord: prevState.guessedWord.add(letter)
        ,   numberWrong: prevState.numberWrong + (prevState.answer.includes(letter) ? 0: 1)
        }));
    }

    generateButtons() {
        return "abcdefghigklmnopqrskuvwxyz".split("").map( eachLetter => (
            <button 
                value={eachLetter} 
                disabled={this.state.guessedWord.has(eachLetter)}
                onClick={this.handleGuess}
            >{eachLetter}
            </button>
        ))
    }

    render() {
        return (
            <div>
                <h1>Hangman</h1>
                <img src={this.props.imgs[this.state.numberWrong]}/>
                <p className='Hangman-word'>{this.guessword()}</p>
                <p>{this.generateButtons()}</p>
            </div>
        )
    }
}

export default Hangman;
