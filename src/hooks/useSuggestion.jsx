import { useContext, useState } from 'react'
import PokemonContext from '../context/PokemonContext'

export function useSuggestion () {
  const { allPokemon } = useContext(PokemonContext)
  const [listSuggestion, setListSuggestion] = useState([])
  const [selected, setSelected] = useState(null)
  const [namePokemon, setNamePokemon] = useState('')
  const [display, setDisplay] = useState(false)

  function handleSearch (event) {
    const value = event.target.value
    const arrName = allPokemon.map(name => name.name)
    const arrFiltered = arrName.filter(word => word.startsWith(value.toLowerCase()))
    const arrFilteredUpperCase = arrFiltered.map(upper => upper.toUpperCase())
    if (value === '' || value.startsWith(' ')) {
      setListSuggestion([])
      setDisplay(false)
    } else {
      setNamePokemon(value)
      setListSuggestion(arrFilteredUpperCase)
      setDisplay(true)
    }
  }

  return {
    handleSearch,
    listSuggestion,
    selected,
    setSelected,
    namePokemon,
    setNamePokemon,
    display
  }
}
