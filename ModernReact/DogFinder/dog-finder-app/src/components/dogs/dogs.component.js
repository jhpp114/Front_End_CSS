import React, { Component } from 'react';
import './dogs.style.css';
import { Link } from 'react-router-dom';
class Dogs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Dogssss</h2>
                <div className='dogs'>
                    
                    {
                        this.props.allDogs.map( (eachDog) => (
                            <Link to={`/dogs/${eachDog.name}`}>
                                <div className='dogs-dog' key={eachDog.name}>
                                    <h3>{eachDog.name}</h3>
                                    <img className='dogs-images' src={eachDog.src} alt={eachDog.name}/>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}


export default Dogs;