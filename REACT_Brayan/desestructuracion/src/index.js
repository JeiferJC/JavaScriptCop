import React from "react";
import {createRoot} from "react-dom/client";
import Contador from './componentes'


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    < React.StrictMode> 
    <Contador/>
    </React.StrictMode>
   );