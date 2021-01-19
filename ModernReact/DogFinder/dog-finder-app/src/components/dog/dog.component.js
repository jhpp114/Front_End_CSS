import React, { Component } from 'react';
import './dog.style.css';
import { Link } from 'react-router-dom';

class Dog extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello Dog Page</h1>
                <p>Name: {this.props.targetDog.name}</p>
                <img className='dog-img' src={this.props.targetDog.src} alt={this.props.targetDog.name}/>
                <p>Age: {this.props.targetDog.age}</p>
                <div>
                    {
                        this.props.targetDog.facts.map( (eachFacts, index) => (
                            <p key={index}>{eachFacts}</p>
                        ))
                    }
                </div>
                <p>
                    <Link to='/dogs'>Go Back</Link>
                </p>
            </div>
        )
    }
}

export default Dog;
