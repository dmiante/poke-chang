import { useState, useEffect } from 'react'
import { getAllPokemon } from '../services/getPokemon'
import { PokemonItem } from './PokemonItem'

export function ListPokemon () {
  const [allPokemon, setAllPokemon] = useState([])

  const loadPokemon = async () => {
    try {
      const newPoke = await getAllPokemon()
      const { data } = newPoke
      setAllPokemon(data)
    } catch (error) {
      throw new Error(error)
    }
  }

  const nextPage = async () => {
    const nextUrl = allPokemon.next
    try {
      const newPage = await fetch(nextUrl)
      const loadNextPage = await newPage.json()
      setAllPokemon(loadNextPage)
    } catch (error) {
      console.log(error)
    }
  }

  function handleLoadMorePokemon () {
    nextPage()
  }

  useEffect(() => {
    loadPokemon()
  }, [])

  return (
    <>
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-5 mx-2'>
        {
          allPokemon?.results
            ? (
                allPokemon?.results?.map((pokemon) => {
                  return (
                    <PokemonItem key={pokemon.name} {...pokemon} />
                  )
                })
              )
            : (
              <h2>Loading</h2>
              )
        }
      </ul>
      <button
        className='my-10 bg-sky-500 px-6 py-2 font-flexo text-white rounded-lg hover:bg-sky-800'
        onClick={handleLoadMorePokemon}
      >
        Load More
      </button>
    </>
  )
}
