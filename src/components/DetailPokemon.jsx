import { Link, useParams } from 'react-router-dom'
import { usePalette } from 'color-thief-react'

import { LoaderDetail } from './LoaderItem'
import EvolutionSection from './EvolutionSection'

import { usePokeByName } from '../hooks/usePokeByName'
import { backgroundTypes, baseStatsNames, maxStat } from '../conts'
import { ArrowLeft, ArrowRight, HomeIcon } from '../assets/Icons'
import { SearchBar } from './SearchBar'
import useEvolutionChain from '../hooks/useEvolutionChain'

export default function DetailPokemon () {
  const { name } = useParams()
  const { pokemon, loading } = usePokeByName({ name })
  const { evolution } = useEvolutionChain({ name })
  const imgSrc = pokemon?.sprites?.other['official-artwork']?.front_default
  const { data } = usePalette(imgSrc, 2, 'hex', { crossOrigin: 'anonymous', quality: 10 })

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      {/* BUTTONS PREV & NEXT */}
      <div className='grid grid-cols-2 grid-rows-2 gap-2 my-10 lg:grid-rows-1 lg:grid-cols-3'>
        <Link
          className='inline-flex items-center justify-center col-span-2 gap-2 my-5 text-xl font-semibold underline underline-offset-4 lg:col-auto lg:no-underline lg:text-2xl lg:mt-0'
          to='/'
        >
          <HomeIcon />
          <div className='transition duration-300 group'>
            Home
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black' />
          </div>
        </Link>
        <Link
          className='inline-flex items-center justify-start row-start-2 text-xl font-semibold transition duration-300 rounded-md group lg:row-auto lg:order-first lg:rounded-full'
          to={pokemon.id !== 1 ? `/pokemon/${pokemon.id - 1}` : ''}
        >
          <ArrowLeft />
          <div className='transition duration-300 group'>
            Prev Pokemon
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black' />
          </div>
        </Link>
        <Link
          className='inline-flex items-center justify-end row-start-2 text-xl font-semibold rounded-md lg:row-auto lg:rounded-full'
          to={`/pokemon/${pokemon.id + 1}`}
        >
          <div className='transition duration-300 group'>
            Next Pokemon
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black' />
          </div>
          <ArrowRight />
        </Link>
      </div>
      {
          pokemon && !loading
            ? (
              <>
                <section
                  className='flex flex-col gap-10 mx-2 my-8 lg:mt-10 lg:flex-row lg:mx-auto lg:gap-8 lg:justify-between lg:w-full'
                >
                  {/* BASIC INFO */}
                  <aside className='flex flex-col basis-1/2 lg:w-1/2'>
                    <h4 className='mx-2 lg:text-lg'>#{pokemon.id}</h4>
                    <div className='flex items-start justify-between mx-2'>
                      <div>
                        <h2 className='text-3xl font-bold capitalize'>{pokemon.name}</h2>
                        <p>{evolution ? evolution.category : ''}</p>
                      </div>
                      <ul className='flex flex-col gap-1 lg:gap-2 lg:flex-row'>
                        {
                          pokemon?.types?.map(type => (
                            <li
                              key={type.slot}
                              className='items-center px-3 py-1 text-center text-white capitalize border border-solid rounded-lg min-w-max lg:text-lg lg:px-10'
                              style={{ background: backgroundTypes[type.type.name] }}
                            >
                              {type.type.name}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                    <div
                      className='flex items-center justify-center lg:mt-20'
                    >
                      <div
                        className='py-4 my-8 rounded-full'
                        style={{ backgroundColor: data && data[0] }}
                      >
                        <img
                          loading='lazy'
                          src={pokemon?.sprites?.other['official-artwork']?.front_default}
                          alt={pokemon.name}
                          className='w-full px-5'
                        />
                      </div>
                    </div>
                  </aside>
                  {/* DETAILS INFO */}
                  <aside className='flex flex-col gap-4 p-5 shadow-2xl rounded-xl lg:w-1/3'>
                    <h3 className='mt-2 text-xl font-bold text-center uppercase lg:text-3xl'>Details</h3>
                    <div className='grid grid-cols-3 grid-rows-2 text-center'>
                      <p className='text-2xl font-semibold'>{pokemon.base_experience}</p>
                      <p className='text-2xl font-semibold'>{pokemon.height * 10} cm</p>
                      <p className='text-2xl font-semibold'>{pokemon.weight / 10} kg</p>
                      <p className='text-sm font-light'>Base Exp.</p>
                      <p className='text-sm font-light'>Height</p>
                      <p className='text-sm font-light'>Weight</p>
                    </div>
                    <h3 className='mt-4 text-xl font-bold text-center uppercase lg:text-3xl'>Abilities</h3>
                    <div className='flex justify-center w-full m-auto lg:max-w-sm'>
                      <ul className='flex flex-col w-full gap-1'>
                        {
                          pokemon?.abilities?.map(ability => (
                            <li
                              key={ability.slot}
                              className={`relative text-center uppercase border border-black border-solid rounded-full ${ability.is_hidden ? 'bg-slate-800 text-white' : ''}`}
                            >
                              {
                                ability.is_hidden
                                  ? (
                                    <>
                                      <div
                                        className='absolute text-xs top-1 left-3'
                                      >
                                        hidden
                                      </div>
                                      {ability.ability.name}
                                    </>
                                    )
                                  : (
                                      ability.ability.name
                                    )
                              }
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                    <div className=''>
                      <h3 className='mt-4 text-xl font-bold text-center uppercase lg:text-3xl'>Base Stats</h3>
                      <table className='w-full border-separate table-fixed border-spacing-y-4'>
                        <tbody>
                          {
                            pokemon?.stats?.map(stat => (
                              <tr
                                key={stat.stat.name}
                                className='rounded-xl h-14 outline outline-1 outline-amber-400'
                              >
                                <th className='w-2/6 text-xs rounded-l-xl md:w-3/12 bg-amber-400 lg:text-xl'>
                                  {baseStatsNames[stat.stat.name]}
                                </th>
                                <td className='w-full p-0 font-bold text-right rounded-r-xl'>
                                  <div
                                    className='py-5 pr-4 text-sm lg:text-lg rounded-r-xl bg-amber-400'
                                    style={{ width: `${(stat.base_stat / maxStat) * 100}%` }}
                                  >
                                    {stat.base_stat}
                                  </div>
                                </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </aside>
                </section>
                {/* EVOLUTION INFO */}
                <EvolutionSection name={name} />
              </>
              )
            : (
              <div className='flex items-center justify-center'>
                <LoaderDetail />
              </div>
              )
          }
    </div>
  )
}
