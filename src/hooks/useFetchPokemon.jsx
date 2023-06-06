import { useEffect, useState } from 'react'

export const useFetchPokemon = ({ url }) => {
  const [dataPokemon, setDataPokemon] = useState()

  const fetchPokemon = async () => {
    if (url) {
      const resp = await fetch(url)
      const data = await resp.json()
      setDataPokemon(data)
    }
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return { dataPokemon }
}
