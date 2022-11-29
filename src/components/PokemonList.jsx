
import { PokemonCard } from "./PokemonCard";

import React from 'react'
import './PokemonList.css'

const PokemonList = ({ pokemons }) => {

    return (
        <div className="PokemonList">
            {pokemons.map( pokemon => {
                return (
                    <PokemonCard 
                        key={pokemon.id}
                        name={pokemon.name} 
                        image={pokemon.sprites.front_default}
                        types={pokemon.types}
                        id={pokemon.id}
                        favorite={pokemon.favorite}
                    />
                );
            })}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
};



export default PokemonList