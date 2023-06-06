import { ListPokemon } from './components/ListPokemon'
import { SearchBar } from './components/SearchBar'
import { Header } from './layout/Header'

function App () {
  return (
    <>
      <Header />
      <main className='flex flex-col items-center'>
        <h1 className='font-flexo font-normal text-6xl'>PokePang</h1>
        <SearchBar />
        <ListPokemon />
      </main>
    </>
  )
}

export default App
