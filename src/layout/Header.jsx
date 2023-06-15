export function Header () {
  return (
    <header className='p-6 border-b shadow-sm bg-amber-400 backdrop-blur lg:px-8'>
      <nav className='flex items-center justify-between mx-auto max-w-7xl' aria-label='Global'>
        <div className='flex place-items-center lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Pokechang</span>
            <img className='w-auto h-14' src='../src/assets/pokeball.svg' alt='pokeball' />
          </a>
          <h2 className='ml-3 text-3xl font-semibold font-flexo'>POKECHANG</h2>
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href='#' className='text-lg font-semibold leading-6 text-gray-900'>Log in <span aria-hidden='true'>&rarr;</span></a>
        </div>
      </nav>
    </header>
  )
}
