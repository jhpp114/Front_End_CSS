import React from 'react'
import './Pokecard.css' 
const Pokecard = (props) => {
    console.log(props);
    // const name = props..name;
    // console.log(name);
    return (
        <div className="pokecard-div">
            <h2 className="pokecard-header">
                {props.name}
            </h2>
            <div>
                <img src={props.imgsrc} alt={props.alt}/>
            </div>
            <p>{props.type}</p>
            <p>{props.base_experience}</p>
        </div>
    )
}
export default Pokecard