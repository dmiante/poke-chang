import PokemonContext from '../context/PokemonContext'
import { PokemonItem } from './PokemonItem'
import { SearchBar } from './SearchBar'
import { useContext } from 'react'

export function ListPokemon () {
  const { allPokemon, loadingAllPokemon, page, setPage } = useContext(PokemonContext)

  function handleLoadMore () {
    setPage(page + 1)
  }

  return (
    <>
      <SearchBar />
      <div className='absolute flex flex-col justify-center max-w-3xl m-auto lg:max-w-7xl'>
        <ul className='grid items-start grid-cols-1 gap-10 p-5 md:p-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {
            allPokemon && loadingAllPokemon
              ? (
                <h2 className='text-5xl'>Loading</h2>
                )
              : (
                  allPokemon?.map((pokemon) => {
                    return (
                      <PokemonItem
                        key={pokemon.url}
                        url={pokemon.url}
                      />
                    )
                  })
                )
          }
        </ul>
        <button
          className='px-6 py-2 my-10 text-white rounded-lg bg-sky-500 font-flexo hover:bg-sky-800'
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </>
  )
}
