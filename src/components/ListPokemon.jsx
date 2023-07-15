import { useContext } from 'react'
import PokemonContext from '../context/PokemonContext'

import { PokemonItem } from './PokemonItem'
import { SearchBar } from './SearchBar'
import { LoaderGrid } from './LoaderItem'
import { FilterType } from './FilterType'

export function ListPokemon () {
  const { filteredPokemon, loadingAllPokemon, page, setPage } = useContext(PokemonContext)

  function handleLoadMore () {
    setPage(page + 1)
  }

  return (
    <>
      <h1 className='mt-10 text-6xl font-bold tracking-widest text-center uppercase font-flexo animate-fade-down animate-once animate-ease-in-out'><span className='text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-orange-500'>PokeChang</span></h1>
      <section className='flex flex-col items-center justify-center max-w-full gap-4 p-5 lg:flex lg:flex-row lg:gap-5 lg:items-end lg:w-full'>
        <SearchBar />
        <FilterType />
      </section>
      <div className='flex flex-col max-w-3xl p-5 mx-auto lg:max-w-full animate-fade-up animate-once animate-duration-[3000ms] animate-delay-500'>
        <ul className='grid items-start grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'>
          {
            filteredPokemon && loadingAllPokemon
              ? (
                <LoaderGrid />
                )
              : (
                  filteredPokemon?.slice(0, (page - 1) * 12 + 12)
                    .map((pokemon) => {
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
          className='px-6 py-2 mx-5 my-10 text-white rounded-lg bg-sky-500 font-flexo hover:bg-sky-800'
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </>
  )
}
