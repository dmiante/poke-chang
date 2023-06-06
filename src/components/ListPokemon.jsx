import { useState, useEffect } from 'react'
import { getAllPokemon } from '../services/getPokemon'
import { PokemonItem } from './PokemonItem'

export function ListPokemon () {
  const [allPokemon, setAllPokemon] = useState([])

  const loadPokemon = async () => {
    try {
      const newPoke = await getAllPokemon()
      setAllPokemon(newPoke)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    loadPokemon()
  }, [])

  return (
    <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-5 mx-2'>
      {
        allPokemon?.map((pokemon) => {
          return (
            <PokemonItem key={pokemon.name} {...pokemon} />
          )
        })
      }
    </ul>
  )
}
