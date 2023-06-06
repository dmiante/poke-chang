const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export const getAllPokemon = async () => {
  const response = await fetch(`${BASE_URL}?limit=12&offset=0`)
  const data = await response.json()
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.')
    throw error
  }
  const { results } = data
  return results
}
