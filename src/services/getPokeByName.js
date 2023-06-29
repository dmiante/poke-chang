const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export async function getPokeByName ({ name }) {
  try {
    const response = await fetch(`${BASE_URL}/${name.toLowerCase()}`)
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
