import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(props) {
  return (
    <div className="pokedex">
      <h3>Pokedex</h3>
      <div className="pokecards">
        {props.pokemons.map(p => (
          <Pokecard 
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  )
}

export default Pokedex;