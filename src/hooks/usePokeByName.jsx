import { useEffect, useState } from 'react'
import { getPokeByName } from '../services/getPokeByName'

export function usePokeByName ({ name }) {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)

  // load pokemon
  useEffect(() => {
    async function loadPokemon () {
      try {
        setLoading(true)
        const newPoke = await getPokeByName({ name })
        // console.log(newPoke?.data)
        const { data } = newPoke
        // console.log(data)
        setPokemon(data)
        setLoading(false)
      } catch (error) {
        throw new Error(error)
      }
    }
    loadPokemon()
  }, [name, setPokemon])

  return { pokemon, loading }
}
