import { useEffect, useState } from 'react'
import { getEvolutionChain } from '../services/getEvolutionChain'

export default function useEvolutionChain ({ name }) {
  const [evolution, setEvolution] = useState({})
  const [loading, setLoading] = useState(false)

  // load pokemon
  useEffect(() => {
    async function loadPokemon () {
      try {
        setLoading(true)
        const newPoke = await getEvolutionChain({ name })
        setEvolution(newPoke)
        setLoading(false)
      } catch (error) {
        throw new Error(error)
      }
    }
    loadPokemon()
  }, [name, setEvolution])

  return { evolution, loading }
}
