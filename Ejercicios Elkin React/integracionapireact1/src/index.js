import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";

// 1. Obtener el elemento contenedor del DOM
const container = document.getElementById("root");

// 2. Crear un root de React
const root = createRoot(container);

// 3. Renderizar la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);