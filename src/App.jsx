//
/*import { useState } from 'react';*/
import './App.css'
import Api from './componentes/Api';
import Header from './componentes/header';
import { Routes, Route} from 'react-router-dom';
import Detail from './componentes/Detail';
import Botones from './componentes/Botones';

//armado de esqueleto de html
 function App() {
   return (
    <div className='container'>
       <Header />
       <Botones/>
       <Routes>
         <Route path='/' element={<Api />}>  
         </Route>
         <Route path='/detail' element={<p> hola soy detalle</p>}></Route>
         <Route path='/detail/:detailId' element={<Detail />}></Route>
       </Routes>
       
       </div>
  );
  }



export default App;
