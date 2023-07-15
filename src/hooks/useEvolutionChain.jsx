import { useEffect, useState } from 'react'
import { getEvolutionChain } from '../services/getEvolutionChain'

export default function useEvolutionChain ({ name }) {
  const [evolution, setEvolution] = useState({})
  const [loadingEvolution, setLoadingEvolution] = useState(false)

  // load pokemon evolution
  useEffect(() => {
    async function loadPokemon () {
      try {
        setLoadingEvolution(true)
        const newPoke = await getEvolutionChain({ name })
        setEvolution(newPoke)
        setLoadingEvolution(false)
      } catch (error) {
        throw new Error(error)
      }
    }
    loadPokemon()
  }, [name, setEvolution])

  return { evolution, loadingEvolution }
}
