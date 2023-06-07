export function Header () {
  return (
    <header className='bg-amber-400 shadow-sm backdrop-blur border-b p-6 lg:px-8'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between' aria-label='Global'>
        <div className='flex place-items-center lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Pokechang</span>
            <img className='h-14 w-auto' src='../src/assets/pokeball.svg' alt='pokeball' />
          </a>
          <h2 className='font-semibold font-flexo text-3xl ml-3'>POKECHANG</h2>
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href='#' className='text-lg font-semibold leading-6 text-gray-900'>Log in <span aria-hidden='true'>&rarr;</span></a>
        </div>
      </nav>
    </header>
  )
}
