import React from "react";
import ReactDOM from "react-dom/client"; // Importamos desde 'react-dom/client'
import App from "./App"


// Creamos la raíz usando createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizamos la aplicación dentro de StrictMode
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
);