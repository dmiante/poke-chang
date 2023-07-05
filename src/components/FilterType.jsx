import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, OptionsIcon } from '../assets/Icons'
import { Fragment, useContext } from 'react'
import PokemonContext from '../context/PokemonContext'

export function FilterType () {
  const { listTypes, selectedType, setSelected } = useContext(PokemonContext)
  return (
    <Listbox value={selectedType} onChange={setSelected}>
      <div className='relative w-2/5'>
        <Listbox.Button
          className='relative w-full py-2.5 pl-5 pr-10 text-left bg-white rounded-full shadow-sm border border-amber-300 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'
        >
          <span className='block uppercase truncate'>{selectedType.name}</span>
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <OptionsIcon
              className='w-10 h-5 text-amber-500'
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
            {listTypes.map((list) => (
              <Listbox.Option
                key={list.name}
                className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                            }`}
                value={list}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate uppercase ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                    >
                      {list.name}
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
  )
}
