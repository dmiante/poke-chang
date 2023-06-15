import { useEffect, useState } from 'react'

export const useFetchPokemon = ({ url }) => {
  const [dataPokemon, setDataPokemon] = useState()

  useEffect(() => {
    const fetchPokemon = async () => {
      const resp = await fetch(url)
      if (!resp.ok) {
        const error = new Error('Error HTTP: ' + resp.status)
        throw error
      }
      const data = await resp.json()
      if (!data) return null
      setDataPokemon(data)
    }
    fetchPokemon()
  }, [url])

  return { dataPokemon }
}
