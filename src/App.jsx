import { Route, Routes } from 'react-router-dom'
import { ListPokemon } from './components/ListPokemon'
import { PokemonContextProvider } from './context/PokemonContext'
import { Header } from './layout/Header'
import DetailPokemon from './components/DetailPokemon'

function App () {
  return (
    <>
      <Header />
      <main className='container mx-auto max-w-7xl'>
        <PokemonContextProvider>
          <Routes>
            <Route path='/' element={<ListPokemon />} />
            <Route path='/:namePokemon' element={<DetailPokemon />} />
          </Routes>
        </PokemonContextProvider>
      </main>
    </>
  )
}

export default App
