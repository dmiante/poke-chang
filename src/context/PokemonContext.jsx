import React, { useState } from 'react'

const Context = React.createContext({})

export function PokemonContextProvider ({ children }) {
  const [pokemon, setPokemon] = useState([])
  return (
    <Context.Provider value={{ pokemon, setPokemon }}>
      {children}
    </Context.Provider>
  )
}
export default Context
