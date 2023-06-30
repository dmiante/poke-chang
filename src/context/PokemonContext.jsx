import React, { useEffect, useState } from 'react'
import { getAllTypePokemon } from '../services/getAllTypePokemon'
import { getGlobalPokemon } from '../services/getGlobalPokemon'

const PokemonContext = React.createContext({})

const INITIAL_PAGE = 1

const defaultState = {
  name: 'all',
  url: 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'
}

export function PokemonProvider ({ children }) {
  const [allPokemon, setAllPokemon] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [loadingAllPokemon, setLoadingAllPokemon] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [listTypes, setListTypes] = useState([defaultState])
  const [selectedType, setSelected] = useState(defaultState)

  // load list of pokemon with selected type
  const loadSelectedTypePokemon = async () => {
    try {
      if (selectedType.name === 'all') {
        setFilteredPokemon(allPokemon)
      } else {
        const resp = await fetch(selectedType.url)
        const data = await resp.json()
        const { pokemon } = data
        const mappedAllPokeType = pokemon.map(typeUrl => typeUrl.pokemon)
        setPage(1)
        setFilteredPokemon(mappedAllPokeType)
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  // load all pokemon types
  const loadTypePokemon = () => {
    try {
      getAllTypePokemon()
        .then(data => {
          const { results } = data.data
          setListTypes([...listTypes, ...results])
        })
    } catch (error) {
      throw new Error(error)
    }
  }

  // load all pokemon
  const loadAllPokemon = () => {
    try {
      setLoadingAllPokemon(true)
      getGlobalPokemon()
        .then(data => {
          const { results } = data.data
          setAllPokemon(results)
          setFilteredPokemon(results)
          setLoadingAllPokemon(false)
        })
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    loadAllPokemon()
  }, [])

  useEffect(() => {
    loadTypePokemon()
  }, [])

  useEffect(() => {
    loadSelectedTypePokemon()
  }, [selectedType])

  return (
    <PokemonContext.Provider
      value={{
        allPokemon,
        setAllPokemon,
        loadingAllPokemon,
        page,
        setPage,
        listTypes,
        selectedType,
        setSelected,
        filteredPokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
export default PokemonContext
