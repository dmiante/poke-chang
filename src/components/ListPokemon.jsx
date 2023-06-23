import { PokemonItem } from './PokemonItem'
import { usePokemon } from '../hooks/usePokemon'
import { SearchBar } from './SearchBar'

export function ListPokemon () {
  const { allPokemon, setAllPokemon, page, setPage, loadingAllPokemon } = usePokemon()

  const nextPage = async () => {
    try {
      const newPage = await fetch(page)
      const loadNextPage = await newPage.json()
      setPage(loadNextPage.next)
      const loadMore = [...allPokemon, loadNextPage.results].flat()
      setAllPokemon(loadMore)
    } catch (error) {
      console.log(error)
    }
  }

  function handleLoadMorePokemon () {
    nextPage()
  }

  return (
    <>
      <SearchBar />
      <div className='flex flex-col justify-center max-w-3xl m-auto lg:max-w-7xl'>
        {/* <ul className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'> */}
        <ul className='grid items-start grid-cols-1 gap-10 p-5 md:p-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {
            allPokemon && loadingAllPokemon
              ? (
                <h2 className='text-5xl'>Loading</h2>
                )
              : (
                  allPokemon.map((pokemon) => {
                    return (
                      <PokemonItem
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                      />
                    )
                  })
                )
          }
        </ul>
        <button
          className='px-6 py-2 my-10 text-white rounded-lg bg-sky-500 font-flexo hover:bg-sky-800'
          onClick={handleLoadMorePokemon}
        >
          Load More
        </button>
      </div>
    </>
  )
}
