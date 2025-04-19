import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Frontend from './componentes/Layaout';
import Home from './paginas/Home';
import SobreNosotros from './paginas/SobreNosotros';
import Rutas from './paginas/Rutas';
import RutasPath from './paginas/RutasPath';


const router = createBrowserRouter(// se ponen [] porque es un pack qeu se ponen varios elementos-- el pathcarga la ruta principal
  [
    {
      path: '/',
      element: <Frontend/>,
      children:
      [//lleva rreglo con varios elementos entonces se pone []
        {
index: true,//es la ruta principal
element: <Home/>,
        },
        {
path: '/sobre-nosotros',
element: <SobreNosotros/>
        },
        {
          path: '/rutas',
          element: <Rutas/>
                  },
        {
          path: '/rutas-path/:id/:slug',
          element: <RutasPath/>
           },
             
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
