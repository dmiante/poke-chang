const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export async function getGlobalPokemon () {
  try {
    const response = await fetch(`${BASE_URL}?limit=100000&offset=0`)
    if (!response.ok) {
      const error = new Error('Error HTTP: ' + response.status)
      throw error
    }
    const data = await response.json()
    return { data }
  } catch (error) {
    console.error(error)
  }
}
