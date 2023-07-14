import { ArrowEvolution } from '../assets/Icons'
import useEvolutionChain from '../hooks/useEvolutionChain'
import { PokemonImg } from './PokemonImg'

export default function EvolutionSection ({ name }) {
  const { evolution } = useEvolutionChain({ name })

  // console.log(evolution)
  return (
    <aside className=''>
      <h3 className='mb-5 text-3xl font-semibold text-center uppercase'>Evolutions</h3>
      <div className='flex items-center justify-center max-w-full px-2 pt-6 pb-10 text-xl font-medium capitalize border border-solid shadow-xl rounded-xl'>
        {
          evolution
            ? (
              <ul className='flex flex-col items-center w-full gap-2'>
                <PokemonImg
                  className=''
                  name={evolution.evolutionChain?.species.name}
                  alt={evolution.evolutionChain?.species.name}
                  width={110}
                  height={110}
                />
                <li>{evolution.evolutionChain?.species.name}</li>
                {
                  evolution.evolutionChain?.evolves_to.length > 0
                    ? (
                      <ArrowEvolution className='w-6 h-6 rotate-90' />
                      )
                    : null
                }
                <div
                  // evolution > 3: horizontal, evolution < 3: vertical
                  className={`${evolution.evolutionChain?.evolves_to.length > 2
                      ? 'flex w-full overflow-x-auto'
                      : 'flex justify-center w-full'
                    }`}
                >
                  {
                evolution.evolutionChain?.evolves_to.length > 0
                  ? (
                      evolution.evolutionChain?.evolves_to.map(evolTwo => (
                        <ul
                          key={evolTwo.species.name}
                          // className='flex-none px-1 py-6 first:pl-1 last:pr-1'
                          className={`${evolution.evolutionChain?.evolves_to.length > 2
                            ? 'flex-none px-3 py-6 first:pl-6 last:pr-6'
                            : 'flex flex-col items-center justify-center w-full gap-4'
                          }`}
                        >
                          <div className='flex flex-col items-center justify-center gap-2'>
                            <PokemonImg
                              className=''
                              name={evolTwo.species.name}
                              alt={evolTwo.species.name}
                              width={110}
                              height={110}
                            />
                            <li>{evolTwo.species.name}</li>
                            {
                              evolTwo.evolves_to.length > 0
                                ? (
                                  <ArrowEvolution className='w-6 h-6 rotate-90' />
                                  )
                                : null
                            }
                          </div>
                          {
                            evolTwo.evolves_to.length > 0
                              ? (
                                <ul className='flex gap-20'>
                                  {
                                    evolTwo?.evolves_to.map(evolThree => (
                                      <div
                                        key={evolThree.species.name}
                                        className='text-center'
                                      >
                                        <PokemonImg
                                          className=''
                                          name={evolThree.species.name}
                                          alt={evolThree.species.name}
                                          width={110}
                                          height={110}
                                        />
                                        <li>
                                          {evolThree.species.name}
                                        </li>
                                      </div>
                                    ))
                                  }
                                </ul>
                                )
                              : (
                                  null
                                )
                          }
                        </ul>
                      ))
                    )
                  : (
                      evolution.evolutionChain?.evolves_to.map(evol => (
                        <li key={evol.species.name}>{evol.species.name}</li>
                      ))
                    )
              }
                </div>
              </ul>
              )
            : (
              <p>No data</p>
              )
        }
      </div>
    </aside>
  )
}
