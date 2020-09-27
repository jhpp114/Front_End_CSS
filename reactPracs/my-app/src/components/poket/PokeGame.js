import React, {Component} from 'react'
import ID_Converter, {Random_Assign} from './poketUtil'
class PokeGame extends Component {
    constructor() {
        super();
        this.state = {
            pokeData: []
        }
    }
    
    componentDidMount() {
        const PrefixedPokemom = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62}
        ,   {id: 7, name: 'Squirtle', type: 'water', base_experience: 63}
        ,   {id: 11, name: 'Metapod', type: 'bug', base_experience: 72}
        ,   {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178}
        ,   {id: 25, name: 'Pikachu', type: 'eletric', base_experience: 112}
        ,   {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95}
        ,   {id: 94, name: 'Gengar', type: 'poison', base_experience: 225}
        ,   {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ];
        this.setState({
            pokeData : PrefixedPokemom
        })
    }
    render() {
        let randomPokemonData = this.state.pokeData;
        let returnData = Random_Assign(this.state.pokeData);
        console.log(returnData);
        return (
            
            <div>
                {Random_Assign(randomPokemonData)}
            </div>
        )
    }
}
export default PokeGame