import React, { Component } from 'react';
import './routerPattern.style.css';


class RouterPattern extends Component {
    render() {
        const name = this.props.match.params.name;
        const url = `https://source.unsplash.com/1600x900/?${name}`;
        return (
            <div>
                <h1>{name}</h1>
                <img className='searchedImage' src={url} alt=""/>
            </div>
        )
    }
}

export default RouterPattern;
