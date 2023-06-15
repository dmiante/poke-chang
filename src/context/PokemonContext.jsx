import React, { useState } from 'react'

const Context = React.createContext({})

export function PokemonContextProvider ({ children }) {
  const [allPokemon, setAllPokemon] = useState([])
  return (
    <Context.Provider value={{ allPokemon, setAllPokemon }}>
      {children}
    </Context.Provider>
  )
}
export default Context
