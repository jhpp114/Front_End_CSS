import React from 'react';
import './pokecard.style.css';
import { addZeros } from '../../pokeHelper/pokeHelper';

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png
//https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png
const Pokecard = ({id, name, type, base_experience}) => {
    // const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const pokeNicerImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addZeros(id)}.png`;
    return (
        <div className='pokecard'>
            <h2 className='pokecard-name'>{name}</h2>
            {/* <div>
                <img className='pokecard-img' src={pokeImage}/>
            </div> */}
            <div>
                <img className='pokecard-img' src={pokeNicerImg}/>
            </div>
            <span className='pokecard-type'>{type}</span>
            <p className='pokecard-experience'>{base_experience}</p>
        </div>
    )
}

export default Pokecard;
