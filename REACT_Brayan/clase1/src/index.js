import React from "react";
import {createRoot} from "react-dom/client";
import EnsaladaDeFrutas from './EnsaladaDeFrutas'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<EnsaladaDeFrutas />);
