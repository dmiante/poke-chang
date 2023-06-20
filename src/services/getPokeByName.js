const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export async function getPokeByName ({ name }) {
  const response = await fetch(`${BASE_URL}/${name.toLowerCase()}`)
  const data = await response.json()
  if (!response.ok) {
    const error = new Error('Error HTTP: ' + response.status)
    throw error
  }
  return { data }
}
