import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckIcon, OptionsIcon } from '../assets/Icons'
import Logo from '../assets/pokeball.svg'
import PokemonContext from '../context/PokemonContext'

export function SearchBar () {
  const { listTypes, selectedType, setSelected } = useContext(PokemonContext)
  const [namePokemon, setNamePokemon] = useState('')
  const navigate = useNavigate()

  function handleSubmit (e) {
    e.preventDefault()
    navigate(`/${namePokemon}`)
  }

  function handleSearch (event) {
    setNamePokemon(event.target.value)
  }

  return (
    <>
      <div className='relative my-10'>
        <h1 className='text-6xl font-normal text-center font-flexo'>PokeChang</h1>
        <form
          onSubmit={handleSubmit}
        >
          <label htmlFor='SearchPokemon' className='sr-only'> Search Pokemon </label>
          <div className='flex flex-col max-w-2xl mx-auto mt-5 xl:max-w-2xl'>
            <label htmlFor='search' className='text-lg font-normal font-flexo'>Search for a pokemon by name or using its National Pokedex number</label>
            <div className='relative flex items-center mt-2'>
              <span className='absolute'>
                <img className='w-6 h-6 mx-3 text-gray-400 dark:text-gray-500' src={Logo} alt='pokeballSearch' />
              </span>
              <input
                type='search'
                placeholder='Name or Number. Ex: Ditto, Abra, Pikachu...'
                className='block mr-4 w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-full pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                onChange={handleSearch}
                value={namePokemon}
              />
              <Listbox value={selectedType} onChange={setSelected}>
                <div className='relative w-3/6'>
                  <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                    <span className='block uppercase truncate'>{selectedType}</span>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                      <OptionsIcon
                        className='w-5 h-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Listbox.Options className='absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                      {listTypes.map((name) => (
                        <Listbox.Option
                          key={name}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                            }`}
                          value={name}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate uppercase ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {name}
                              </span>
                              {selected
                                ? (
                                  <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                                    <CheckIcon className='w-5 h-5' aria-hidden='true' />
                                  </span>
                                  )
                                : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
