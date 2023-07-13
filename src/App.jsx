import { Route, Routes } from 'react-router-dom'
import { ListPokemon } from './components/ListPokemon'
import { PokemonProvider } from './context/PokemonContext'
import { Header } from './layout/Header'
import DetailPokemon from './components/DetailPokemon'

function App () {
  return (
    <>
      <Header />
      <main className='container mx-auto'>
        <PokemonProvider>
          <Routes>
            <Route path='/' element={<ListPokemon />} />
            <Route path='/:name' element={<DetailPokemon />} />
            <Route path='*' element={<h2>Not Found</h2>} />
          </Routes>
        </PokemonProvider>
      </main>
    </>
  )
}

export default App
