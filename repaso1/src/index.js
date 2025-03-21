import React from "react";
import ReactDOM from "react-dom/client"; // Importamos desde 'react-dom/client'

import Padre from "./Padre";
import Hijos from "./Hijos";

// Creamos la raíz usando createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizamos la aplicación dentro de StrictMode
root.render(
  <React.StrictMode>
   <Padre>
    <Hijos nombre= 'Francisco'/>
    <Hijos nombre= 'Carlos'/>
    <Hijos nombre= 'Martha'/>

   </Padre>
  </React.StrictMode>
);