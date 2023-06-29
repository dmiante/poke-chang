import React, { useEffect, useState } from 'react'
import { getAllPokemon } from '../services/getAllPokemon'
import { getAllTypePokemon } from '../services/getAllTypePokemon'
import { getTypePokemon } from '../services/getTypePokemon'

const PokemonContext = React.createContext({})

const INITIAL_PAGE = 0

export function PokemonProvider ({ children }) {
  const [allPokemon, setAllPokemon] = useState([])
  const [loadingAllPokemon, setLoadingAllPokemon] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [listTypes, setListTypes] = useState([])
  const [selectedType, setSelected] = useState(['Select type'])

  // console.log(selectedType)
  // console.log(allPokemon)

  // load list of pokemon with selected type
  const loadSelectedTypePokemon = () => {
    try {
      getTypePokemon({ selectedType })
        .then(data => {
          const { pokemon } = data.data
          const mappedAllPokeType = pokemon.map(typeUrl => typeUrl.pokemon)
          console.log(mappedAllPokeType)
          setAllPokemon(mappedAllPokeType)
        })
    } catch (error) {
      throw new Error(error)
    }
  }

  // load select with pokemon types
  const loadTypePokemon = () => {
    try {
      getAllTypePokemon()
        .then(data => {
          const { results } = data.data
          const typesNames = results.map(name => name.name)
          setListTypes(typesNames)
        })
    } catch (error) {
      throw new Error(error)
    }
  }

  // load all pokemon
  const loadAllPokemon = () => {
    try {
      setLoadingAllPokemon(true)
      getAllPokemon()
        .then(data => {
          const { results } = data.data
          setAllPokemon(results)
          setLoadingAllPokemon(false)
        })
    } catch (error) {
      throw new Error(error)
    }
  }

  // next page
  useEffect(() => {
    async function nextPage () {
      try {
        const newPage = await getAllPokemon({ page })
        const { data } = newPage
        const loadMore = [...allPokemon, ...data.results]
        setAllPokemon(loadMore)
      } catch (error) {
        console.log(error)
      }
    }
    nextPage()
  }, [page])

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
        setSelected
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
export default PokemonContext
