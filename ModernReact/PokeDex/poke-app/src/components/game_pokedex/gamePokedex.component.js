import React from 'react';
import Pokecard from '../pokecard/pokecard.component';
import './gamePokedex.style.css';

const GamePokedex = (props) => {
    console.log(props);
    return (
        <div className='game-pokedex'>
            {
                props.data.map( ({...pokemonData}) => (
                    <Pokecard {...pokemonData}/>
                ))
            }
        </div>
    )
}

export default GamePokedex;
