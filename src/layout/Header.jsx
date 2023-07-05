import { Link } from 'react-router-dom'
import Logo from '../assets/pokeball.svg'

export function Header () {
  return (
    <header className='p-6 shadow-sm md:border-b bg-amber-400 backdrop-blur lg:px-8'>
      <div className='flex items-center justify-center mx-auto md:justify-between max-w-7xl' aria-label='Global'>
        <div className='flex place-items-center lg:flex-1'>
          <Link to='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Pokechang</span>
            <img className='w-auto h-14' src={Logo} alt='pokeball' />
          </Link>
          <h2 className='ml-3 text-3xl font-semibold font-flexo'>POKECHANG</h2>
        </div>
      </div>
    </header>
  )
}
