import React from 'react';
import ReactDOM from 'react-dom';
import { PokeDex } from './app/PokeDex'

function App() {
  return (
    <div>
      <PokeDex />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))