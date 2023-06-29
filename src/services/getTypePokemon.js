const BASE_URL = 'https://pokeapi.co/api/v2/type'

export async function getTypePokemon ({ selectedType = 'ice' } = {}) {
  try {
    const response = await fetch(`${BASE_URL}/${selectedType}`)
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
