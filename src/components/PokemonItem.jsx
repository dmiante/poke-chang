import { useFetchPokemon } from '../hooks/useFetchPokemon'

export function PokemonItem ({ url }) {
  const { dataPokemon } = useFetchPokemon({ url })

  const firstLetterUpper = (name) => {
    const [firstLetter, ...restOfName] = name
    return firstLetter.toUpperCase() + restOfName.join('')
  }
  return (
    <>
      {
        dataPokemon
          ? (
            <li
              className='flex flex-col items-center'
            >
              <img
                src={dataPokemon.sprites.other['official-artwork'].front_default} alt={dataPokemon.name}
                className='w-max'
              />
              <h2 className='font-flexo text-3xl font-normal'>{firstLetterUpper(dataPokemon.name)}</h2>
            </li>
            )
          : <p>Cargando...</p>
      }
    </>
  )
}
