import React from "react";
import ReactDOM from "react-dom/client"; // Importamos desde 'react-dom/client'
import EnsaladaDeFrutas from "./componentes/ensaladaDeFrutas";

// Creamos la raíz usando createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizamos la aplicación dentro de StrictMode
root.render(
  <React.StrictMode>
    <EnsaladaDeFrutas />
  </React.StrictMode>
);