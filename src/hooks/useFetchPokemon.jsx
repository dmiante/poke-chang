import { useEffect, useState } from 'react'

export const useFetchPokemon = ({ url }) => {
  const [dataPokemon, setDataPokemon] = useState(null)

  useEffect(() => {
    async function fetchPokemon () {
      try {
        const resp = await fetch(url)
        const data = await resp.json()
        if (!data) return null
        setDataPokemon(data)
      } catch (error) {
        throw new Error(error)
      }
    }
    fetchPokemon()
  }, [url])

  return { dataPokemon }
}
