export function SearchBar () {
  return (
    <>
      <label htmlFor='SearchPokemon' className='sr-only'> Search Pokemon </label>
      <div className='mx-auto flex flex-col max-w-7xl w-fit mt-5'>
        <label htmlFor='search' className='font-flexo font-normal text-lg'>Search for a pokemon by name or using its National Pokedex number</label>
        <div className='relative flex items-center mt-2'>
          <span className='absolute'>
            <img className='w-6 h-6 mx-3 text-gray-400 dark:text-gray-500' src='../src/assets/pokeball.svg' alt='pokeballSearch' />
          </span>

          <input
            type='search'
            placeholder='Name or Number. Ex: Ditto, Abra, Pikachu...'
            className='block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
          />
        </div>
      </div>
    </>
  )
}
