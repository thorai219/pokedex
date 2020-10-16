import React from 'react'
import { pokemonList } from './PokemonList'
import '../styles/pokeCard.css'

function PokeCard() {
  let pokemon = pokemonList[0];
  return (
    <div className="card">
      <div className="card-items">
        <h3>{pokemon.name}</h3>
        <p><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="{pokemon.name}"/></p>
        <p>Type: {pokemon.type}</p>
        <p>EXP: {pokemon.base_experience}</p>
      </div>
    </div>
  )
}

export {PokeCard}