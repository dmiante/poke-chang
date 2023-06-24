import { useNavigate, useParams } from 'react-router-dom'
import { backgroundTypes, baseStatsNames, maxStat } from '../conts'
import { usePokeByName } from '../hooks/usePokeByName'

export default function DetailPokemon () {
  const navigate = useNavigate()
  const { name } = useParams()
  const { pokemon } = usePokeByName({ name })
  return (
    <>
      {
        pokemon
          ? (
            <>
              <div className='grid grid-cols-3 lg:mt-12'>
                <button
                  className='p-5 text-lg font-semibold bg-white border border-black border-solid text-amber-500 lg:rounded-tl-full lg:border-4 lg:border-solid lg:border-amber-400 hover:bg-amber-100 hover:text-amber-600 disabled:hover:bg-amber-200 disabled:cursor-not-allowed'
                  disabled={pokemon.id === 1}
                  onClick={() => navigate(`/${pokemon.id - 1}`)}
                >Previous Pokemon
                </button>
                <button
                  className='text-lg font-semibold text-white border border-black border-solid bg-amber-400 lg:border-y-4 lg:border-solid lg:border-amber-400 hover:bg-amber-100 hover:text-amber-500'
                  onClick={() => navigate('/')}
                >Home
                </button>
                <button
                  className='text-lg font-semibold bg-white border border-black border-solid text-amber-500 lg:rounded-tr-full lg:border-4 lg:border-solid lg:border-amber-400 hover:bg-amber-100 hover:text-amber-600'
                  onClick={() => navigate(`/${pokemon.id + 1}`)}
                >Next Pokemon
                </button>
              </div>
              <section
                className='flex flex-col m-8 lg:m-0 lg:flex-row lg:border-4 lg:border-solid lg:border-amber-400 lg:rounded-b-3xl lg:p-8 lg:gap-12 lg:border-t-0'
              >
                <aside className='flex flex-col basis-1/2'>
                  <h4>#{pokemon.id}</h4>
                  <div className='flex items-center justify-between'>
                    <h2 className='text-3xl font-bold capitalize'>{pokemon.name}</h2>
                    <ul className='flex gap-1 lg:gap-4'>
                      {
                      pokemon?.types?.map(type => (
                        <li
                          key={type.slot}
                          className='px-2 text-white capitalize border border-solid rounded-lg lg:text-lg lg:px-10'
                          style={{ background: backgroundTypes[type.type.name] }}
                        >
                          {type.type.name}
                        </li>

                      ))
                    }
                    </ul>
                  </div>
                  <img
                    loading='lazy'
                    src={pokemon?.sprites?.other['official-artwork']?.front_default}
                    alt={pokemon.name}
                    className='self-center w-3/4 my-6'
                  />
                </aside>
                <aside className='flex flex-col gap-4 basis-1/2'>
                  <h3 className='text-xl font-bold text-center'>Details</h3>
                  <div className='grid grid-cols-3 grid-rows-2 p-4 text-center rounded-lg bg-amber-400'>
                    <p className='text-xl font-semibold'>{pokemon.base_experience}</p>
                    <p className='text-xl font-semibold'>{pokemon.height * 10} cm</p>
                    <p className='text-xl font-semibold'>{pokemon.weight / 10} kg</p>
                    <p className='text-sm font-light'>Base Exp.</p>
                    <p className='text-sm font-light'>Height</p>
                    <p className='text-sm font-light'>Weight</p>
                  </div>
                  <h3 className='text-xl font-bold text-center'>Abilities</h3>
                  <div className='p-4 rounded-lg bg-amber-400'>
                    <ul className='flex flex-col gap-1'>
                      {
                      pokemon?.abilities?.map(ability => (
                        <li
                          key={ability.slot}
                          className={`relative text-center uppercase border border-black border-solid rounded-xl ${ability.is_hidden ? 'bg-slate-800 text-white' : ''}`}
                        >
                          {
                            ability.is_hidden
                              ? (
                                <small>
                                  <div
                                    className='absolute text-xs left-2 top-1'
                                  >hidden
                                  </div>
                                  {ability.ability.name}
                                </small>
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
                  <h3 className='text-lg font-bold text-center'>Base Stats</h3>
                  <div className='p-4 rounded-lg bg-amber-400'>
                    <table className='w-full border-separate table-fixed border-spacing-y-2'>
                      <tbody>
                        {
                        pokemon?.stats?.map(stat => (
                          <tr
                            key={stat.stat.name}
                            className='h-11'
                          >
                            <th className='w-3/12 rounded-l-lg bg-amber-600'>
                              {baseStatsNames[stat.stat.name]}
                            </th>
                            <td className='w-full p-0 font-bold text-right bg-amber-300 rounded-r-xl'>
                              <div
                                className='py-3 pr-2 rounded-r-xl bg-amber-500'
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
            </>
            )
          : <p>Loading...</p>
      }
    </>
  )
}
