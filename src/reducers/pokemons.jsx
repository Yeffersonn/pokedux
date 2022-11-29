import { fromJS } from "immutable";
import { SET_FAVORITE, SET_POKEMONS } from "../actions/types"

const initialState = fromJS({
    pokemons: [],
});

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS: return state.setIn(['pokemons'], fromJS(action.payload) )
        case SET_FAVORITE:
            /* const newPokemonList = [...state.pokemons]; */
            const currentPokemonIndex =
                state.get('pokemons').findIndex(pokemon =>
                    pokemon.get('id') === action.payload.pokemonId)
            if (currentPokemonIndex < 0) {
                return state;
            } else {
                // const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite') 
                const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite']) 
                return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite)
            }
        default: return state;
    }
}

