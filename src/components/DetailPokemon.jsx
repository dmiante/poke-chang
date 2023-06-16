import { useContext } from 'react'
import PokemonContext from '../context/PokemonContext'
import { useParams } from 'react-router-dom'
import { useFetchPokemon } from '../hooks/useFetchPokemon'

export default function DetailPokemon () {
  const { namePokemon } = useParams()
  const { allPokemon } = useContext(PokemonContext)
  const { url } = allPokemon.find(singlePokemon => singlePokemon.name === namePokemon)
  const { dataPokemon } = useFetchPokemon({ url })
  const baseStatsNames = {
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    'special-attack': 'Sp. Attack',
    'special-defense': 'Sp. Defense',
    speed: 'Speed'
  }
  const maxStat = 255
  return (
    <>
      {
        dataPokemon
          ? (
            <section
              className='flex flex-col m-8 lg:m-0 lg:flex-row lg:border-4 lg:border-solid lg:border-amber-400 lg:mt-12 lg:rounded-3xl lg:p-8 lg:gap-12'
            >
              {/* <button className='border border-black border-solid'>Back</button> */}
              <aside className='flex flex-col basis-1/2'>
                <h4>#{dataPokemon.id}</h4>
                <div className='flex items-center justify-between'>
                  <h2 className='text-3xl font-bold capitalize'>{dataPokemon.name}</h2>
                  <ul className='flex gap-1 lg:gap-4'>
                    {
                      dataPokemon.types.map(type => (
                        <li
                          key={type.slot}
                          className='px-2 capitalize border border-solid rounded-lg border-amber-400 lg:text-lg lg:px-10'
                        >
                          {type.type.name}
                        </li>

                      ))
                    }
                  </ul>
                </div>
                <img
                  loading='lazy'
                  src={dataPokemon.sprites.other['official-artwork'].front_default}
                  alt={dataPokemon.name}
                  className='self-center w-3/4 my-6'
                />
              </aside>
              <aside className='flex flex-col gap-4 basis-1/2'>
                <h3 className='text-xl font-bold text-center'>Details</h3>
                <div className='grid grid-cols-3 grid-rows-2 p-4 text-center rounded-lg bg-amber-400'>
                  <p className='text-xl font-semibold'>{dataPokemon.base_experience}</p>
                  <p className='text-xl font-semibold'>{dataPokemon.height * 10} cm</p>
                  <p className='text-xl font-semibold'>{dataPokemon.weight * 0.1} kg</p>
                  <p className='text-sm font-light'>Base Exp.</p>
                  <p className='text-sm font-light'>Height</p>
                  <p className='text-sm font-light'>Weight</p>
                </div>
                <h3 className='text-xl font-bold text-center'>Abilities</h3>
                <div className='p-4 rounded-lg bg-amber-400'>
                  <ul className='flex flex-col gap-1'>
                    {
                      dataPokemon.abilities.map(ability => (
                        <li
                          key={ability.slot}
                          className={`relative text-center capitalize border border-black border-solid rounded-xl ${ability.is_hidden ? 'bg-slate-800 text-white' : ''}`}
                        >
                          {
                            ability.is_hidden
                              ? (
                                <>
                                  <div
                                    className='absolute text-xs capitalize left-2 top-1'
                                  >hidden
                                  </div>
                                  <span className='capitalize'>
                                    {ability.ability.name}
                                  </span>
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
                <h3 className='text-lg font-bold text-center'>Base Stats</h3>
                <div className='p-4 rounded-lg bg-amber-400'>
                  <table className='w-full border-separate table-fixed border-spacing-y-2'>
                    <tbody>
                      {
                        dataPokemon?.stats?.map(stat => (
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
            )
          : <p>Loading...</p>
      }
    </>
  )
}
