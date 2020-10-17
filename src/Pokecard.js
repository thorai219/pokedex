import React from 'react'
import './Pokecard.css'

function Pokecard(props) {
  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
  return (
    <div className="card">
      <div className="card-items">
        <h2>{props.name}</h2>
        <img src={url} alt="{pokemon.name}"/>
        <div>Type: {props.type}</div>
        <div>EXP: {props.exp}</div>
      </div>
    </div>
  )
}

export default Pokecard;