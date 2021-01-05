import React from 'react';
import './pokedex.style.css';
import Pokecard from '../pokecard/pokecard.component';

const Pokedex = (props) => {
    console.log(props.pokemons);
    return (
        <div className='pokedex'>
            <h1 className='pokedex-title'>Pokedex</h1>
            <div className='pokedex-data'>
                {
                    props.pokemons.map( ({...pokemonData}, index) => (
                        <Pokecard key={index} {...pokemonData}/>
                    ))
                }
            </div>
        </div>
    )
};

export default Pokedex;
