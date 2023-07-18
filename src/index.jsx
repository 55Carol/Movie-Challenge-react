//
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from './Detail.jsx';


const router = createBrowserRouter([
  {
    path: "/" ,
    element: <App />
  },
  {
     path:  "/Detail",
    element: <Detail/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>
);
