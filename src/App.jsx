import { ListPokemon } from './components/ListPokemon'
import { SearchBar } from './components/SearchBar'
import { PokemonContextProvider } from './context/PokemonContext'
import { Header } from './layout/Header'

function App () {
  return (
    <>
      <Header />
      <main className='flex flex-col items-center'>
        <h1 className='font-flexo font-normal text-6xl'>PokeChang</h1>
        <SearchBar />
        <PokemonContextProvider>
          <ListPokemon />
        </PokemonContextProvider>
      </main>
    </>
  )
}

export default App
