import { useEffect, useState } from 'react'
import { usePokeByName } from '../hooks/usePokeByName'

export const PokemonImg = ({ name, alt, className, width, height }) => {
  const { pokemon, loading } = usePokeByName({ name })
  const [image, setImage] = useState('')

  useEffect(() => {
    try {
      const imageUrl = async () => {
        const url = await setImage(pokemon?.sprites?.front_default)
        return url
      }
      if (!loading) {
        imageUrl()
      }
    } catch (error) {
      throw new Error(error)
    }
  }, [pokemon, loading])

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
