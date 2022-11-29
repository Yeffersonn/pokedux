import { Col, Spin } from 'antd'
import './App.css'
import logo from './static/logo.svg'
import PokemonList from './components/PokemonList'
import { Searcher } from './components/Searcher'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { shallowEqual } from 'react-redux'
import { fetchPokemonsWithDetails } from './slices/dataSlice'

function App() {

  const pokemons = useSelector(state => 
    state.data.pokemonsFiltered ? state.data.pokemonsFiltered : state.data.pokemons 
    ,shallowEqual)
    // getIn(['data','pokemons'], shallowEqual).toJS()
    
  const loading = useSelector(state => state.ui.loading)
    // getIn(['ui','loading'])
  const dispatch = useDispatch();

  useEffect(() => {
    /* dispatch(setLoading(true));
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    }; */
    
    /* fetchPokemons(); */

    dispatch(fetchPokemonsWithDetails())

  }, [])

  return (
    <div className='App'>
      <Col span={4} offset={10} >
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ?
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
        :
        <PokemonList pokemons={pokemons} />
      }
    </div>
  )
}



export default App;
