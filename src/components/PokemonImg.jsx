import { useEffect, useState } from 'react'
import { getPokeByName } from '../services/getPokeByName'

export const PokemonImg = ({ name, alt, className, width, height }) => {
  const [image, setImage] = useState('')

  useEffect(() => {
    try {
      const imageUrl = async () => {
        const resp = await getPokeByName({ name })
        const { sprites } = resp.data
        const url = setImage(sprites?.front_default)
        return { url }
      }
      imageUrl()
    } catch (error) {
      throw new Error(error)
    }
  }, [name])

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
