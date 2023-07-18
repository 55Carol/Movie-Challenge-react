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
      <Botones />
      <Api />
       </div>
  );
  }



export default App;
