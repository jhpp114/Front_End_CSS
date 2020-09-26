import React, {Component} from 'react'
import Pokecard from './Pokecard'
import './Pokecard.css'
class PokeDex extends Component {
    constructor() {
        super();
        this.state = {
            pokeData: []
        };
    }

    async componentDidMount() {
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
        console.log(this.state.pokeData);
        console.log(this.state.pokeData.length);
        return (
            <div>
                <h1 className="pokedex-header">Poke Index</h1>
                <main className="pokedex-container">{
                this.state.pokeData.map ((eachPoketmon) => {
                const id = eachPoketmon.id;
                const name = eachPoketmon.name;
                const type = eachPoketmon.type;
                const base_experience = eachPoketmon.base_experience;
                const imgsrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                    return(
                        <Pokecard
                        key={id}
                        id={id}
                        name={name}
                        type={type}
                        base_experience={base_experience}
                        imgsrc={imgsrc}/>
                    )
                })}
                </main>
            </div>
        )
    }
}
export default PokeDex