import React, { useEffect, useState } from 'react'
import { getAllPokemon } from '../services/getAllPokemon'
import { getAllTypePokemon } from '../services/getAllTypePokemon'
import { getTypePokemon } from '../services/getTypePokemon'
import { getGlobalPokemon } from '../services/getGlobalPokemon'

const PokemonContext = React.createContext({})

const INITIAL_PAGE = 0

export function PokemonProvider ({ children }) {
  const [allPokemon, setAllPokemon] = useState([])
  const [loadingAllPokemon, setLoadingAllPokemon] = useState(false)
  const [defaultPokemon, setDefaultPokemon] = useState([])
  const defaultState = {
    name: 'all',
    url: defaultPokemon
  }
  const [page, setPage] = useState(INITIAL_PAGE)
  const [listTypes, setListTypes] = useState([defaultState])
  const [selectedType, setSelected] = useState(['all'])

  // console.log(selectedType)
  // console.log(allPokemon)

  // load list of pokemon with selected type
  const loadSelectedTypePokemon = () => {
    try {
      if (selectedType !== 'all') {
        getTypePokemon({ selectedType })
          .then(data => {
            const { pokemon } = data.data
            console.log(pokemon)
            const mappedAllPokeType = pokemon.map(typeUrl => typeUrl.pokemon)
            // console.log(mappedAllPokeType)
            // console.log(defaultPokemon)
            setAllPokemon(mappedAllPokeType.slice(0, 9))
          })
      } else {
        setAllPokemon(defaultPokemon)
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
          // const typesNames = ['all', ...results.map(name => name.name)]
          // console.log(['all', ...results.map(name => name.name)])
          // const typesNames = results.map(name => name.name)
          console.log([...listTypes, ...results])
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
          // console.log(results.slice(0, 10))
          setAllPokemon(results.slice(0, 10))
          setDefaultPokemon(results.slice(0, 10))
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
