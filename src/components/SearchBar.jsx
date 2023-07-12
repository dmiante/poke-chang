import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

import { Combobox, Transition } from '@headlessui/react'

import { FilterType } from './FilterType'
import { CheckIcon } from '../assets/Icons'
import { useSuggestion } from '../hooks/useSuggestion'

export function SearchBar () {
  const {
    allPokemon,
    onChange,
    listSuggestion,
    selected,
    setSelected,
    namePokemon,
    display
  } = useSuggestion()

  const navigate = useNavigate()

  function handleSubmit (e) {
    e.preventDefault()
    navigate(`/${namePokemon}`)
    console.log('onSubmit')
  }

  function onKeyDownEnter (e) {
    if (!isNaN(namePokemon)) {
      if (e.code === 'Enter') {
        navigate(`/${namePokemon}`)
      }
    }
  }

  return (
    <>
      <div className='relative mb-2 mt-11 lg:my-10'>
        <h1 className='text-6xl font-normal text-center font-flexo'>PokeChang</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='SearchPokemon' className='sr-only'> Search Pokemon </label>
          <div className='flex flex-col max-w-3xl p-5 mx-auto mt-5 text-center lg:p-0 lg:max-w-5xl'>
            <label htmlFor='search' className='text-lg font-normal font-flexo'>
              Search for a pokemon by name or using its National Pokedex number
            </label>
            <div className='relative flex flex-col items-center gap-5 mt-2 lg:gap-3 md:flex-row lg:justify-between'>
              <Combobox value={selected} onChange={setSelected}>
                <div className='relative w-full mt-1 md:mr-1 lg:mr-1 lg:m-0 lg:w-4/5'>
                  <div>
                    <img className='absolute left-0 w-6 h-6 mx-3 text-gray-400 top-2.5 dark:text-gray-500' src='/pokeball.svg' alt='Pokeball' />
                    <Combobox.Input
                      className='mr-4 w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-full pl-11 pr-5 focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40'
                      placeholder='Name or Number. Ex: Ditto, Abra, Pikachu...'
                      displayValue={(name) => name}
                      onChange={onChange}
                      autoComplete='off'
                      // onBlur={() => { setNamePokemon('') || setSelected('') }}
                      onKeyDown={onKeyDownEnter}
                    />
                  </div>
                  <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Combobox.Options className='absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                      {
                        display && listSuggestion.length !== 0
                          ? (
                              listSuggestion.map((name) => (
                                <Combobox.Option
                                  key={name}
                                  className={({ active }) =>
                                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-amber-400 text-white' : 'text-gray-900'
                                  }`}
                                  value={name}
                                  onClick={() => navigate(`/${name}`)}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                  }`}
                                      >
                                        {name}
                                      </span>
                                      {selected
                                        ? (
                                          <span
                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? 'text-white' : 'text-amber-400'
                                    }`}
                                          >
                                            <CheckIcon className='w-5 h-5' aria-hidden='true' />
                                          </span>
                                          )
                                        : null}
                                    </>
                                  )}
                                </Combobox.Option>
                              ))
                            )
                          : (
                            <div className='relative px-4 py-2 font-semibold text-gray-700 cursor-default select-none'>
                              {
                                !isNaN(namePokemon)
                                  ? `Id or number must be less than ${allPokemon.length}`
                                  : 'No found Pokemon.'
                              }
                            </div>
                            )
                      }
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
              <FilterType />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
