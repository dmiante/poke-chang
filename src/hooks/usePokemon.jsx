import { useContext, useEffect, useState } from 'react'
import { getAllPokemon } from '../services/getAllPokemon'
import PokemonContext from '../context/PokemonContext'

const INITIAL_PAGE = 0

export function usePokemon () {
  const [page, setPage] = useState(INITIAL_PAGE)
  const { allPokemon, setAllPokemon } = useContext(PokemonContext)

  // load first pokemon
  useEffect(() => {
    async function loadPokemon () {
      try {
        const newPoke = await getAllPokemon()
        const { data } = newPoke
        setAllPokemon(data.results)
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

  return { allPokemon, setAllPokemon, page, setPage }
}
