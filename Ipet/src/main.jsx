import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Login from './routes/Login.jsx';


const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        //Vira a URL padrao 
        path: "*",
        element: <Login />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
