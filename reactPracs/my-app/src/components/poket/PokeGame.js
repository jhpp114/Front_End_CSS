import React, {Component} from 'react'
import ID_Converter, {Random_Assign} from './poketUtil'
import './Pokecard.css'
import PokeGameCard from './PokeGameCard'
class PokeGame extends Component {
    constructor() {
        super();
        this.state = {
            pokeData: {
                returnData1: []
            ,   returnData2: []
            }
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
        const {returnData1, returnData2} = Random_Assign(PrefixedPokemom);
        this.setState({
            pokeData : {returnData1, returnData2}
        })
    }

    render() {
        //console.log(this.state.pokeData.returnData1);
        let sum1 = 0;
        let sum2 = 0;
        if (this.state.pokeData.returnData1) {
            this.state.pokeData.returnData1.map((data1) => {
                return sum1 += data1.base_experience;
            })
        }
        if (this.state.pokeData.returnData2) {
            this.state.pokeData.returnData2.map((data2) => {
                return sum2 += data2.base_experience;
            })
        }
        return (
            <main>
                <div>
                    <h1 className={sum1 > sum2 ? 'pokecard-winner' : 'pokecard-loser'}>
                        {sum1 > sum2 ? `You are Winner ${sum1}` : `You Lose ${sum1}`}
                    </h1>
                    <div className="pokedex-container">{this.state.pokeData.returnData1.map( (data1)=> {
                        return (
                            <PokeGameCard
                                key = {data1.id}
                                name = {data1.name}
                                image = {`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${ID_Converter(data1.id)}.png`}
                                alt = "Pokemon Images"
                                type = {data1.type}
                                base_experience = {data1.base_experience}
                            />
                        )
                    })} 
                    </div>
                </div>
                <div>
                    <h1 className={sum2 > sum1 ? 'pokecard-winner' : 'pokecard-loser'}>
                        {sum2 > sum1 ? `You are Winner ${sum2}` : `You Lose ${sum2}`}
                    </h1>
                    <div className="pokedex-container">{this.state.pokeData.returnData2.map( (data1)=> {
                        return (
                            <PokeGameCard
                                key = {data1.id}
                                name = {data1.name}
                                image = {`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${ID_Converter(data1.id)}.png`}
                                alt = "Pokemon Images"
                                type = {data1.type}
                                base_experience = {data1.base_experience}
                            />
                        )
                    })} 
                    </div>
                </div>
            </main>
        )
    }
}
export default PokeGame