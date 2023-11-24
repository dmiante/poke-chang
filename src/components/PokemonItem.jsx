import { Link } from 'react-router-dom'

import { backgroundTypes } from '../conts'
import { usePokemon } from '../hooks/usePokemon'
import { LoaderItem } from './LoaderItem'

export function PokemonItem ({ url }) {
  const { dataPokemon, loading, data } = usePokemon({ url })

  return (
    <>
      {
        dataPokemon && !loading && data
          ? (
            <Link
              to={`/pokemon/${dataPokemon.name}`}
              className='flex flex-col items-center justify-center py-0 duration-500 transform rounded-lg cursor-pointer gap-7 hover:-translate-y-2 hover:shadow-2xl'
            >
              <div
                className='rounded-lg'
                style={{ backgroundColor: data && data[0] }}
              >
                <img
                  loading='lazy'
                  src={dataPokemon?.sprites?.other['official-artwork']?.front_default}
                  alt={dataPokemon?.name}
                  className='scale-90'
                />
              </div>
              <div className='flex justify-between w-full gap-1 px-2 mb-5'>
                <div className='flex flex-col justify-between'>
                  <p className='text-lg font-medium'>#{dataPokemon?.id}</p>
                  <h2
                    className='text-xl font-normal capitalize font-flexo'
                  >
                    {dataPokemon?.name}
                  </h2>
                </div>
                <ul className='flex flex-col gap-1 lg:gap-1'>
                  {
                    dataPokemon?.types?.map(type => (
                      <li
                        key={type?.slot}
                        className='px-8 capitalize border border-solid rounded-lg text-slate-700 lg:text-base lg:px-5'
                        style={{ background: backgroundTypes[type.type.name] }}
                      >
                        <span className='contrast-200'>
                          {type?.type?.name}
                        </span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </Link>
            )
          : <LoaderItem />
      }
    </>
  )
}
