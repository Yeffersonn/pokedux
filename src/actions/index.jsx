
import { getPokemonDetails } from "../api";
import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from "./types";


export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload

})

/* ACTION CREATOR ESPECIAL - CON REDUX THUNK PARA SECUENCIAS ASÍNCRONAS */
/* TAMBIÉN EXISTE SAGA, UNA ALTERNATIVA A REDUX THUNK */
export const getPokemonsWithDetails =
    (pokemons = []) =>
        async (dispatch) => {
            const pokemonsDetailed = await Promise.all(
                pokemons.map((pokemon) => getPokemonDetails(pokemon))
            );

            dispatch(setPokemons(pokemonsDetailed))
        }

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload
})