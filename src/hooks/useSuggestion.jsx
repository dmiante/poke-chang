import { useContext, useEffect, useState } from 'react'
import PokemonContext from '../context/PokemonContext'

export function useSuggestion () {
  const { allPokemon } = useContext(PokemonContext)
  const [listSuggestion, setListSuggestion] = useState([])
  const [selected, setSelected] = useState('')
  const [namePokemon, setNamePokemon] = useState('')
  const [display, setDisplay] = useState(false)

  const arrName = allPokemon.map(name => name.name)
  const arrFiltered = arrName.filter(word => word.startsWith(namePokemon.toLowerCase()))
  const arrFilteredUpperCase = arrFiltered.map(upper => upper.toUpperCase())

  function onChange (e) {
    setNamePokemon(e.target.value)
  }

  function handleSearch (event) {
    const value = event.target.value
    if (value === '' || value.startsWith(' ')) {
      setListSuggestion([])
      setDisplay(false)
    } else {
      setNamePokemon(value)
      setListSuggestion(arrFilteredUpperCase)
      setDisplay(true)
    }
  }
  useEffect(() => {
    if (namePokemon === '' || namePokemon.startsWith(' ')) {
      setListSuggestion([])
      setDisplay(false)
    } else {
      setNamePokemon(namePokemon)
      setListSuggestion(arrFilteredUpperCase)
      setDisplay(true)
    }
  }, [namePokemon])

  useEffect(() => {
    if (!selected) return
    setNamePokemon(selected)
  }, [selected])

  return {
    allPokemon,
    handleSearch,
    onChange,
    listSuggestion,
    selected,
    setSelected,
    namePokemon,
    setNamePokemon,
    display
  }
}
