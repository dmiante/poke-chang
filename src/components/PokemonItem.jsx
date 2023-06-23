import { Link } from 'react-router-dom'
import { useFetchPokemon } from '../hooks/useFetchPokemon'
import { usePalette } from 'color-thief-react'

export function PokemonItem ({ name, url }) {
  const { dataPokemon } = useFetchPokemon({ url })
  const imgSrc = dataPokemon?.sprites?.other['official-artwork']?.front_default
  const { data } = usePalette(imgSrc, 2, 'hex', { crossOrigin: 'anonymous', quality: 10 })

  return (
    <>
      {
        dataPokemon
          ? (

            <Link
              to={`/${name}`}
              className='items-center p-5 py-10 duration-500 transform rounded-lg cursor-pointer hover:-translate-y-2 hover:shadow-2xl'
              style={{ backgroundColor: data && data[0] }}
            >
              <img
                loading='lazy'
                src={dataPokemon?.sprites?.other['official-artwork']?.front_default}
                alt={dataPokemon?.name}
                className='scale-90'
              />
              <div className='flex justify-between mt-10'>
                <div className='flex flex-col justify-between'>
                  <p className='text-lg font-medium'>#{dataPokemon?.id}</p>
                  <h2
                    className='text-2xl font-normal capitalize font-flexo'
                  >
                    {dataPokemon?.name}
                  </h2>
                </div>
                <ul className='flex flex-col gap-1 lg:gap-1'>
                  {
                    dataPokemon?.types?.map(type => (
                      <li
                        key={type?.slot}
                        className='px-8 text-white capitalize border border-solid rounded-lg lg:text-base lg:px-5'
                      >
                        {type?.type?.name}
                      </li>

                    ))
                  }
                </ul>
              </div>
            </Link>
            )
          : <p>Loading...</p>
      }
    </>
  )
}
