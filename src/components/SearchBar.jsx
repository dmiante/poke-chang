import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OptionsIcon, SortedIcon } from '../assets/Icons'
import Logo from '../assets/pokeball.svg'
import { usePokemon } from '../hooks/usePokemon'

export function SearchBar () {
  const [namePokemon, setNamePokemon] = useState('')
  const navigate = useNavigate()
  const { handleSortName } = usePokemon()

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
              <Menu as='div' className=''>
                <div>
                  <Menu.Button
                    className='inline-flex justify-center w-full px-4 py-2.5 text-sm text-white hover:bg-opacity-50 rounded-md focus:outline-none focus-visible:ring-2 bg-amber-400 focus-visible:ring-white focus-visible:ring-opacity-75'
                  >
                    <OptionsIcon
                      className='w-5 h-5 text-white'
                      aria-hidden='true'
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg right-1 ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='px-1 py-1 '>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                            active ? 'bg-amber-400 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-4 text-sm`}
                            onClick={handleSortName}
                          >
                            {active
                              ? (
                                <SortedIcon
                                  className='w-5 h-5 mr-2'
                                  aria-hidden='true'
                                />
                                )
                              : (
                                <SortedIcon
                                  className='w-5 h-5 mr-2'
                                  aria-hidden='true'
                                />
                                )}
                            Sort by NAME [ A - Z ]
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                            active ? 'bg-amber-400 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-4 text-sm`}
                          >
                            {active
                              ? (
                                <SortedIcon
                                  className='w-5 h-5 mr-2'
                                  aria-hidden='true'
                                />
                                )
                              : (
                                <SortedIcon
                                  className='w-5 h-5 mr-2'
                                  aria-hidden='true'
                                />
                                )}
                            Sort by NUMBER [ 0 - 9 ]
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
