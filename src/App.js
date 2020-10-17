import React from "react";
import Pokedex from "./Pokedex"
import pokemons from "./Pokelist"

function App() {
  return (
    <div className="App">
      <Pokedex 
        pokemons={pokemons}
      />
    </div>
  );
}

export default App;
