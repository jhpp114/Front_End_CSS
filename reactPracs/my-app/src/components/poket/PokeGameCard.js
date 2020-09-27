import React from 'react'
import './Pokecard.css'
const PokeGameCard = (props) => {
    return (
        <div className="pokecard-div">
            <h2 className="pokecard-header">
                {props.name}
            </h2>
            <div>
                <img src={props.image} alt={props.alt}/>
            </div>
            <p>{props.type}</p>
            <p>{props.base_experience}</p>
        </div>    
    )
}
export default PokeGameCard
