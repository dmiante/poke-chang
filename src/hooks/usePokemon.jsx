import { useContext, useEffect, useState } from 'react'
import PokemonContext from '../context/PokemonContext'
import { usePalette } from 'color-thief-react'

export function usePokemon ({ url }) {
  const { allPokemon, setAllPokemon } = useContext(PokemonContext)
  const [dataPokemon, setDataPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const imgSrc = dataPokemon?.sprites?.other['official-artwork']?.front_default
  const { data } = usePalette(imgSrc, 2, 'hex', { crossOrigin: 'anonymous', quality: 10 })

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
    loading,
    data
  }
}
