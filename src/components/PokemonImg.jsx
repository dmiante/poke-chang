import { useEffect, useState } from 'react'
import { usePokeByName } from '../hooks/usePokeByName'

export const PokemonImg = ({ name, alt, className, width, height }) => {
  const { pokemon } = usePokeByName({ name })
  const [image, setImage] = useState('')

  useEffect(() => {
    setImage(pokemon?.sprites?.front_default)
  }, [pokemon])

  // console.log(image)
  return (
    <img
      className={className}
      src={image}
      alt={alt}
      width={width}
      height={height}
    />
  )
}
