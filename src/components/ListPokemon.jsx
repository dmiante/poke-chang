import { PokemonItem } from './PokemonItem'
import { usePokemon } from '../hooks/usePokemon'

export function ListPokemon () {
  const { pokemon, setPokemon, page, setPage } = usePokemon()

  const nextPage = async () => {
    try {
      const newPage = await fetch(page)
      const loadNextPage = await newPage.json()
      setPage(loadNextPage.next)
      const loadMore = [...pokemon, loadNextPage.results].flat()
      setPokemon(loadMore)
    } catch (error) {
      console.log(error)
    }
  }

  function handleLoadMorePokemon () {
    nextPage()
  }

  return (
    <>
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-5 mx-2'>
        {
          pokemon
            ? (
                pokemon?.map((pokemon) => {
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
