
import { Input } from "antd";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual } from "react-redux";
import { useSelector } from "react-redux";
import { setPokemonsFiltered } from "../slices/dataSlice";

const Searcher = () => {

    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.data.pokemons,shallowEqual)

    const handleValue = ({target}) => {
        const pokemonsFiltered = pokemons.filter(
            pokemon => pokemon.name.includes(target.value.toLowerCase()));
        
        dispatch(setPokemonsFiltered(pokemonsFiltered))
        
    } 




    return (
        <Fragment>
            <Input.Search 
                placeholder="Buscar..." 
                style={{marginBottom: 10}} 
                onChange={handleValue}  
                />
        </Fragment>
    );
}

export { Searcher }