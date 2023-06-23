import { useContext, useEffect, useState } from 'react'
import { getAllPokemon } from '../services/getAllPokemon'
import PokemonContext from '../context/PokemonContext'

const INITIAL_PAGE = 0

export function usePokemon () {
  const [page, setPage] = useState(INITIAL_PAGE)
  const { allPokemon, setAllPokemon } = useContext(PokemonContext)
  const [loadingAllPokemon, setLoadingAllPokemon] = useState(false)

  // load first pokemon
  useEffect(() => {
    const loadPokemon = () => {
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
    loadPokemon()
  }, [setAllPokemon])

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

  return { allPokemon, setAllPokemon, page, setPage, loadingAllPokemon }
}
