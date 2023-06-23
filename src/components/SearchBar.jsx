import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function SearchBar () {
  const [namePokemon, setNamePokemon] = useState('')
  const navigate = useNavigate()

  function handleSubmit (e) {
    e.preventDefault()
    navigate(`/${namePokemon}`)
  }

  function handleSearch (event) {
    setNamePokemon(event.target.value)
  }

  return (
    <>
      <div className='my-10'>
        <h1 className='text-6xl font-normal text-center font-flexo'>PokeChang</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='SearchPokemon' className='sr-only'> Search Pokemon </label>
          <div className='flex flex-col max-w-2xl mx-auto mt-5 xl:max-w-2xl'>
            <label htmlFor='search' className='text-lg font-normal font-flexo'>Search for a pokemon by name or using its National Pokedex number</label>
            <div className='relative flex items-center mt-2'>
              <span className='absolute'>
                <img className='w-6 h-6 mx-3 text-gray-400 dark:text-gray-500' src='../src/assets/pokeball.svg' alt='pokeballSearch' />
              </span>
              <input
                type='search'
                placeholder='Name or Number. Ex: Ditto, Abra, Pikachu...'
                className='block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-full pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                onChange={handleSearch}
                value={namePokemon}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
