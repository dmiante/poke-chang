import { useEffect, useState } from 'react'
import { getPokeByName } from '../services/getPokeByName'

export function usePokeByName ({ name }) {
  const [pokemon, setPokemon] = useState([])

  // load pokemon
  useEffect(() => {
    async function loadPokemon () {
      try {
        const newPoke = await getPokeByName({ name })
        const { data } = newPoke
        setPokemon(data)
      } catch (error) {
        throw new Error(error)
      }
    }
    loadPokemon()
  }, [name, setPokemon])

  return { pokemon }
}
