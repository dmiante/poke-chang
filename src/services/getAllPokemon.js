const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export async function getAllPokemon ({ limit = 12, page = 0 } = {}) {
  try {
    const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${page * limit}`)
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
