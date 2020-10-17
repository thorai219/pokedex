import React from 'react'

function Pokecard(props) {
  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
  return (
    <div className="card">
      <div className="card-items">
        <h3>{props.name}</h3>
        <img src={url} alt="{pokemon.name}"/>
        <div>Type: {props.type}</div>
        <div>EXP: {props.base_experience}</div>
      </div>
    </div>
  )
}

export default Pokecard;