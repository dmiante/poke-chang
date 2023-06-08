import { useContext, useEffect, useState } from 'react'
import { getAllPokemon } from '../services/getPokemon'
import PokemonContext from '../context/PokemonContext'

const INITIAL_PAGE = 0

export function usePokemon () {
  const [page, setPage] = useState(INITIAL_PAGE)
  const { pokemon, setPokemon } = useContext(PokemonContext)

  // load first pokemon
  useEffect(() => {
    async function loadPokemon () {
      try {
        const newPoke = await getAllPokemon()
        const { data } = newPoke
        setPokemon(data.results)
      } catch (error) {
        throw new Error(error)
      }
    }
    loadPokemon()
  }, [setPokemon])

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

  return { pokemon, setPokemon, page, setPage }
}
