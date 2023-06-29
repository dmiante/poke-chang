const BASE_URL = 'https://pokeapi.co/api/v2/type'

export async function getAllTypePokemon () {
  try {
    const response = await fetch(`${BASE_URL}`)
    const data = await response.json()
    return { data }
  } catch (error) {
    throw new Error('Error HTTP: ' + error.status)
  }
}
