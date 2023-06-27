import { useContext, useEffect, useState } from 'react'
import { getAllPokemon } from '../services/getAllPokemon'
import PokemonContext from '../context/PokemonContext'

const INITIAL_PAGE = 0

export function usePokemon () {
  const [page, setPage] = useState(INITIAL_PAGE)
  const { allPokemon, setAllPokemon } = useContext(PokemonContext)
  const [loadingAllPokemon, setLoadingAllPokemon] = useState(false)
  const [sort, setSort] = useState(false)

  // load first pokemon
  useEffect(() => {
    const loadPokemon = () => {
      try {
        setLoadingAllPokemon(true)
        getAllPokemon()
          .then(data => {
            const { results } = data.data
            const sortedPokemon = sort
              ? [...results].sort((a, b) => a.name.localeCompare(b.name))
              : results
            setAllPokemon(sortedPokemon)
            setLoadingAllPokemon(false)
          })
      } catch (error) {
        throw new Error(error)
      }
    }
    loadPokemon()
  }, [setAllPokemon, sort])

  // next page
  useEffect(() => {
    const nextPage = async () => {
      try {
        const newPage = await getAllPokemon()
        const { data } = newPage
        setPage(data.next)
      } catch (error) {
        console.log(error)
      }
    }
    nextPage()
  }, [])

  function handleSortName () {
    setSort(!sort)
  }

  return {
    allPokemon,
    setAllPokemon,
    page,
    setPage,
    loadingAllPokemon,
    handleSortName
  }
}
