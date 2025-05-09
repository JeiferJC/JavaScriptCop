import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../public/css/blog.css";
import "./Index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Frontend from "./componentes/Frontend";
import Home from "./paginas/Home";
import SobreNosotros from "./paginas/SobreNosotros";
import Rutas from "./paginas/Rutas";
import RutasPath from "./paginas/RutasPath";
import RutasQuery from "./paginas/RutasQuery";
import ErrorPersonalizado from "./paginas/ErrorPersonalizado";
import Error404 from "./paginas/Error404";
import Hooks from "./paginas/Hooks";
import HooksEventoClick from "./paginas/HooksEventoClick";
import HooksUseState from "./paginas/HooksUseState";
import HooksEventoOnchange from "./paginas/HooksEventoOnchange";

const router = createBrowserRouter(
  // se ponen [] porque es un pack qeu se ponen varios elementos-- el pathcarga la ruta principal
  [
    {
      path: "/",
      element: <Frontend />,
      children: [
        //lleva rreglo con varios elementos entonces se pone []
        {
          index: true, //es la ruta principal
          element: <Home />,
        },
        {
          path: "/sobre-nosotros",
          element: <SobreNosotros />,
        },
        {
          path: "/rutas",
          element: <Rutas />,
        },
        {
          path: "/rutas-path/:id/:slug",
          element: <RutasPath />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
        {
          path: "/hooks",
          element: <Hooks />,
        },
        {
          path: "/Hooks/evento/click",
          element: <HooksEventoClick />,
        },
        {
          path: "/Hooks/useState",
          element: <HooksUseState />,
        },
        {
          path: "/Hooks/evento/onchange",
          element: <HooksEventoOnchange/>,
        },

        {
          path: "/rutas/query-sttring",
          element: <RutasQuery />,
          errorElement: <ErrorPersonalizado />, //para manejar errores
        },
        
      ],
    },
  ]
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
