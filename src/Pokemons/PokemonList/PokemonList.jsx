import React from 'react'
import Pokemons from '../Pokemons'

const PokemonList = ({name}) => {
  return (
    <>
     <Pokemons type={name}/>
    </>
  )
}

export default PokemonList
