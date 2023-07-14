const BASE_URL = 'https://pokeapi.co/api/v2/'

export async function getEvolutionChain ({ name }) {
  try {
    const response = await fetch(`${BASE_URL}pokemon-species/${name.toLowerCase()}`)
    if (!response.ok) {
      const error = new Error(response.status + ' No api information found.')
      throw error
    }
    const data = await response.json()
    const category = data.genera?.find(category => category?.language.name === 'en')
    const respEvolution = await fetch(data.evolution_chain.url)
    // if (data.habitat) return
    const habitat = data.habitat === null ? 'NA' : data.habitat.name
    const dataEvolution = await respEvolution.json()
    // console.log(dataEvolution)
    const { chain } = dataEvolution
    return {
      evolutionChain: chain,
      category: category.genus,
      habitat
    }
  } catch (error) {
    console.error(error)
  }
}
