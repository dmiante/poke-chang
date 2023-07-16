import { ArrowEvolution } from '../assets/Icons'
import useEvolutionChain from '../hooks/useEvolutionChain'
import { PokemonImg } from './PokemonImg'

export default function EvolutionSection ({ name }) {
  const { evolution, loading } = useEvolutionChain({ name })

  return (
    <section className='mx-2 my-8'>
      <h3 className='mb-5 text-3xl font-semibold text-center uppercase'>Evolutions</h3>
      <div className='flex items-center justify-center max-w-full px-2 pt-6 pb-10 text-xl font-medium capitalize shadow-2xl rounded-xl lg:p-10'>
        {
          evolution && !loading
            ? (
              <ul className='flex flex-col items-center w-full gap-2 lg:flex-row lg:justify-center lg:gap-10'>
                <div className='text-center lg:flex-col lg:flex lg:items-center lg:m-10'>
                  <PokemonImg
                    className='lg:w-56'
                    name={evolution.evolutionChain?.species.name}
                    alt={evolution.evolutionChain?.species.name}
                    width={110}
                    height={110}
                  />
                  <li>{evolution.evolutionChain?.species.name}</li>
                </div>
                <div className='flex justify-center'>
                  {
                    evolution.evolutionChain?.evolves_to.length > 0
                      ? (
                        <ArrowEvolution className='w-6 h-6 rotate-90 lg:rotate-0' />
                        )
                      : null
                  }
                </div>
                <div
                  className={`${evolution.evolutionChain?.evolves_to.length > 2
                      ? 'flex w-full overflow-x-auto lg:flex-wrap lg:w-auto lg:justify-center'
                      : 'flex justify-center w-full lg:flex-col lg:w-auto lg:gap-10 lg:p-5'
                    }`}
                >
                  {
                evolution.evolutionChain?.evolves_to.length > 0
                  ? (
                      evolution.evolutionChain?.evolves_to.map(evolTwo => (
                        <ul
                          key={evolTwo.species.name}
                          className={`${evolution.evolutionChain?.evolves_to.length > 2
                            ? 'flex-none px-3 py-6 first:pl-6 last:pr-6'
                            : 'flex flex-col items-center justify-center w-full gap-4 lg:flex-row lg:justify-evenly lg:gap-20'
                          }`}
                        >
                          <div className='flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-10'>
                            <div className='text-center lg:flex-col lg:flex lg:items-center'>
                              <PokemonImg
                                className='lg:w-56'
                                name={evolTwo.species.name}
                                alt={evolTwo.species.name}
                                width={110}
                                height={110}
                              />
                              <li>{evolTwo.species.name}</li>
                            </div>
                            {
                              evolTwo.evolves_to.length > 0
                                ? (
                                  <ArrowEvolution className='w-6 h-6 rotate-90 lg:rotate-0' />
                                  )
                                : null
                            }
                          </div>
                          {
                            evolTwo.evolves_to.length > 0
                              ? (
                                <ul className='flex gap-20 lg:flex-col'>
                                  {
                                    evolTwo?.evolves_to.map(evolThree => (
                                      <div
                                        key={evolThree.species.name}
                                        className='text-center'
                                      >
                                        <PokemonImg
                                          className='lg:w-56'
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
              <p>No info</p>
              )
        }
      </div>
    </section>
  )
}
