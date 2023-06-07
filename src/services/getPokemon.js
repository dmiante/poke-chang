const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export async function getAllPokemon ({ limit = 12, offSet = 0 } = {}) {
  const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offSet}`)
  const data = await response.json()
  if (!response.ok) {
    const error = new Error('Error HTTP: ' + response.status)
    throw error
  }
  return { data }
}
