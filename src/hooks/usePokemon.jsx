import { useContext, useEffect, useState } from 'react'
import PokemonContext from '../context/PokemonContext'

export function usePokemon ({ url }) {
  const { allPokemon, setAllPokemon } = useContext(PokemonContext)
  const [dataPokemon, setDataPokemon] = useState(null)
  const [loading, setLoading] = useState(false)

  // fetch url pokemon detail
  useEffect(() => {
    async function fetchPokemon () {
      try {
        setLoading(true)
        const resp = await fetch(url)
        const data = await resp.json()
        if (!data) return null
        setDataPokemon(data)
        setLoading(false)
      } catch (error) {
        throw new Error(error)
      }
    }
    fetchPokemon()
  }, [url])

  return {
    allPokemon,
    setAllPokemon,
    dataPokemon,
    loading
  }
}
