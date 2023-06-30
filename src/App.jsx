import { useState } from 'react';
import './App.css'
import Card from "./componentes/Card";

function App() {
  //creando memoria
  const initialMovieState = [];
  const [movies, setMovies] = useState(initialMovieState)
  return (
    <body>

    <div className="App">
      <header> <h1>Movie Cahllenge</h1></header>
      <div className='container'>
        <Card title="Titulo"
          description="Descripción" />
        </div>
    </div>
   </body >
    );
}

export default App;
