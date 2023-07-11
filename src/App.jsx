//
/*import { useState } from 'react';*/
import './App.css'

import Api from './componentes/Api';
import Header from './componentes/header';
import Botones from './componentes/Botones';
//armado de esqueleto de html
function App() {
  return (
    <div className='container'>
      <div><Header /></div>
      <hr/>
      <Botones />
      <Api />
    </div>
  );
  }

/*{
  //creando memoria
  const initialMovieState = [];
  const [movies, setMovies] = useState(initialMovieState)
  return (
<div className="App">
      <header> <h1>Movie Cahllenge</h1></header>
      <div className='container'>
        <Card title="Titulo"
          description="Descripción" />
        </div>
    </div>
 );
}*/

export default App;
