import { Link } from 'react-router-dom'
import { useFetchPokemon } from '../hooks/useFetchPokemon'

export function PokemonItem ({ url }) {
  const { dataPokemon } = useFetchPokemon({ url })

  return (
    <>
      {
        dataPokemon
          ? (
            <Link
              to={`/${dataPokemon.name}`}
              className='flex flex-col items-center cursor-pointer hover:bg-slate-100'
            >
              <img
                loading='lazy'
                src={dataPokemon.sprites.other['official-artwork'].front_default}
                alt={dataPokemon.name}
                className='w-3/4'
              />
              <h2
                className='text-3xl font-normal capitalize font-flexo'
              >
                {dataPokemon.name}
              </h2>
            </Link>
            )
          : <p>Loading...</p>
      }
    </>
  )
}
