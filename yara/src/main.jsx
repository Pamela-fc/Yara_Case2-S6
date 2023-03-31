import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Sobre from './routes/sobre';
import Contato from './routes/Contato'


import Home from './routes/home';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'; 

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
  {
        path: "/sobre",
        element: <Sobre />,
      },
<<<<<<< HEAD
  {
=======
    {
>>>>>>> 2532afe287dc1cd79ab38f0bbea9206301d7a2ad
        path: "/Contato",
        element: <Contato />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
