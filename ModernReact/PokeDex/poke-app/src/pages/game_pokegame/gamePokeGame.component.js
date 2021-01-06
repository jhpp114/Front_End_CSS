import React, { Component } from 'react';
import './gamePokeGame.style.css';

import { randomDistribute, addAllExperience } from '../../pokeHelper/pokeHelper';
import GamePokedex from '../../components/game_pokedex/gamePokedex.component';

class GamePokeGame extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [
                {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
                {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
                {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
                {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
                {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
                {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
                {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
                {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
            ]
        }
    }

    render() {
        const pokeArray = this.state.pokemons;
        console.log(pokeArray);
        const { pokeRandomEven, pokeRandomOdd } = randomDistribute(pokeArray);
        const pokeEvenTotal = addAllExperience(pokeRandomEven);
        const pokeOddTotal = addAllExperience(pokeRandomOdd);
        return (

            <div>
                {
                    pokeEvenTotal > pokeOddTotal? 
                    <h1 className='win'>Win {pokeEvenTotal}</h1>
                    :<h1 className='lose'>Lose {pokeEvenTotal}</h1>
                    
                }
                <div>
                    <GamePokedex data={pokeRandomEven}/>
                </div> 
                {
                    pokeEvenTotal < pokeOddTotal? 
                    <h1 className='win'>Win {pokeOddTotal}</h1>
                    :<h1 className='lose'>Lose {pokeOddTotal}</h1>
                }
                <div>
                    <GamePokedex data={pokeRandomOdd}/>
                </div>
            </div>
        )
    }
}

export default GamePokeGame;
