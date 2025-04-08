import React from "react";
import {createRoot} from "react-dom/client";
// import "./index.css";
import Padre from './Padre'
//aca renderiza donde slecciona el root del html

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    < React.StrictMode> 
    <Padre />
    </React.StrictMode>
   );