import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

import { Combobox, Transition } from '@headlessui/react'

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
    navigate(`/pokemon/${namePokemon.toLowerCase()}`)
  }

  function onKeyDownEnter (e) {
    if (!isNaN(namePokemon)) {
      if (e.code === 'Enter') {
        navigate(`/pokemon/${namePokemon.toLowerCase()}`)
      }
    }
  }

  return (
    <>
      <div className='relative lg:w-1/2'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='SearchPokemon' className='sr-only'> Search Pokemon </label>
          <div className='flex flex-col items-center justify-center max-w-3xl mx-auto mt-5 text-center lg:p-0 lg:max-w-5xl'>
            {/* <div className='flex gap-5 mt-2 md:flex-row'> */}
            <Combobox value={selected} onChange={setSelected}>
              <div className='relative w-full mt-1'>
                <div className='flex flex-col items-center justify-center w-full'>
                  <Combobox.Label>Search for a pokemon by name or using its National Pokedex number</Combobox.Label>
                  <div className='relative flex items-center w-full mt-2'>
                    <span className='absolute'>
                      <img
                        className='w-6 h-6 mx-3 hover:animate-wiggle-more hover:animate-twice hover:animate-duration-200'
                        src='/pokeball.svg'
                        alt='Pokeball'
                      />
                    </span>
                    <Combobox.Input
                      className='w-full py-3 pr-5 text-gray-700 bg-white border border-gray-200 rounded-full placeholder-gray-400/70 pl-11 focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40'
                      placeholder='Name or Number. Ex: Ditto, Abra, Pikachu...'
                      displayValue={(name) => name}
                      onChange={onChange}
                      autoComplete='off'
                      onKeyDown={onKeyDownEnter}
                    />
                  </div>
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
                                // console.log(name)
                                <Combobox.Option
                                  key={name}
                                  className={({ active }) =>
                                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-amber-400 text-white' : 'text-gray-900'
                                  }`}
                                  value={name}
                                  onClick={() => navigate(`/pokemon/${name.toLowerCase()}`)}
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
            {/* <FilterType /> */}
            {/* </div> */}
          </div>
        </form>
      </div>
    </>
  )
}
